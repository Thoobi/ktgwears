import { useAuth } from "@/hooks/useAuth";
import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";

const ProtectedRoutes = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuth();

  //   console.log("Auth State:", { isAuthenticated, location });
  if (!isAuthenticated && !isLoading) {
    return <Navigate to="/auth" state={{ from: location.pathname }} replace />;
  }
  return children;
};

ProtectedRoutes.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProtectedRoutes;
