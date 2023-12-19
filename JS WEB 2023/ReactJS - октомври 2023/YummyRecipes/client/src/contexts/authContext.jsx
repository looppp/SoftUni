import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import usePersistedState from "../hooks/usePersistedState";
import * as authService from "../services/authService";
import * as profileService from "../services/profileService";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [auth, setAuth] = usePersistedState("auth", {});

  const loginSubmitHandler = async (values) => {
    const result = await authService.login(values.email, values.password);

    setAuth(result);

    localStorage.setItem("accessToken", result.accessToken);

    navigate("/");
  };

  const registerSubmitHandler = async (values) => {
    //Creating the basic data for the Profile on registration
    const aboutYou = "Tell us more about yourself. Double click to write";
    const profileUrl =
      "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";

    const payload = new Object({ aboutYou, profileUrl });

    const result = await authService.register(values.email, values.password);
    await profileService.createProfile(payload);

    setAuth(result);

    localStorage.setItem("accessToken", result.accessToken);

    navigate("/");
  };

  const logoutHandler = () => {
    setAuth({});
    navigate("/");
    localStorage.removeItem("accessToken");
  };

  const values = {
    loginSubmitHandler,
    registerSubmitHandler,
    logoutHandler,
    username: auth.username || auth.email,
    email: auth.email,
    userId: auth._id,
    isAuthenticated: !!auth.email,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

AuthContext.displayName = "AuthContext";

export default AuthContext;
