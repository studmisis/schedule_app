import { createContext, useEffect, useState } from "react";
import useApi from "../hooks/useApi";
import api from "../services/api";

const UserContext = createContext(null);

export function UserProvider({ children }) {
	const [user, setUser] = useState(null);
	const { execute, loading } = useApi();

  async function logout() {
  try {
    await api.get("/auth/logout");
    setUser(null);
  } catch (error) {
    console.error("Ошибка при выходе:", error);
  }
}

	useEffect(() => {
		async function getUser() {
			const result = await execute({
				method: "GET",
				url: "/auth/me",
			});

			if (result) {
				setUser(result.user);
			}
		}

		getUser();
	}, [execute]);

	return (
		<UserContext.Provider value={{ user, setUser, loading, logout }}>
			{children}
		</UserContext.Provider>
	);
}

export default UserContext;
