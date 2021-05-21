import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

import UrlApi from "./../../../UrlApi";
import { Button } from "antd-mobile";

const Pesanan = () => {
  let history = useHistory();
  const qs = require("qs");

  const [pelanggan, setPelanggan] = useState({ id_pelanggan: 0 });

  const [apiMixPesanan, setApiMixPesanan] = useState([
    {
      status_pesanan: "",
      tanggal_menu: "",
      waktu_menu: "",
      nama_menu: "",
      keterangan_menu: "",
      foto_menu: "",
      jenis_paket_kupon: "",
      jenis_nasi: "",
    },
  ]);
  const processApiMixPesanan = async () => {
    const keyValue = {
      id_pelanggan: pelanggan.id_pelanggan,
    };
    axios
      .post(
        `${UrlApi}mix/showPesananBerdasarkanIdPelanggan`,
        qs.stringify(keyValue)
      )
      .then((respone) => {
        setApiMixPesanan(respone.data);
        localStorage.setItem("apiMixPesanan", JSON.stringify(respone.data));
      });
  };
  useEffect(() => {
    processApiMixPesanan();
    setPelanggan(JSON.parse(localStorage.getItem("pelanggan")));
  }, []);

  const PesanBoxList = () => {
    const listItems = apiMixPesanan.map((data, index) => (
      <div style={{ borderStyle: "solid" }}>
        <img
          src={`${UrlApi}assets/fotoMenu/${data.foto_menu}`}
          alt=""
          srcset=""
          style={{ height: "50px" }}
        />
        <p>{data.status_pesanan}</p>
        <p>{data.tanggal_menu}</p>
        <p>{data.waktu_menu}</p>
        <p>{data.keterangan_menu}</p>
        <p>{data.jenis_paket_kupon}</p>
        <p>{data.jenis_nasi}</p>
        <Button onClick={() => onClickLihatDetail(index)}>Lihat Detail</Button>
      </div>
    ));
    return <div>{listItems}</div>;
  };

  const onClickLihatDetail = (index) => {
    localStorage.setItem("selectedIndexPesanan", index);
    history.push("/DetailPesanan");
  };

  return (
    <div>
      <h1>you are in Pesanan</h1>
      <PesanBoxList />
    </div>
  );
};

export default Pesanan;
