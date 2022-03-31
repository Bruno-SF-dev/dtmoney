import Modal from "react-modal";

import { GlobalStyle } from "./styles/global";

import { RoutesApp } from "./routes/routes";
import { AuthProvider } from "./contexts/authContext";

Modal.setAppElement("#root");

function App() {
  return (
    <AuthProvider>
      <GlobalStyle />
      <RoutesApp />
    </AuthProvider>
  );
}

export { App };
