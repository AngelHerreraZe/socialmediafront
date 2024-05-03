import "./styles/App.css";
import Login from "./pages/Login";
import Home from "./pages/Home";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import AppNavBar from "./components/AppNavBar";

function App() {
  return (
    <>
      <HashRouter>
      <AppNavBar/>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/home" element={<Home />}></Route>
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
