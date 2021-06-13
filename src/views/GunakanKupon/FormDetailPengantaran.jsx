import { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import axios from "axios";
import {
  List,
  InputItem,
  WhiteSpace,
  TextareaItem,
  Button,
  WingBlank,
} from "antd-mobile";

import IsLogin from "./../Auth/IsLogin";
import UrlApi from "./../../UrlApi";
import arrowLeftImg from "./arrowLeft.svg";

function FormDetailPengantaran() {
  let history = useHistory();
  const qs = require("qs");

  const [pelanggan, setPelanggan] = useState(
    JSON.parse(localStorage.getItem("pelanggan"))
  );
  const [nama, setNama] = useState(pelanggan.nama_lengkap);
  const [alamat, setAlamat] = useState(pelanggan.alamat);
  const [nomorHp, setNomorHp] = useState(pelanggan.no_hp_wa);
  const [catatan, setCatatan] = useState(pelanggan.alergi_makanan);
  const [catatanPesanan, setCatatanPesanan] = useState("");

  const onChangeNama = (value) => {
    setNama(value);
  };
  const onChangeAlamat = (value) => {
    setAlamat(value);
  };
  const onChangeNomorHp = (value) => {
    setNomorHp(value);
  };
  const onChangeCatatan = (value) => {
    setCatatan(value);
  };
  const onChangeCatatanPesanan = (value) => {
    setCatatanPesanan(value);
  };

  const onClickPesan = () => {
    if (
      nama === "" ||
      alamat === "" ||
      nomorHp === "" ||
      catatan === "" ||
      catatanPesanan === ""
    ) {
      alert("semua harus terisi");
      return;
    } else {
      processApiCreatePesanan();
    }
  };

  const [kuponPelanggan, setKuponPelanggan] = useState(
    JSON.parse(localStorage.getItem("selectedKuponPelanggan"))
  );
  const processApiCreatePesanan = async () => {
    const keyValue = {
      id_pelanggan: pelanggan.id_pelanggan,
      id_kupon_pelanggan: kuponPelanggan.id_kupon_pelanggan,
      ids_menu: localStorage.getItem("selectedIdMenu"),
      nama_penerima: nama,
      no_hp_wa_penerima: nomorHp,
      alamat_penerima: alamat,
      alergi_makanan_penerima: catatan,
      catatan_pesanan: catatanPesanan,
    };
    const res = await axios.post(
      `${UrlApi}mix/createPesanan`,
      qs.stringify(keyValue)
    );
    console.log(res);
    alert("Pemesanan Berhasil");
    history.push("/");
  };

  return (
    <div className="grid">
      <div className="container">
        <IsLogin />
        <div style={{ display: "flex", backgroundColor: "white" }}>
          <img
            onClick={() => {
              history.goBack();
            }}
            style={{ marginLeft: "10px", marginRight: "10px" }}
            src={arrowLeftImg}
            alt=""
          />
          <h1>Form Pengantaran</h1>
        </div>
        <WingBlank>
          <h2 align="center">Mohon isi sesuai dengan data penerima menu</h2>
          <List renderHeader={() => "Biodata Penerima"}>
            <InputItem
              placeholder="Baariq Azhar"
              type="text"
              value={nama}
              onChange={onChangeNama}
              clear
            >
              Nama <br /> Penerima
            </InputItem>
            <TextareaItem
              title="Alamat"
              value={alamat}
              placeholder="Jl. Candi 2C No.557 (Kos Rahman 99), Karangbesuki, Kec. Sukun, Kota Malang"
              type="text"
              onChange={onChangeAlamat}
              autoHeight
              clear
            />
            <InputItem
              placeholder="08123456789"
              value={nomorHp}
              type="number"
              onChange={onChangeNomorHp}
              clear
            >
              Nomor HP <br /> Penerima
            </InputItem>
          </List>
          <List renderHeader={() => "Catatan"}>
            <TextareaItem
              title="Makanan"
              value={catatan}
              placeholder="Contoh: tidak ada,tidak suka pedas/ Alergi kacang, udang, dll"
              type="text"
              onChange={onChangeCatatan}
              autoHeight
              clear
            />
            <TextareaItem
              title="Pesanan"
              placeholder="Contoh: tidak ada/ ditaruh di satpam/ gantung di gerbang"
              type="text"
              onChange={onChangeCatatanPesanan}
              autoHeight
              clear
            />
          </List>
          <WhiteSpace size="lg" />
          <Button onClick={onClickPesan} type="primary">
            Pesan
          </Button>
        </WingBlank>
      </div>
    </div>
  );
}

export default FormDetailPengantaran;
