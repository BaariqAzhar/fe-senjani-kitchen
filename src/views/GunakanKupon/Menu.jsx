import {
  List,
  Radio,
  Flex,
  WhiteSpace,
  Button,
  WingBlank,
  Checkbox,
  Card,
} from "antd-mobile";
import { useEffect, useState } from "react";

import IsLogin from "./../Auth/IsLogin";
import UrlApi from "./../../UrlApi";
import waktuMenu from "../Function/waktuMenu";

const Menu = (props) => {
  const data = props.data;

  const styleChecked = {
    backgroundColor: "#8CC8FF",
  };
  const styleNotChecked = {
    backgroundColor: "",
  };

  const [selectedIdMenu, setSelectedIdMenu] = useState(props.selectedIdMenu);
  const [isChecked, setIsChecked] = useState(props.isChecked);
  const menu = (
    <div>
      <Card
        style={isChecked ? styleChecked : styleNotChecked}
        onClick={() => onClickCheckbox(data.id_menu)}
      >
        <Card.Header
          title={`${data.tanggal_menu} | ${waktuMenu(data.waktu_menu)}`}
        />
        <Card.Body>
          <Flex clasName="flex">
            <Flex.Item clasName="flexImg">
              <img
                src={`${UrlApi}assets/fotoMenu/${data.foto_menu}`}
                alt=""
                srcset=""
                style={{ width: "90%" }}
              />
            </Flex.Item>
            <Flex.Item className="flexDescription">
              <strong>{data.nama_menu}</strong>
              <p>{data.keterangan_menu}</p>
            </Flex.Item>
          </Flex>
        </Card.Body>
      </Card>
    </div>
  );
  const onClickCheckbox = (id) => {
    if (selectedIdMenu.includes(id)) {
      setIsChecked(false);
    } else {
      setIsChecked(true);
    }
  };

  return <div>{menu}</div>;
};

export default Menu;
