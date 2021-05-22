import { useEffect, useState } from "react";
import { useHistory, Link } from "react-router-dom";
import axios from "axios";
import {
  Card,
  ImagePicker,
  WingBlank,
  List,
  WhiteSpace,
  Button,
} from "antd-mobile";

import IsLogin from "./../Auth/IsLogin";
import UrlApi from "./../../UrlApi";
import caraPembayaran from "./../Function/caraPembayaran";
import transferKe from "./../Function/transferKe";

function FormBuktiPembayaran() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  let history = useHistory();

  useEffect(() => {
    return history.listen(() => {
      // listen
      if (history.action === "POP") {
        history.replace("/FormBuktiPembayaran");
      }
    });
  }, [history]);

  const [files, setFiles] = useState([]);
  const [kuponPelanggan, setKuponPelanggan] = useState(
    JSON.parse(localStorage.getItem("kuponPelanggan"))
  );
  const [idKuponPelanggan, setIdKuponPelanggan] = useState(
    JSON.parse(localStorage.getItem("id_kupon_pelanggan"))
  );
  const [selectedPaketKuponState, setSelectedPaketKuponState] = useState(
    JSON.parse(localStorage.getItem("selectedPaketKuponState"))
  );

  const onChange = (files, type, index) => {
    setFiles(files);
    console.log(files);
    console.log(type);
    console.log(index);
  };

  const [selectedFile, setSelectedFile] = useState("");
  const handleInputChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };
  const onClickSubmit = () => {
    console.log("wuhuuu");
    const data = new FormData();
    data.append("id_kupon_pelanggan", idKuponPelanggan);
    data.append("bukti_pembayaran", selectedFile);
    console.warn(selectedFile);
    let url = `${UrlApi}kuponpelanggan/updateKuponPelanggan/`;

    axios
      .post(url, data, {
        // receive two parameter endpoint url ,form data
      })
      .then((res) => {
        // then print response status
        if (res.data.status === "success") {
          history.push("/");
          alert("pembelian kupon sedang dalam proses");
          localStorage.removeItem("cara_pembayaran");
          localStorage.removeItem("id_paket_kupon");
          localStorage.removeItem("id_kupon_pelanggan");
          localStorage.removeItem("kuponPelanggan");
          localStorage.removeItem("selectedPaketKuponState");
        } else {
          alert("submit gagal");
        }
        console.warn(res);
      });
  };

  return (
    <div>
      <IsLogin />
      <WingBlank>
        <div align="center">
          <h2 align="center">Yeyy.. pesananmu berhasil dibuat</h2>
          <p>Lanjut bayar dan upload bukti pembayarannya ya</p>
        </div>
        <Card>
          <Card.Body>
            <div>
              <div align="center">
                <h3>Bayar sebelum </h3>
                <h2>{kuponPelanggan.waktu_batas_pembayaran}</h2>
              </div>
              <hr />
              <WingBlank>
                <h4>Total pembayaran</h4>
                <h2>Rp {selectedPaketKuponState.harga}</h2> <WhiteSpace />
                <h4>Metode pembayaran</h4>
                <h2>{caraPembayaran(kuponPelanggan.cara_pembayaran)}</h2>
                <WhiteSpace />
                <h4>Transfer ke</h4>
                <h2>{transferKe(kuponPelanggan.cara_pembayaran)}</h2>
                <WhiteSpace />
                <h4>Atas nama</h4>
                <h2>Senjani Kitchen</h2>
                <WhiteSpace />
                <h4>Unggah bukti pembayaran</h4>
                <input
                  type="file"
                  className="form-control"
                  name="upload_file"
                  onChange={handleInputChange}
                  required
                />
                <WhiteSpace size="lg" />
                <Button type="primary" onClick={onClickSubmit}>
                  Submit
                </Button>
              </WingBlank>
            </div>
          </Card.Body>
        </Card>
      </WingBlank>
    </div>
  );
}
export default FormBuktiPembayaran;
