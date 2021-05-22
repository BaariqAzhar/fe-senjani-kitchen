import { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import {
  List,
  Radio,
  Flex,
  WhiteSpace,
  WingBlank,
  TabBar,
  Button,
  NavBar,
} from "antd-mobile";
import axios from "axios";
import { StickyContainer, Sticky } from "react-sticky";

import IsLogin from "./../Auth/IsLogin";
import UrlApi from "./../../UrlApi";
import basicImg from "./basic.png";
import arrowLeftImg from "./arrowLeft.svg";
import "./BasicCatering.scss";
import "../Function/jenisNasi";
import jenisNasi from "../Function/jenisNasi";

function BasicCatering() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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

  const [checkedState, setCheckedState] = useState(0);
  const [selectedPaketKuponState, setselectedPaketKuponState] = useState();
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
      <div>
        <div style={{ backgroundColor: "white", paddingBottom: "10px" }}>
          <div style={{ display: "flex" }}>
            <img
              onClick={() => {
                history.goBack();
              }}
              style={{ marginLeft: "10px", marginRight: "10px" }}
              src={arrowLeftImg}
              alt=""
            />
            <h1>Basic Catering</h1>
          </div>
          <div style={{ display: "grid", placeItems: "center" }}>
            <img src={basicImg} alt="" />
          </div>
          <WingBlank size="lg" style={{ margin: "0px 30px 0px 30px" }}>
            <p>
              Katering harian dengan kotak makan sekali pakai. Pilih jumlah
              kuponmu dan pakai kapanpun kamu mau
            </p>
          </WingBlank>
        </div>
        <WingBlank>
          <h2>Nasi Putih</h2>
        </WingBlank>
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
        <WingBlank>
          <h2>Nasi Merah</h2>
        </WingBlank>
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
          <WingBlank>
            <WhiteSpace size="lg" />
            <strong>Kupon Basic Catering</strong>
            <p>
              {jenisNasi(selectedPaketKuponState.jenis_nasi)}{" "}
              {selectedPaketKuponState.jumlah_kupon}x Rp{" "}
              {selectedPaketKuponState.harga}{" "}
            </p>
            <Button
              type="primary"
              onClick={() => {
                history.push("/MetodePembayaran");
              }}
            >
              Pilih Metode Pembayaran
            </Button>
            <WhiteSpace />
          </WingBlank>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default BasicCatering;
