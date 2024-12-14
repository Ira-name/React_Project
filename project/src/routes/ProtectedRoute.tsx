import { FC, ReactNode, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute: FC<ProtectedRouteProps> = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const user = localStorage.getItem("user");
  const role = localStorage.getItem("role");

  useEffect(() => {
    if (!user) {
      navigate("/login");
    } else {
      if (role === "user" && location.pathname === "/users") {
        navigate("/unauthorized");
      }
    }
  }, [user, role, navigate, location]);

  return <>{children}</>;
};

export default ProtectedRoute;
