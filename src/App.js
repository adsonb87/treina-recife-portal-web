import "./App.css";
import { GlobalProvider } from "./contexts/GlobalContext";
import TreinaRecifeRoutes from "./routes/TreinaRecifeRoutes";


function App() {
  return (
    <GlobalProvider>
      <TreinaRecifeRoutes/>
    </GlobalProvider>
  );
}

export default App;
