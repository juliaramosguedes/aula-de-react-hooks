import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import { AuthProvider, ThemeProvider } from "./contexts";

const App = () => (
  <ThemeProvider>
    <AuthProvider>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </AuthProvider>
  </ThemeProvider>
);

export default App;
