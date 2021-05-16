import { useEffect, useState } from "react";
import { useHistory, Link } from "react-router-dom";
import axios from "axios";
import { ImagePicker } from "antd-mobile";

import IsLogin from "./../Auth/IsLogin";
import UrlApi from "./../../UrlApi";

function FormBuktiPembayaran() {
  let history = useHistory();

  const [files, setFiles] = useState([]);
  const [kuponPelanggan, setKuponPelanggan] = useState(
    JSON.parse(localStorage.getItem("kuponPelanggan"))
  );
  // const [kuponPelanggan, setKuponPelanggan] = useState({
  //   waktu_batas_pembayaran: "",
  //   harga: "",
  //   cara_pembayaran: "",
  // });
  const [idKuponPelanggan, setIdKuponPelanggan] = useState(
    JSON.parse(localStorage.getItem("id_kupon_pelanggan"))
  );
  // const [idKuponPelanggan, setIdKuponPelanggan] = useState(0);

  // useEffect(() => {
  //   setIdKuponPelanggan(localStorage.getItem("id_kupon_pelanggan"));
  //   console.log("id kupon pelanggan : " + idKuponPelanggan);
  // }, [idKuponPelanggan]);
  // useEffect(() => {
  //   setKuponPelanggan(localStorage.getItem("kuponPelanggan"));
  //   console.log("kuponPelanggan : " + kuponPelanggan);
  // }, [kuponPelanggan]);

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
      <button
        onClick={() => {
          history.goBack();
        }}
      >
        Go Back
      </button>
      <p>
        Yeyy.. pesananmu berhasil dibuat Lanjut bayar dan upload bukti
        pembayarannya ya
      </p>
      <p>bayar sebelum {kuponPelanggan.waktu_batas_pembayaran}</p>
      <p>total pembayaran : Rp {kuponPelanggan.harga}</p>
      <p>metode pembayaran : {kuponPelanggan.cara_pembayaran}</p>
      <p>transfer ke 08712345567</p>
      <p>atas nama Senjani Kitchen</p>
      <input
        type="file"
        className="form-control"
        name="upload_file"
        onChange={handleInputChange}
        required
      />
      <button onClick={onClickSubmit}>submit</button>

      <ImagePicker
        files={files}
        onChange={onChange}
        multiple={false}
        length={2}
        selectable={files.length < 1}
      />
    </div>
  );
}
export default FormBuktiPembayaran;
