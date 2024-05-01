import { Route, Router, Switch, useRouter } from "wouter";
import "./styles/App.css";
import Login from "./pages/Login";
import getConfig from './utils/getConfig'
import Home from "./pages/Home";
import { useEffect } from "react";
import { navigate } from "wouter/use-hash-location";

function App() {
  const router = useRouter();
  router.hook;
  router.base;
  const token = localStorage.getItem("clonstagram-token")

  useEffect(() => {
    navigate("/")
  },[token])

  return (
    <>
      <Router>
        <Switch>
          {token ? <Route path="/" component={Home}/> : <Route path="/" component={Login}/>}
        </Switch>
      </Router>
    </>
  );
}

export default App;
