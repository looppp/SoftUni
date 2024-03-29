import { useContext } from "react";
import AuthContext from "../../contexts/authContext";
import { Navigate } from "react-router-dom";

export default function AuthGuard(props) {
  const { isAuthenticated } = useContext(AuthContext);

  if (!isAuthenticated) {
    // navigate('/login')  return null
    //Better way to do it

    return <Navigate to={"/login"} />;
  }

  return <>{props.children}</>;
}
