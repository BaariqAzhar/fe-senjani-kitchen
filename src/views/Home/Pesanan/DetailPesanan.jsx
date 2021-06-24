import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { Button, Card, WingBlank, Flex, WhiteSpace } from "antd-mobile";

import UrlApi from "./../../../UrlApi";
import IsLogin from "./../../Auth/IsLogin";
import arrowLeftImg from "./arrowLeft.svg";
import jenisNasi from "./../../Function/jenisNasi";
import statusKupon from "../../Function/statusKupon";
import statusPesanan from "./../../Function/statusPesanan";
import jenisPaketKupon from "./../../Function/jenisPaketKupon";
import waktuMenu from "../../Function/waktuMenu";
import "./Pesanan.scss";

function DetailPesanan() {
  let history = useHistory();

  const [apiMixPesanan, setApiMixPesanan] = useState(
    JSON.parse(localStorage.getItem("apiMixPesanan"))
  );
  const [selectedIndexPesanan, setSelectedIndexPesanan] = useState(
    parseInt(localStorage.getItem("selectedIndexPesanan"))
  );

  return (
    <div className="grid">
      <div className="container">
        <IsLogin />
        <div style={{ backgroundColor: "white", paddingBottom: "10px" }}>
          <div style={{ display: "flex" }}>
            <img
              onClick={() => {
                history.goBack();
              }}
              style={{ marginLeft: "10px", marginRight: "10px" }}
              src={arrowLeftImg}
              alt=""
            />
            <h1>Detail Pesanan</h1>
          </div>
        </div>
        <WingBlank>
          <h2>Pesanan Kamu</h2>
          <Card>
            <Card.Header
              title={`${
                apiMixPesanan[selectedIndexPesanan].tanggal_menu
              } | ${waktuMenu(
                apiMixPesanan[selectedIndexPesanan].waktu_menu
              )} `}
            />
            <Card.Body>
              <strong>{apiMixPesanan[selectedIndexPesanan].nama_menu}</strong>
              <Flex clasName="flex">
                <Flex.Item clasName="flexImg">
                  <img
                    src={`${UrlApi}assets/fotoMenu/${apiMixPesanan[selectedIndexPesanan].foto_menu}`}
                    alt=""
                    srcset=""
                    style={{ width: "90%" }}
                  />
                </Flex.Item>
                <Flex.Item className="flexDescription">
                  <p>{apiMixPesanan[selectedIndexPesanan].keterangan_menu}</p>
                  <p>
                    {jenisNasi(apiMixPesanan[selectedIndexPesanan].jenis_nasi)}
                  </p>
                  <p>
                    {jenisPaketKupon(
                      apiMixPesanan[selectedIndexPesanan].jenis_paket_kupon
                    )}
                  </p>
                  <p>
                    {statusPesanan(
                      apiMixPesanan[selectedIndexPesanan].status_pesanan
                    )}
                  </p>
                </Flex.Item>
              </Flex>
            </Card.Body>
          </Card>
          <WhiteSpace />
          <h2>Detail Pemesanan</h2>
          <Card>
            <Card.Body>
              <h4>Nama penerima</h4>
              <h2>{apiMixPesanan[selectedIndexPesanan].nama_penerima}</h2>
              <WhiteSpace />
              <h4>No HP penerima (Whatsapp)</h4>
              <h2>{apiMixPesanan[selectedIndexPesanan].no_hp_wa_penerima}</h2>
              <WhiteSpace />
              <h4>Alamat Penerima</h4>
              <h2>{apiMixPesanan[selectedIndexPesanan].alamat_penerima}</h2>
              <WhiteSpace />
              <h4>Catatan makanan penerima</h4>
              <h2>
                {apiMixPesanan[selectedIndexPesanan].alergi_makanan_penerima}
              </h2>
              <WhiteSpace />
              <h4>Catatan pesanan</h4>
              <h2>{apiMixPesanan[selectedIndexPesanan].catatan_pesanan}</h2>
            </Card.Body>
          </Card>
        </WingBlank>
      </div>
    </div>
  );
}
export default DetailPesanan;
