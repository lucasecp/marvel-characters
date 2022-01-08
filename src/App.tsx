import { Router } from "./routes";
import { GlobalStyle } from "./styles/global";
import { MenuProvider } from './context/useMenu';

function App() {
  return (
    <MenuProvider>
      <Router />
      <GlobalStyle />
    </MenuProvider>
  );
}

export default App;
