// import { Navigate } from "react-routes-dom";
import { Navigate } from "react-router-dom";

function ProtectedRoutes({ Children, user }) {
  if (user) {
    return Children;
  } else {
    return <Navigate to="/login" />;
  }
}
export default ProtectedRoutes;
