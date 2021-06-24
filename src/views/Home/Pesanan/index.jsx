import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { Button, Card, WingBlank, WhiteSpace, Flex } from "antd-mobile";

import "./Pesanan.scss";
import UrlApi from "./../../../UrlApi";
import waktuMenu from "../../Function/waktuMenu";
import jenisNasi from "../../Function/jenisNasi";
import jenisPaketKupon from "../../Function/jenisPaketKupon";
import statusPesanan from "../../Function/statusPesanan";

const Pesanan = () => {
  let history = useHistory();
  const qs = require("qs");

  const [pelanggan, setPelanggan] = useState(
    JSON.parse(localStorage.getItem("pelanggan"))
  );

  const [apiMixPesanan, setApiMixPesanan] = useState([
    {
      status_pesanan: "",
      tanggal_menu: "",
      waktu_menu: "",
      nama_menu: "",
      keterangan_menu: "",
      foto_menu: "",
      jenis_paket_kupon: "",
      jenis_nasi: "",
    },
  ]);
  const processApiMixPesanan = async () => {
    const keyValue = {
      id_pelanggan: pelanggan.id_pelanggan,
    };
    axios
      .post(
        `${UrlApi}mix/showPesananBerdasarkanIdPelanggan`,
        qs.stringify(keyValue)
      )
      .then((respone) => {
        setApiMixPesanan(respone.data);
        localStorage.setItem("apiMixPesanan", JSON.stringify(respone.data));
      });
  };
  useEffect(() => {
    processApiMixPesanan();
  }, []);

  const PesanBoxList = () => {
    const listItems = apiMixPesanan.map((data, index) => (
      <div>
        <Card>
          <Card.Header
            title={`${data.tanggal_menu} | ${waktuMenu(data.waktu_menu)}`}
          />
          <Card.Body>
            <strong>{data.nama_menu}</strong>
            <WhiteSpace size="lg" />
            <Flex>
              <Flex.Item>
                <div style={{ display: "grid", placeItems: "center" }}>
                  <img
                    src={`${UrlApi}assets/fotoMenu/${data.foto_menu}`}
                    alt=""
                    style={{ width: "70%" }}
                  />
                </div>
              </Flex.Item>
              <Flex.Item className="flexDescription">
                <p>{data.keterangan_menu}</p>
                <p>{jenisNasi(data.jenis_nasi)}</p>
                <p>{jenisPaketKupon(data.jenis_paket_kupon)}</p>
                <p>{statusPesanan(data.status_pesanan)}</p>
              </Flex.Item>
            </Flex>
            <br />
            <Button type="primary" onClick={() => onClickLihatDetail(index)}>
              Lihat Detail
            </Button>
          </Card.Body>
        </Card>
        <WhiteSpace size="lg" />
      </div>
    ));
    return <div>{listItems}</div>;
  };

  const onClickLihatDetail = (index) => {
    localStorage.setItem("selectedIndexPesanan", index);
    history.push("/DetailPesanan");
  };

  return (
    <div className="grid">
      <div className="container">
        <WingBlank>
          <WhiteSpace size="lg" />
          <h1>Riwayat Pesanan</h1>
          <PesanBoxList />
        </WingBlank>
      </div>
    </div>
  );
};

export default Pesanan;
