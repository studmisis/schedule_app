import { useState } from "react";
import LoginPage from "./pages/LoginPage";
import SchedulePage from "./pages/SchedulePage";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <>
      {isAuthenticated ? <SchedulePage /> : <LoginPage />}
    </>
  );
}

export default App;