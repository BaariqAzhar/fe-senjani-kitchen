import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./views/Home";
import JadwalMenu from "./views/JadwalMenu";
import DailyCatering from "./views/DailyCatering";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/jadwalmenu">
            <JadwalMenu />
          </Route>
          <Route path="/dailycatering">
            <DailyCatering />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
