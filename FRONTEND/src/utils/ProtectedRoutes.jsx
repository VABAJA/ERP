import { Outlet } from "react-router";
import Login from "../components/Login";

const useAuth = () => {
    const user = { loggedIn: true }
    return user && user.loggedIn;
};

const ProtectedRoutes = () => {
    const isAuth = useAuth();
    return isAuth ? <Outlet />:<Navigate to="/" />;

};

export default ProtectedRoutes;
