import { useEffect, useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { Button, WingBlank, WhiteSpace, Card, List } from "antd-mobile";

import "./akun.css";

const Akun = () => {
  const Item = List.Item;
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
    <div className="grid">
      <WingBlank className="container">
        <h1>Akun</h1>
        <List.Item>
          Nama <List.Item.Brief>{pelanggan.nama_lengkap}</List.Item.Brief>
        </List.Item>
        <List.Item>
          Email <List.Item.Brief>{pelanggan.email}</List.Item.Brief>
        </List.Item>
        <List.Item>
          No HP (Whatsapp){" "}
          <List.Item.Brief>{pelanggan.no_hp_wa}</List.Item.Brief>
        </List.Item>
        <List.Item>
          Alamat <List.Item.Brief>{pelanggan.alamat}</List.Item.Brief>
        </List.Item>
        <List.Item>
          Catatan Makanan{" "}
          <List.Item.Brief>{pelanggan.alergi_makanan}</List.Item.Brief>
        </List.Item>
        <WhiteSpace size="lg" />
        <Button type="warning" onClick={onClickKeluar}>
          Keluar
        </Button>
      </WingBlank>
    </div>
  );
};

export default Akun;
