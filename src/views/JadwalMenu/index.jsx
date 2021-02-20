import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UrlApi from "./../../UrlApi";
import "./index.scss";
import { useHistory } from "react-router-dom";
import { Tabs, WhiteSpace, Badge } from "antd-mobile";
import ListMenu from "./ListMenu";

const JadwalMenu = () => {
  let history = useHistory();

  const tabs = [
    { title: <Badge>Basic</Badge> },
    { title: <Badge>Reusable</Badge> },
    { title: <Badge>Deluxe</Badge> },
    { title: <Badge>Family</Badge> },
  ];

  return (
    <div className="App">
      <button
        onClick={() => {
          history.goBack();
        }}
      >
        Go Back
      </button>
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
  );
};

export default JadwalMenu;
