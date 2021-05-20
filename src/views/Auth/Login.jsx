import { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import axios from "axios";
import { List, InputItem, WhiteSpace } from "antd-mobile";
// import { createForm } from 'rc-form';

import UrlApi from "./../../UrlApi";

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
    // axios
    //   .post(`${UrlApi}login`, qs.stringify(keyValue))
    //   .then((response) => setDataState(response.data));
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
    } else {
      setIsLogin(false);
      localStorage.setItem("isLogin", JSON.stringify(false));
      console.log("login failed");
    }
    history.push("/");
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
    <div>
      <p>ini background</p>
      <p>ini logo</p>
      <h3>Masuk Akun Senjanimu</h3>

      {/* <h4>Email</h4> */}
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

      <button onClick={loginProcess}>Masuk</button>

      <button onClick={clearLocalStorage}>clear localStorage</button>

      <button onClick={onClikRegister}>belum punya akun</button>
    </div>
  );
}
export default Login;
