import { useEffect, useState } from "react";
import { Card, Flex, WhiteSpace, WingBlank, Button } from "antd-mobile";
import axios from "axios";

import UrlApi from "../../UrlApi";
import waktuMenu from "../Function/waktuMenu";

const ListMenu = () => {
  const [dataState, setDataState] = useState([]);

  const processApiShowAllMenu = () => {
    axios
      .post(`${UrlApi}menu/showAllMenu`)
      .then((respone) => setDataState(respone.data));
  };
  useEffect(() => {
    processApiShowAllMenu();
  }, []);

  const renderListMenu = (datas) => {
    return datas.map((data, idx) => {
      return (
        <div key={idx}>
          <WhiteSpace />
          <Card>
            <Card.Header
              title={`${data.tanggal_menu} | ${waktuMenu(data.waktu_menu)}`}
            />
            <Card.Body>
              <Flex clasName="flex">
                <Flex.Item
                  clasName="flexImg"
                  style={{ display: "grid", placeItems: "center" }}
                >
                  <img
                    src={`${UrlApi}assets/fotoMenu/${data.foto_menu}`}
                    alt=""
                    srcset=""
                    style={{ width: "70%" }}
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
    });
  };

  return <div>{renderListMenu(dataState)}</div>;
};
export default ListMenu;
