import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./styles/theme.css";
import { UserProvider } from "./context/UserContext.jsx";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<UserProvider>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</UserProvider>
	</StrictMode>,
);
