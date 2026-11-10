import { useState } from "react";
import "./LoginPage.css";
import Button from "../component/ui/Button";

function LoginPage() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(){

  }


  return (
    <main className="login-page">
      <div className="login-card">
        <h1>Вход в систему</h1>

        <form onSubmit={handleSubmit}>
          <label htmlFor="login">Логин</label>
          <input
            id="login"
            type="text"
            value={login}
            onChange={(event) => setLogin(event.target.value)}
            required
          />

          <label htmlFor="password">Пароль</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
          <Button>Тырк</Button>
        </form>
      </div>
    </main>
  );
}

export default LoginPage;