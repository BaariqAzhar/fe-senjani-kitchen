import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card } from "antd-mobile";

const Beranda = () => {
  return (
    <div>
      <div>Jumbotron</div>
      <div>
        <Link to="/jadwalmenu">Jadwal Menu Harian</Link>
      </div>
      <div>
        <Link to="/DailyCatering">Katering Harian</Link>
      </div>
      <h2>Beli Paket Kuponmu</h2>
      <div>
        <Link to="/BasicCatering">
          <h3>Basic Catering</h3>
          <p>Katering harian kotak makan sekali pakai dengan menu lengkap lauk utama, lauk pendamping, sayur dan dessert   </p>
        </Link>
      </div>
      <div>
        <Link to="">Katering Acara</Link>
      </div>
      <div>
        <Link to="">Bantuan</Link>
      </div>
    </div>
  );
};

export default Beranda;
