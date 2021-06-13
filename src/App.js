import logo from "./logo.svg";
// import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./views/Home";
import JadwalMenu from "./views/JadwalMenu";
import BasicCatering from "./views/BeliPaketKupon/BasicCatering";
import MetodePembayaran from "./views/BeliPaketKupon/MetodePembayaran";
import FormBuktiPembayaran from "./views/BeliPaketKupon/FormBuktiPembayaran";
import Login from "./views/Auth/Login";
import Register from "./views/Auth/Register";
import PilihJadwalMenu from "./views/GunakanKupon/PilihJadwalMenu";
import FormDetailPengantaran from "./views/GunakanKupon/FormDetailPengantaran";
import DetailPesanan from "./views/Home/Pesanan/DetailPesanan";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/jadwalmenu">
            <JadwalMenu />
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
          <Route path="/Register">
            <Register />
          </Route>
          <Route path="/PilihJadwalMenu">
            <PilihJadwalMenu />
          </Route>
          <Route path="/FormDetailPengantaran">
            <FormDetailPengantaran />
          </Route>
          <Route path="/DetailPesanan">
            <DetailPesanan />
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
