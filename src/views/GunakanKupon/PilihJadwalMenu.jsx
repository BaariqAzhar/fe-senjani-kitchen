import { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import {
  List,
  Radio,
  Flex,
  WhiteSpace,
  Button,
  WingBlank,
  Checkbox,
} from "antd-mobile";
import axios from "axios";

import IsLogin from "./../Auth/IsLogin";
import UrlApi from "./../../UrlApi";
import Menu from "./Menu";
import arrowLeftImg from "./arrowLeft.svg";

function PilihJadwalMenu() {
  let history = useHistory();
  const RadioItem = Radio.RadioItem;
  const qs = require("qs");
  const CheckboxItem = Checkbox.CheckboxItem;

  const [dataApiShowAllMenu, setDataApiShowAllMenu] = useState([
    {
      id_menu: 0,
      foto_menu: "",
      tanggal_menu: "",
      waktu_menu: "",
      nama_menu: "",
      keterangan_menu: "",
    },
  ]);
  const processApiShowAllMenu = () => {
    axios
      .post(`${UrlApi}menu/showAllMenu`)
      .then((respone) => setDataApiShowAllMenu(respone.data));
  };
  useEffect(() => {
    processApiShowAllMenu();
  }, []);

  const [selectedIdMenu, setSelectedIdMenu] = useState([]);
  const RenderListMenu = () => {
    const listItems = dataApiShowAllMenu.map((data) => (
      <div>
        <div onClick={() => onClickCheckbox(data.id_menu)}>
          <Menu
            selectedIdMenu={selectedIdMenu}
            isChecked={selectedIdMenu.includes(data.id_menu)}
            data={data}
          />
        </div>
        <WhiteSpace />
      </div>
    ));
    return <List>{listItems}</List>;
  };
  useEffect(() => {
    localStorage.setItem("selectedIdMenu", selectedIdMenu);
  }, [selectedIdMenu]);
  const onClickCheckbox = (id) => {
    if (selectedIdMenu.includes(id)) {
      let arr = selectedIdMenu;
      arr = arr.filter((item) => item !== id);
      setSelectedIdMenu(arr);
    } else {
      setSelectedIdMenu([...selectedIdMenu, id]);
    }
  };

  const [selectedKuponPelanggan, setSelectedKuponPelanggan] = useState({
    jumlah_kupon_tersisa: 0,
  });
  useEffect(() => {
    setSelectedKuponPelanggan(
      JSON.parse(localStorage.getItem("selectedKuponPelanggan"))
    );
  }, []);

  const onClickNext = () => {
    if (
      parseInt(selectedKuponPelanggan.jumlah_kupon_tersisa) -
        selectedIdMenu.length <
      0
    ) {
      alert("Menu Terpilih Tidak Boleh Lebih dari Kupon Tersedia");
    } else {
      history.push("/FormDetailPengantaran");
    }
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
          <h1>Gunakan Kupon</h1>
        </div>
        <WingBlank>
          <h4>
            Jumlah kupon tersedia :{" "}
            {selectedKuponPelanggan.jumlah_kupon_tersisa}
          </h4>
          <h4>Kupon terpakai : {selectedIdMenu.length}</h4>
          {selectedIdMenu.length > 0 ? (
            <Button type="primary" onClick={onClickNext}>
              Lanjutkan Mengisi Form Pemesanan
            </Button>
          ) : (
            <div></div>
          )}
          <WhiteSpace size="lg" />
          <RenderListMenu />
        </WingBlank>
      </div>
    </div>
  );
}

export default PilihJadwalMenu;
