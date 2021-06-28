import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import GlobalStyle from "./styles/global-style";

const App = () => (
  <>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
    <GlobalStyle />
  </>
);

export default App;
