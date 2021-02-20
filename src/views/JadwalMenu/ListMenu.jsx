import { useEffect, useState } from "react";
import UrlApi from "../../UrlApi";
import { Flex } from "antd-mobile";

const ListMenu = () => {
  const [dataState, setDataState] = useState([]);

  const fetchSomething = async () => {
    const res = await fetch(`${UrlApi}menu`);
    const data = await res.json();
    setDataState(data);
  };

  useEffect(() => {
    fetchSomething();
  }, []);

  const renderListMenu = (data) => {
    return data.map((item, idx) => (
      <div key={idx}>
        <Flex>
          <Flex.Item>
            <img
              src={`${UrlApi}assets/fotoMenu/${item.foto_menu}`}
              alt=""
              srcset=""
              style={{ height: "50px" }}
            />
          </Flex.Item>
          <Flex.Item>
            <p>{item.tanggal_menu}</p>
            <p>{item.waktu_menu}</p>
            <p>{item.nama_menu}</p>
            <p>{item.keterangan_menu}</p>
          </Flex.Item>
        </Flex>
      </div>
    ));
  };

  return <div>{renderListMenu(dataState)}</div>;
};
export default ListMenu;
