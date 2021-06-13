import { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import axios from "axios";
import { List, InputItem, WhiteSpace, WingBlank, Button } from "antd-mobile";

import UrlApi from "./../../UrlApi";
import "./LoginRegister.scss";
import Logo from "./logo.svg";

function Login() {
  let history = useHistory();
  const qs = require("qs");

  const [dataApi, setDataApi] = useState();
  const [dataPelanggan, setDataPelanggan] = useState();
  const [isLogin, setIsLogin] = useState(false);
  const loginProcess = async () => {
    const keyValue = {
      email: emailState,
      password: passwordState,
    };
    try {
      const data = await axios.post(`${UrlApi}login`, qs.stringify(keyValue));
      setDataApi(data);
      if ((await data.data.status) === "success") {
        setDataPelanggan(await data.data.dataPelanggan[0]);
        localStorage.setItem(
          "pelanggan",
          JSON.stringify(await data.data.dataPelanggan[0])
        );
        setIsLogin(true);
        localStorage.setItem("isLogin", JSON.stringify(true));
        console.log("login success");
        history.push("/");
      } else if (
        data.data.status === "fail" &&
        data.data.info === "Login, login, email not found"
      ) {
        alert("Email tidak ditemukan");
      } else if (
        data.data.status === "fail" &&
        data.data.info === "Login, login, wrong password"
      ) {
        alert("Password salah");
      }
    } catch {
      alert("Login Gagal");
      setIsLogin(false);
      localStorage.setItem("isLogin", JSON.stringify(false));
      console.log("login failed");
    }
  };
  useEffect(() => {
    console.log(dataApi);
  }, [dataApi]);
  useEffect(() => {
    console.log(dataPelanggan);
  }, [dataPelanggan]);
  useEffect(() => {
    console.log("isLogin : " + isLogin);
  }, [isLogin]);

  const [emailState, setEmailState] = useState();
  const [passwordState, setPasswordState] = useState();
  const onChangeEmail = (value) => {
    setEmailState(value);
  };
  const onChangePassword = (value) => {
    setPasswordState(value);
  };

  useEffect(() => {
    console.log(emailState);
  }, [emailState]);
  useEffect(() => {
    console.log(passwordState);
  }, [passwordState]);

  const clearLocalStorage = () => {
    localStorage.clear();
  };

  const onClikRegister = () => {
    history.push("/Register");
  };
  return (
    <div className="grid">
      <div className="container">
        <div className="containerBackground">
          <div>
            <div className="backgroundA"></div>
            <div className="backgroundB"></div>
          </div>
          <div className="logo">
            <img src={Logo} alt="" />
          </div>
        </div>
        <WingBlank>
          <h3>Masuk Akun Senjanimu</h3>
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
          <WhiteSpace size="md" />
          <Button type="primary" onClick={loginProcess}>
            Masuk
          </Button>
          <p>
            Sudah punya akun Senjani ?{"  "}
            <strong className="onClikRegister" onClick={onClikRegister}>
              Daftar
            </strong>
          </p>

          {/* <button onClick={clearLocalStorage}>clear localStorage</button> */}
        </WingBlank>
      </div>
    </div>
  );
}
export default Login;
