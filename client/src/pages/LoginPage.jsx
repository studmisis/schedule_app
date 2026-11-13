import { useContext, useState } from "react";
import "./LoginPage.css";
import Button from "../component/ui/Button";
import Box from "../component/ui/Box";
import { sheduleIcon, personIcon, eyeIcon, eyeCloseIcon } from "../icons";
import { useNavigate } from "react-router-dom";
import useApi from "../hooks/useApi";
import UserContext from "../context/UserContext";

function LoginPage() {
	const [login, setLogin] = useState("");
	const [password, setPassword] = useState("");
	const [showPassword, setShowPassword] = useState(false);
	const { execute, loading, error } = useApi();
	const { setUser } = useContext(UserContext);
	const navigate = useNavigate();

	function handleLoginChange(event) {
		setLogin(event.target.value);
	}

	function handlePasswordChange(event) {
		setPassword(event.target.value);
	}

	function handleTogglePassword() {
		setShowPassword(!showPassword);
	}

	async function handleSubmit(e) {
		e.preventDefault();

		const result = await execute({
			method: "POST",
			url: "/auth/login",
			data: {
				login,
				password,
			},
		});

		if (result !== null) {
			setUser(result.user);

			if (result.user.role === "admin") {
				navigate("/admin");
			} else {
				navigate("/schedule");
			}
		}
	}

	const disabledButton = !login.trim() || !password.trim() || loading;

	return (
		<main className="login-page">
			<Box className="login-card">
				<img src={sheduleIcon} alt="schedule" />
				<h1>Вход в систему</h1>
				<form className="login-form" onSubmit={handleSubmit}>
					<label htmlFor="login">Логин</label>
					<input
						id="login"
						type="text"
						value={login}
						onChange={handleLoginChange}
						required
						className="login-input"
					/>

					<label htmlFor="password">Пароль</label>
					<div className="password-field">
						<input
							id="password"
							type={showPassword ? "text" : "password"}
							value={password}
							onChange={handlePasswordChange}
							required
							className="login-input"
						/>

						<Button className="password-toggle" onClick={handleTogglePassword}>
							<img src={showPassword ? eyeCloseIcon : eyeIcon} alt="" />
						</Button>
					</div>
					<Button
						className="login-button"
						disabled={disabledButton}
						type="submit"
					>
						<img src={personIcon} alt="person" />
						{loading ? "Входим..." : "Войти"}
					</Button>
				</form>
			</Box>
		</main>
	);
}

export default LoginPage;
