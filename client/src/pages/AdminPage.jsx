import { useContext, useEffect, useState } from "react";
import UserContext from "../context/UserContext";
import Button from "../component/ui/Button";
import useApi from "../hooks/useApi";
import Modal from "../component/ui/Modal";

export default function AdminPage() {
	const { user, logout } = useContext(UserContext);
	const { execute, loading, data, error } = useApi();
	const [modalType, setModalType] = useState(null);
	const [selectedGroup, setSelectedGroup] = useState(null);

	useEffect(() => {
		async function getData() {
			await execute({
				method: "GET",
				url: "/admin/dashboard",
			});
		}

		getData();
	}, [execute]);

	if (loading) {
		return <div>Загрузка...</div>;
	}

	if (error) {
		return <div>{error}</div>;
	}

	console.log(data);

	return (
		<main>
			<h1>Панель администратора</h1>

			<p>{user?.full_name}</p>

			<Button onClick={logout}>Выйти</Button>

			<h2>Группы</h2>
			<Button onClick={() => setModalType("group")}>Добавить группу</Button>

			{data?.groups?.map((group) => (
				<div key={group.id}>
					<h3>{group.name}</h3>
					<Button
						onClick={() => {
							setSelectedGroup(group);
							setModalType("student");
						}}
					>
						Добавить студента
					</Button>

					{group.students.map((student) => (
						<div key={student.id}>
							<p>{student.user?.full_name}</p>
							<p>Логин: {student.user?.login}</p>
						</div>
					))}
				</div>
			))}

			<h2>Преподаватели</h2>
			<Button onClick={() => setModalType("teacher")}>
				Добавить преподавателя
			</Button>
			{data?.teachers?.map((teacher) => (
				<div key={teacher.id}>{teacher.user?.full_name}</div>
			))}
			{modalType && (
				<Modal
					title={
						modalType === "group"
							? "Добавить группу"
							: modalType === "student"
								? `Добавить студента в группу ${selectedGroup?.name}`
								: "Добавить преподавателя"
					}
					onClose={() => {
						setModalType(null);
						setSelectedGroup(null);
					}}
					onSubmit={(event) => {
						event.preventDefault();
						console.log("Тип:", modalType);
						console.log("Группа:", selectedGroup);
					}}
				>
					{modalType === "group" && (
						<>
							<label>Название группы</label>
							<input
								type="text"
								name="groupName"
								placeholder="Например, ИС-21"
								required
							/>
						</>
					)}

					{modalType === "student" && (
						<>
							<label>ФИО студента</label>
							<input
								type="text"
								name="fullName"
								placeholder="Иванов Иван Иванович"
								required
							/>

							<label>Логин</label>
							<input type="text" name="login" placeholder="Логин" required />

							<label>Пароль</label>
							<input
								type="password"
								name="password"
								placeholder="Пароль"
								required
							/>
						</>
					)}

					{modalType === "teacher" && (
						<>
							<label>ФИО преподавателя</label>
							<input
								type="text"
								name="fullName"
								placeholder="Иванов Иван Иванович"
								required
							/>

							<label>Логин</label>
							<input type="text" name="login" placeholder="Логин" required />

							<label>Пароль</label>
							<input
								type="password"
								name="password"
								placeholder="Пароль"
								required
							/>
						</>
					)}
				</Modal>
			)}
		</main>
	);
}
