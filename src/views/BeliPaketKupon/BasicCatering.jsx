import { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import { List, Radio, Flex, WhiteSpace } from "antd-mobile";
import axios from "axios";

import IsLogin from "./../Auth/IsLogin";
import UrlApi from "./../../UrlApi";

function BasicCatering() {
  let history = useHistory();
  const RadioItem = Radio.RadioItem;
  const qs = require("qs");

  const [dataState, setDataState] = useState([]);
  const fetchSomething = async () => {
    const keyValue = { jenis_paket_kupon: "basic_meal_box" };
    axios
      .post(
        `${UrlApi}paketkupon/showPaketKuponBerdasarkanJenisPaketKupon`,
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

  const [checkedState, setCheckedState] = useState(
    localStorage.getItem("id_paket_kupon")
  );
  const [selectedPaketKuponState, setselectedPaketKuponState] = useState(
    JSON.parse(localStorage.getItem("selectedPaketKuponState"))
  );
  const onChange = (value) => {
    setCheckedState(value.id_paket_kupon);
    console.log(value);
    localStorage.setItem("id_paket_kupon", value.id_paket_kupon);
    console.log(localStorage.getItem("id_paket_kupon"));
    setselectedPaketKuponState(value);
    localStorage.setItem("selectedPaketKuponState", JSON.stringify(value));
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
      <h3>Basic Catering</h3>
      <p>
        Katering harian dengan kotak makan sekali pakai. Pilih jumlah kuponmu
        dan pakai kapanpun kamu mau
      </p>
      <h4>Nasi Putih</h4>
      <List>
        {dataState.map((i) =>
          i.jenis_nasi === "nasi_putih" ? (
            <RadioItem
              key={i.id_paket_kupon}
              checked={checkedState === i.id_paket_kupon}
              onChange={() => onChange(i)}
            >
              {i.jumlah_kupon}
              <List.Item.Brief>Rp {i.harga}</List.Item.Brief>
            </RadioItem>
          ) : (
            <div></div>
          )
        )}
      </List>
      <h4>Nasi Merah</h4>
      <List>
        {dataState.map((i) =>
          i.jenis_nasi === "nasi_merah" ? (
            <RadioItem
              key={i.id_paket_kupon}
              checked={checkedState === i.id_paket_kupon}
              onChange={() => onChange(i)}
            >
              {i.jumlah_kupon}
              <List.Item.Brief>Rp {i.harga}</List.Item.Brief>
            </RadioItem>
          ) : (
            <div></div>
          )
        )}
      </List>

      {selectedPaketKuponState ? (
        <div>
          <div>
            <h5>
              {selectedPaketKuponState.jenis_nasi}{" "}
              {selectedPaketKuponState.jumlah_kupon}{" "}
              {selectedPaketKuponState.harga}{" "}
            </h5>
            <Link to="/MetodePembayaran">
              <button>Pilih Metode Pembayaran</button>
            </Link>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default BasicCatering;
