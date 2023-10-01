import { BrowserRouter } from "react-router-dom";
import "./App.css";
import RouteWithAnimation from "./components/helperComponent/RouteWithAnimation";

function App() {
  return (
    <BrowserRouter>
      <RouteWithAnimation />
    </BrowserRouter>
  );
}

export default App;
