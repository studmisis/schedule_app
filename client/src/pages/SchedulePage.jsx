import { useContext } from "react";
import UserContext from "../context/UserContext";
import Button from "../component/ui/Button";

export default function SchedulePage() {
  	const { logout } = useContext(UserContext);

	return (
    <main>
      <h1>Расписание</h1>
      <Button onClick={logout}>Выйти</Button>
    </main>
  );
}
