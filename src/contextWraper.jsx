import App from "./App";
import { AuthContext, AuthProvider } from "./context/authContecxt";

export const ContextWarper = () => {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  );
};
