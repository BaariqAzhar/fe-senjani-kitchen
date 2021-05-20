import { useEffect, useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { Button } from "antd-mobile";

import IsLogin from "./../../Auth/IsLogin";

const Akun = () => {
  let history = useHistory();

  const [pelanggan, setPelanggan] = useState({
    nama_lengkap: "",
    email: "",
    no_hp_wa: "",
  });
  useEffect(() => {
    setPelanggan(JSON.parse(localStorage.getItem("pelanggan")));
  }, []);

  const onClickKeluar = () => {
    localStorage.clear();
    history.push("/Login");
  };

  return (
    <div>
      <IsLogin />
      <p>{pelanggan.nama_lengkap}</p>
      <p>{pelanggan.email}</p>
      <p>{pelanggan.no_hp_wa}</p>
      <Button type="primary" onClick={onClickKeluar}>
        Keluar
      </Button>
    </div>
  );
};

export default Akun;
