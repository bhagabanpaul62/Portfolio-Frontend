import App from "./App";
import { AuthContext, AuthProvider } from "./context/authContecxt";
import { DataProvider } from "./context/DataContetx";

export const ContextWarper = () => {
  return (
    
    <AuthProvider>
      <DataProvider>
        <App />
      </DataProvider>
    </AuthProvider>

  );
};
