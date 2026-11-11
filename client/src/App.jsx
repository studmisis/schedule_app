import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SchedulePage from "./pages/SchedulePage";
import UsersPage from "./pages/UsersPage";


function App() {

  return (
    <Routes>
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/schedule" element={<SchedulePage/>}/>
      <Route path="/users" element={<UsersPage/>}/>
      <Route path="*" element={<Navigate to='/login' replace/>}/>
    </Routes>
  );
}

export default App;