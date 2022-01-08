import { MenuProvider } from "./context/useMenu";
import { Router } from "./routes";
import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <MenuProvider>
      <Router />
      <GlobalStyle />
    </MenuProvider>
  );
}

export default App;
