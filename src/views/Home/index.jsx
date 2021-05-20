import { useState } from "react";
import { TabBar } from "antd-mobile";
import { Button, WhiteSpace, WingBlank } from "antd-mobile";
import "antd-mobile/dist/antd-mobile.css";
import Beranda from "./Beranda";
import Pesanan from "./Pesanan";
import Kupon from "./Kupon";
import Akun from "./Akun";
import IsLogin from "./../Auth/IsLogin";

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
                  background:
                    "url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat",
                }}
              />
            }
            selectedIcon={
              <div
                style={{
                  width: "22px",
                  height: "22px",
                  background:
                    "url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat",
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
                  background:
                    "url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat",
                }}
              />
            }
            selectedIcon={
              <div
                style={{
                  width: "22px",
                  height: "22px",
                  background:
                    "url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat",
                }}
              />
            }
            title="Riwayat"
            key="riwayat"
            selected={selectedTab === "riwayatTab"}
            onPress={() => {
              setSelectedTab("riwayatTab");
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
                  background:
                    "url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat",
                }}
              />
            }
            selectedIcon={
              <div
                style={{
                  width: "22px",
                  height: "22px",
                  background:
                    "url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat",
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
            icon={{
              uri: "https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg",
            }}
            selectedIcon={{
              uri: "https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg",
            }}
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
