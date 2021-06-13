import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UrlApi from "./../../UrlApi";
import "./index.scss";
import { useHistory } from "react-router-dom";
import { Tabs, WhiteSpace, Badge, Flex } from "antd-mobile";

import ListMenu from "./ListMenu";
import IsLogin from "./../Auth/IsLogin";
import arrowLeftImg from "./arrowLeft.svg";

const JadwalMenu = () => {
  let history = useHistory();

  const tabs = [
    { title: <Badge>Basic</Badge> },
    { title: <Badge>Reusable</Badge> },
    { title: <Badge>Deluxe</Badge> },
    { title: <Badge>Family</Badge> },
  ];

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
          <h1>Jadwal Menu</h1>
        </div>
        <Tabs
          tabs={tabs}
          initialPage={0}
          onChange={(tab, index) => {
            console.log("onChange", index, tab);
          }}
          onTabClick={(tab, index) => {
            console.log("onTabClick", index, tab);
          }}
        >
          <div>
            <ListMenu />
          </div>
          <div>
            <ListMenu />
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "150px",
              backgroundColor: "#fff",
            }}
          >
            Content of third tab
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "150px",
              backgroundColor: "#fff",
            }}
          >
            Content of fourth tab
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default JadwalMenu;
