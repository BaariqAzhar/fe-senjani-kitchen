import { useState } from "react";
import { TabBar } from "antd-mobile";
import { Button, WhiteSpace, WingBlank } from "antd-mobile";
import "antd-mobile/dist/antd-mobile.css";

import "./home.css";
import Beranda from "./Beranda";
import Pesanan from "./Pesanan";
import Kupon from "./Kupon";
import Akun from "./Akun";
import IsLogin from "./../Auth/IsLogin";
import homeImg from "./home.svg";
import selectedHomeImg from "./selectedHome.svg";
import offPesanan from "./offPesanan.svg";
import onPesanan from "./onPesanan.svg";
import offKupon from "./offKupon.svg";
import onKupon from "./onKupon.svg";
import offAkun from "./offAkun.svg";
import onAkun from "./onAkun.svg";

function Home() {
  const [selectedTab, setSelectedTab] = useState("berandaTab");

  return (
    <div className="App">
      <IsLogin />
      <div style={{ position: "fixed", height: "100%", width: "100%", top: 0 }}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
        >
          <TabBar.Item
            title="Beranda"
            key="beranda"
            icon={
              <div
                style={{
                  width: "22px",
                  height: "22px",
                  background: `url(${homeImg}) center center /  21px 21px no-repeat`,
                }}
              />
            }
            selectedIcon={
              <div
                style={{
                  width: "22px",
                  height: "22px",
                  background: `url(${selectedHomeImg}) center center /  21px 21px no-repeat`,
                }}
              />
            }
            selected={selectedTab === "berandaTab"}
            onPress={() => {
              setSelectedTab("berandaTab");
            }}
            data-seed="logId"
          >
            <Beranda />
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div
                style={{
                  width: "22px",
                  height: "22px",
                  background: `url(${offPesanan}) center center /  21px 21px no-repeat`,
                }}
              />
            }
            selectedIcon={
              <div
                style={{
                  width: "22px",
                  height: "22px",
                  background: `url(${onPesanan}) center center /  21px 21px no-repeat`,
                }}
              />
            }
            title="Pesanan"
            key="pesanan"
            selected={selectedTab === "pesananTab"}
            onPress={() => {
              setSelectedTab("pesananTab");
            }}
            data-seed="logId1"
          >
            <Pesanan />
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div
                style={{
                  width: "22px",
                  height: "22px",
                  background: `url(${offKupon}) center center /  21px 21px no-repeat`,
                }}
              />
            }
            selectedIcon={
              <div
                style={{
                  width: "22px",
                  height: "22px",
                  background: `url(${onKupon}) center center /  21px 21px no-repeat`,
                }}
              />
            }
            title="Kupon"
            key="kupon"
            selected={selectedTab === "kuponTab"}
            onPress={() => {
              setSelectedTab("kuponTab");
            }}
          >
            <Kupon />
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div
                style={{
                  width: "22px",
                  height: "22px",
                  background: `url(${offAkun}) center center /  21px 21px no-repeat`,
                }}
              />
            }
            selectedIcon={
              <div
                style={{
                  width: "22px",
                  height: "22px",
                  background: `url(${onAkun}) center center /  21px 21px no-repeat`,
                }}
              />
            }
            title="Akun"
            key="akun"
            selected={selectedTab === "akunTab"}
            onPress={() => {
              setSelectedTab("akunTab");
            }}
          >
            <Akun />
          </TabBar.Item>
        </TabBar>
      </div>
    </div>
  );
}

export default Home;
