import { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import axios from "axios";
import { List, Radio, Flex, WhiteSpace } from "antd-mobile";
import { values } from "lodash";

import IsLogin from "./../Auth/IsLogin";
import UrlApi from "./../../UrlApi";

function MetodePembayaran() {
  let history = useHistory();
  const qs = require("qs");
  const RadioItem = Radio.RadioItem;

  const [selectedPaketKuponState, setselectedPaketKuponState] = useState(
    JSON.parse(localStorage.getItem("selectedPaketKuponState"))
  );

  const [checkedState, setCheckedState] = useState(
    localStorage.getItem("cara_pembayaran")
  );
  const onChange = (value) => {
    setCheckedState(value);
    console.log(value);
    localStorage.setItem("cara_pembayaran", value);
  };

  const onClickBayar = () => {
    const idPaketKupon = parseInt(
      JSON.parse(localStorage.getItem("selectedPaketKuponState")).id_paket_kupon
    );
    const kodePaketKupon = JSON.parse(
      localStorage.getItem("selectedPaketKuponState")
    ).kode_paket_kupon;
    const idPelanggan = JSON.parse(
      localStorage.getItem("pelanggan")
    ).id_pelanggan;
    const jumlahKupon = parseInt(
      JSON.parse(localStorage.getItem("selectedPaketKuponState")).jumlah_kupon
    );
    const caraPembayaran = checkedState;
    console.log(
      idPaketKupon +
        ", " +
        kodePaketKupon +
        ", " +
        idPelanggan +
        ", " +
        jumlahKupon +
        ", " +
        caraPembayaran
    );
    sendDataApi(
      idPaketKupon,
      kodePaketKupon,
      idPelanggan,
      jumlahKupon,
      caraPembayaran
    );
  };

  const sendDataApi = async (
    idPaketKupon,
    kodePaketKupon,
    idPelanggan,
    jumlahKupon,
    caraPembayaran
  ) => {
    const keyValue = {
      id_paket_kupon: idPaketKupon,
      kode_paket_kupon: kodePaketKupon,
      id_pelanggan: idPelanggan,
      jumlah_kupon: jumlahKupon,
      cara_pembayaran: caraPembayaran,
    };
    const res = await axios.post(
      `${UrlApi}kuponpelanggan/createKuponPelanggan`,
      qs.stringify(keyValue)
    );
    localStorage.setItem(
      "kuponPelanggan",
      JSON.stringify(await res.data.dataKuponPelanggan)
    );
    console.log(await res.data.id_kupon_pelanggan);
    localStorage.setItem(
      "id_kupon_pelanggan",
      await res.data.id_kupon_pelanggan
    );
    history.push("/FormBuktiPembayaran");
  };

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

      {selectedPaketKuponState ? (
        <div>
          <h3>Pilih Metode Pembayaran</h3>
          <p>Total Pembayaran</p>

          <p>Rp {selectedPaketKuponState.harga}</p>
          <p>{selectedPaketKuponState.jenis_paket_kupon}</p>
          <p>{selectedPaketKuponState.jenis_nasi}</p>
          <p>{selectedPaketKuponState.jumlah_kupon} X</p>

          <h3>mau bayar pakai apa?</h3>
          <List>
            <RadioItem
              key="gopay"
              checked={checkedState === "gopay"}
              onChange={() => onChange("gopay")}
            >
              GoPay
            </RadioItem>
            <RadioItem
              key="dana"
              checked={checkedState === "dana"}
              onChange={() => onChange("dana")}
            >
              Dana
            </RadioItem>
            <RadioItem
              key="jenius"
              checked={checkedState === "jenius"}
              onChange={() => onChange("jenius")}
            >
              Jenius
            </RadioItem>
            <RadioItem
              key="bni"
              checked={checkedState === "bni"}
              onChange={() => onChange("bni")}
            >
              BNI
            </RadioItem>
          </List>

          <button onClick={onClickBayar}>Bayar</button>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
export default MetodePembayaran;
