import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import GlobalStyle from "./styles/global-style";
import { ThemeStore } from "./contexts/ThemeStore";

const App = () => (
  <ThemeStore>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
    <GlobalStyle />
  </ThemeStore>
);

export default App;
