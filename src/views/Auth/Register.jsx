import { useHistory, Link } from "react-router-dom";
import {
  List,
  InputItem,
  WhiteSpace,
  TextareaItem,
  Button,
  WingBlank,
} from "antd-mobile";
import { useEffect, useState } from "react";
import axios from "axios";

import UrlApi from "../../UrlApi";
import "./LoginRegister.scss";
import Logo from "./logo.svg";
import xImg from "./x.svg";
import arrowLeftImg from "./arrowLeft.svg";

function Register() {
  let history = useHistory();
  const qs = require("qs");

  const onClickToLogin = () => {
    history.push("/Login");
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");
  const [notePassword, setNotePassword] = useState("");
  const [nama, setNama] = useState("");
  const [alamat, setAlamat] = useState("");
  const [nomorHp, setNomorHp] = useState("");
  const [catatan, setCatatan] = useState("");

  const onChangeEmail = (value) => {
    setEmail(value);
  };
  const onChangePassword = (value) => {
    setPassword(value);
  };
  const onChangeRepassword = (value) => {
    setRepassword(value);
  };
  useEffect(() => {
    if (password !== repassword) {
      setNotePassword("password tidak cocok");
    } else {
      setNotePassword("");
    }
  }, [password, repassword]);
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

  const onClickDaftar = () => {
    if (password !== repassword) {
      alert("Password dan Ulangi Password harus sama");
      return;
    }
    if (
      email === "" ||
      password === "" ||
      repassword === "" ||
      nama === "" ||
      alamat === "" ||
      nomorHp === "" ||
      catatan === ""
    ) {
      alert("semua harus terisi");
      return;
    } else {
      console.log("mantap semua terisi");
      processApiRegister();
    }
  };
  const processApiRegister = async () => {
    const keyValue = {
      email: email,
      password: password,
      nama_lengkap: nama,
      alamat: alamat,
      no_hp_wa: nomorHp,
      alergi_makanan: catatan,
    };
    const res = await axios.post(`${UrlApi}register`, qs.stringify(keyValue));
    console.log(res);
    if ((await res.data.status) === "success") {
      // setIdPelanggan(await res.data.id_pelanggan);
      localStorage.setItem(
        "id_pelanggan",
        JSON.stringify(await res.data.id_pelanggan)
      );
      localStorage.setItem("isLogin", JSON.stringify(true));
      console.log("login success");
      localStorage.setItem("pelanggan", JSON.stringify(res.data.dataPelanggan));
      history.push("/");
    } else if (
      (await res.data.email) === "The email field must contain a unique value."
    ) {
      alert("email telah terdaftar, tidak dapat membuat akun");
    }
  };

  return (
    <div>
      <div className="container">
        <div>
          <div className="backgroundA"></div>
          <div className="backgroundB"></div>
        </div>
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
        <div className="onClickToLogin">
          <img onClick={onClickToLogin} src={arrowLeftImg} alt="" />
        </div>
      </div>
      <WingBlank>
        <h3>Buat Akun Senjanimu</h3>
        <WhiteSpace />
        <InputItem
          placeholder="abc@email.com"
          type="email"
          onChange={onChangeEmail}
        >
          Email
        </InputItem>
        <InputItem
          placeholder="*****"
          type="password"
          onChange={onChangePassword}
        >
          Password
        </InputItem>
        <InputItem
          placeholder="*****"
          type="password"
          onChange={onChangeRepassword}
        >
          Ulangi <br />
          Password
        </InputItem>
        <p>{notePassword}</p>
        <InputItem
          placeholder="baariq azhar"
          type="text"
          onChange={onChangeNama}
        >
          Nama
        </InputItem>
        <TextareaItem
          title="Alamat"
          placeholder="Jl. Candi 2C No.557 (Kos Rahman 99), Karangbesuki, Kec. Sukun, Kota Malang"
          type="text"
          onChange={onChangeAlamat}
          autoHeight
        />
        <InputItem
          placeholder="08123456789"
          type="number"
          onChange={onChangeNomorHp}
        >
          Nomor HP (Whatsapp)
        </InputItem>
        <TextareaItem
          title="Catatan"
          placeholder="Contoh: tidak ada,tidak suka pedas/ Alergi kacang, udang, dll"
          type="text"
          onChange={onChangeCatatan}
          autoHeight
        />
        <WingBlank>
          <Button onClick={onClickDaftar} type="primary">
            Daftar
          </Button>
          <WhiteSpace />
        </WingBlank>
        <p>
          Sudah punya akun senjani ? {"  "}
          <strong
            className="onClikRegister"
            onClick={() => {
              history.push("/Login");
            }}
          >
            Daftar
          </strong>
        </p>
      </WingBlank>
    </div>
  );
}

export default Register;
