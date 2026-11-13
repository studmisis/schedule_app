import { Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import UserContext from "./context/UserContext";

import LoginPage from "./pages/LoginPage";
import SchedulePage from "./pages/SchedulePage";
import AdminPage from "./pages/AdminPage";

function App() {
	const { user, loading } = useContext(UserContext);

	if (loading) {
		return <div>Загрузка...</div>;
	}

	if (!user) {
		return (
			<Routes>
				<Route path="/login" element={<LoginPage />} />
				<Route path="*" element={<Navigate to="/login" replace />} />
			</Routes>
		);
	}

	if (user.role === "admin") {
		return (
			<Routes>
				<Route path="/admin" element={<AdminPage />} />
				<Route path="/schedule" element={<SchedulePage />} />
				<Route path="*" element={<Navigate to="/admin" replace />} />
			</Routes>
		);
	}

	if (user.role === "teacher" || user.role === "student") {
		return (
			<Routes>
				<Route path="/schedule" element={<SchedulePage />} />
				<Route path="*" element={<Navigate to="/schedule" replace />} />
			</Routes>
		);
	}

	return <Navigate to="/login" replace />;
}

export default App;
