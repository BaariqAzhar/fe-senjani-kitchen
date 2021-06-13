import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Card, WhiteSpace, WingBlank } from "antd-mobile";
import { useHistory, Link } from "react-router-dom";

import UrlApi from "./../../../UrlApi";
import kuponImg from "./kupon.svg";
import "./kupon.css";

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
    const listItems = dataState.map((data) => {
      let jenisPaketKupon = "";
      if (data.jenis_paket_kupon === "basic_meal_box") {
        jenisPaketKupon = "Basic meal box";
      } else if (data.jenis_paket_kupon === "reusable_meal_box") {
        jenisPaketKupon = "Reusable meal box";
      } else if (data.jenis_paket_kupon === "deluxe_meal_box") {
        jenisPaketKupon = "Deluxe meal box";
      } else if (data.jenis_paket_kupon === "couple_pack") {
        jenisPaketKupon = "Couple pack";
      } else if (data.jenis_paket_kupon === "family_pack") {
        jenisPaketKupon = "Family pack";
      }
      let jenisNasi = "";
      if (data.jenis_nasi === "nasi_merah") {
        jenisNasi = "Nasi merah";
      } else if (data.jenis_nasi === "nasi_putih") {
        jenisNasi = "Nasi putih";
      } else if (data.jenis_nasi === "tanpa_nasi") {
        jenisNasi = "Tanpa nasi";
      }
      return (
        <div>
          <Card>
            <Card.Header
              title={`${jenisPaketKupon} - ${jenisNasi} ${data.jumlah_kupon}x`}
              thumb={kuponImg}
            />
            <Card.Body>
              <strong>
                Jumlah kupon tersisa : {data.jumlah_kupon_tersisa}
              </strong>
              <p>Tanggal pembelian : {data.tanggal_pembelian_kupon}</p>
              <p>Tanggal kedaluwarsa : {data.tanggal_kedaluwarsa}</p>
              <WingBlank>
                <RenderButtonKupon data={data} /> <WhiteSpace />
              </WingBlank>
            </Card.Body>
          </Card>
          <WhiteSpace size="md" />
        </div>
      );
    });
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
    } else if (
      data.status_kupon === "menunggu_diverifikasi" ||
      data.status_kupon === "sudah_dibayar"
    ) {
      return (
        <Button type="primary" onClick={() => onClickGunakanKupon(data)}>
          Gunakan Kupon
        </Button>
      );
    } else if (data.status_kupon === "belum_dibayar") {
      return (
        <Button type="warning" onClick={() => onClickUnggahBukti(data)}>
          Unggah Bukti Pembayaran
        </Button>
      );
    } else if (data.status_kupon === "gagal_dibayar") {
      return (
        <Button type="primary" disabled>
          Kupon Dibatalkan
        </Button>
      );
    } else {
      return <div></div>;
    }
  };

  const onClickGunakanKupon = (data) => {
    localStorage.setItem("selectedKuponPelanggan", JSON.stringify(data));
    history.push("/PilihJadwalMenu");
  };

  const onClickUnggahBukti = (data) => {
    localStorage.setItem("kuponPelanggan", JSON.stringify(data));
    history.push("/FormBuktiPembayaran");
  };

  return (
    <div className="grid">
      <div className="container">
        <WingBlank>
          <h1>Riwayat Kupon</h1>
          <KuponBoxList />
        </WingBlank>
      </div>
    </div>
  );
};

export default Kupon;
