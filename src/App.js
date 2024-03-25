import logo from "./logo.svg";
import "./App.css";
import { Button } from "@mui/material";
import Customers from "./components/pages/Customers";
import Footer from "./components/shared/Footer";

function App() {
  return (
    <div className="App">
      <Customers />
      <Footer />
    </div>
  );
}

export default App;
