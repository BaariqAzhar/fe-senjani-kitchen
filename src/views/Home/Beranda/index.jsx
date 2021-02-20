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
        <Link to="">Katering Harian</Link>
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
