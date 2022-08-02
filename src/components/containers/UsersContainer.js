import getUsers from "../../API/getUsers";
import { useAsync } from "../../HOOKS/useAsync";
import ListCards from "../ListCards";

const UsersContainer = () => {
  const { value, status, error } = useAsync(getUsers, true);
  if (status === "pending") {
    return <>cargando...</>;
  }
  if (status === "error") {
    return <>error...</>;
  }
  if (status === "idle") {
    return <></>;
  }

  return <ListCards value={value} />;
};

export default UsersContainer;
