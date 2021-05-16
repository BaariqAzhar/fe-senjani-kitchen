import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./views/Home";
import JadwalMenu from "./views/JadwalMenu";
import DailyCatering from "./views/DailyCatering"; // !hapus
import BasicCatering from "./views/BeliPaketKupon/BasicCatering";
import MetodePembayaran from "./views/BeliPaketKupon/MetodePembayaran";
import FormBuktiPembayaran from "./views/BeliPaketKupon/FormBuktiPembayaran";
import Login from "./views/Auth/Login";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/jadwalmenu">
            <JadwalMenu />
          </Route>
          <Route path="/dailycatering"> {/* ! hapus */}
            <DailyCatering />
          </Route>
          <Route path="/BasicCatering">
            <BasicCatering />
          </Route>
          <Route path="/MetodePembayaran">
            <MetodePembayaran />
          </Route>
          <Route path="/FormBuktiPembayaran">
            <FormBuktiPembayaran />
          </Route>
          <Route path="/Login">
            <Login />
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
