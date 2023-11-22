import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/use-auth";

export default function RedirectIfNotAuthenticated({children}) {
    const { authUser } = useAuth();

    if (!authUser) {
      return <Navigate to="/" />;
    }
    return children;
  }
  