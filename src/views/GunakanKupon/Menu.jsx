import {
  List,
  Radio,
  Flex,
  WhiteSpace,
  Button,
  WingBlank,
  Checkbox,
} from "antd-mobile";
import { useEffect, useState } from "react";

import IsLogin from "./../Auth/IsLogin";
import UrlApi from "./../../UrlApi";

const Menu = (props) => {
  const data = props.data;

  const styleChecked = {
    backgroundColor: "cyan",
  };
  const styleNotChecked = {
    backgroundColor: "white",
  };

  const [selectedIdMenu, setSelectedIdMenu] = useState(props.selectedIdMenu);
  const [isChecked, setIsChecked] = useState(props.isChecked);
  const menu = (
    <div
      style={isChecked ? styleChecked : styleNotChecked}
      onClick={() => onClickCheckbox(data.id_menu)}
    >
      <Flex>
        <Flex.Item>
          <img
            src={`${UrlApi}assets/fotoMenu/${data.foto_menu}`}
            alt=""
            srcset=""
            style={{ height: "50px", width: "auto" }}
          />
        </Flex.Item>
        <Flex.Item>
          <p>{data.tanggal_menu}</p>
          <p>{data.waktu_menu}</p>
          <p>{data.nama_menu}</p>
          <p>{data.keterangan_menu}</p>
        </Flex.Item>
      </Flex>
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
