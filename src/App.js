import Router from "./routes/Router";
import GlobalState from "./contexts/GlobalState";
import { GlobalStyle } from "./GlobalStyles.styled";

export default function App() {

  return (
    <GlobalState>
      <GlobalStyle/>
      <Router />
    </GlobalState>
  );
}
