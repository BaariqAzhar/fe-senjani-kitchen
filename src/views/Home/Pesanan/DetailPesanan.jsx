import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { Button } from "antd-mobile";

import UrlApi from "./../../../UrlApi";
import IsLogin from "./../../Auth/IsLogin";

function DetailPesanan() {
  let history = useHistory();

  const [apiMixPesanan, setApiMixPesanan] = useState(
    JSON.parse(localStorage.getItem("apiMixPesanan"))
  );
  const [selectedIndexPesanan, setSelectedIndexPesanan] = useState(
    parseInt(localStorage.getItem("selectedIndexPesanan"))
  );

  return (
    <div>
      <IsLogin />
      <button
        onClick={() => {
          history.goBack();
        }}
      >
        Go Back
      </button>
      <h4>Detail Pesanan</h4>
      <br />
      <p>Pesanan Kamu</p>
      <div style={{ borderStyle: "solid" }}>
        <img
          src={`${UrlApi}assets/fotoMenu/${apiMixPesanan[selectedIndexPesanan].foto_menu}`}
          alt=""
          srcset=""
          style={{ height: "50px" }}
        />
        <p>{apiMixPesanan[selectedIndexPesanan].status_pesanan}</p>
        <p>{apiMixPesanan[selectedIndexPesanan].tanggal_menu}</p>
        <p>{apiMixPesanan[selectedIndexPesanan].waktu_menu}</p>
        <p>{apiMixPesanan[selectedIndexPesanan].keterangan_menu}</p>
        <p>{apiMixPesanan[selectedIndexPesanan].jenis_paket_kupon}</p>
        <p>{apiMixPesanan[selectedIndexPesanan].jenis_nasi}</p>
      </div>
      <p>Detail Pengantaran</p>
      <div style={{ borderStyle: "solid" }}>
        <p>{apiMixPesanan[selectedIndexPesanan].nama_penerima}</p>
        <p>{apiMixPesanan[selectedIndexPesanan].no_hp_wa_penerima}</p>
        <p>{apiMixPesanan[selectedIndexPesanan].alamat_penerima}</p>
        <p>{apiMixPesanan[selectedIndexPesanan].alergi_makanan_penerima}</p>
        <p>{apiMixPesanan[selectedIndexPesanan].catatan_pesanan}</p>
      </div>
    </div>
  );
}
export default DetailPesanan;
