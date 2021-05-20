import axios from "axios";
import { useEffect, useState } from "react";
import { Button, WhiteSpace, WingBlank } from "antd-mobile";
import { useHistory, Link } from "react-router-dom";

import UrlApi from "./../../../UrlApi";

const Kupon = () => {
  let history = useHistory();
  const qs = require("qs");

  const [dataState, setDataState] = useState([
    {
      jenis_paket_kupon: "",
      jenis_nasi: "",
      jumlah_kupon: 0,
      tanggal_pembelian_kupon: "",
      tanggal_kedaluwarsa: "",
      jumlah_kupon_tersisa: "",
    },
  ]);
  const [idPelanggan, setIdPelanggan] = useState(
    JSON.parse(localStorage.getItem("pelanggan")).id_pelanggan
  );
  const fetchSomething = async () => {
    const keyValue = {
      id_pelanggan: idPelanggan,
    };
    axios
      .post(
        `${UrlApi}mix/showKuponPelangganBerdasarkanIdPelanggan`,
        qs.stringify(keyValue)
      )
      .then((respone) => setDataState(respone.data));
  };
  useEffect(() => {
    fetchSomething();
  }, []);
  useEffect(() => {
    console.log(dataState);
  }, [dataState]);

  const KuponBoxList = () => {
    const listItems = dataState.map((data) => (
      <div style={{ border: "1px solid rgba(0, 0, 0, 0.05)" }}>
        <p>{data.jenis_paket_kupon}</p>
        <p>{data.jenis_nasi}</p>
        <p>{data.jumlah_kupon}</p>
        <p>{data.tanggal_pembelian_kupon}</p>
        <p>{data.tanggal_kedaluwarsa}</p>
        <p>{data.jumlah_kupon_tersisa}</p>
        <WingBlank>
          <RenderButtonKupon data={data} /> <WhiteSpace />
        </WingBlank>
      </div>
    ));
    return <div>{listItems}</div>;
  };

  const RenderButtonKupon = (props) => {
    const data = props.data;
    if (data.jumlah_kupon_tersisa === "0") {
      return (
        <Button type="primary" disabled>
          Kupon Telah Habis
        </Button>
      );
    } else {
      return (
        <Button type="primary" onClick={() => onClickGunakanKupon(data)}>
          Gunakan Kupon
        </Button>
      );
    }
  };

  const onClickGunakanKupon = (data) => {
    localStorage.setItem("selectedKuponPelanggan", JSON.stringify(data));
    history.push("/PilihJadwalMenu");
  };

  return (
    <div>
      <h2>Riwayat Kupon</h2>
      <KuponBoxList />
    </div>
  );
};

export default Kupon;
