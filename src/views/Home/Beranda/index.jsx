import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Button, Card, Flex, WhiteSpace, WingBlank } from "antd-mobile";

import "./beranda.scss";
import jumbotronImg from "./jumbotron.svg";
import basicImg from "./basic.png";
import reusableImg from "./reusable.png";

const Beranda = () => {
  let history = useHistory();

  return (
    <div className="grid">
      <div className="container">
        <img className="jumbotron" src={jumbotronImg} alt="" />
        <WingBlank>
          <WhiteSpace size="lg" />
          <Button
            type="ghost"
            onClick={() => {
              history.push("/jadwalmenu");
            }}
          >
            Lihat Jadwal Menu
          </Button>
          <WhiteSpace size="lg" />
          <p>Pilih Jenis Kateringmu</p>
          <Card>
            <Card.Header title="Basic Catering" />
            <Card.Body>
              <Flex>
                <Flex.Item className="cateringImg">
                  <img src={basicImg} alt="" />
                </Flex.Item>
                <Flex.Item>
                  <p>
                    Katering harian kotak makan sekali pakai dengan menu lengkap
                    lauk utama, lauk pendamping, sayur dan dessert{" "}
                  </p>
                </Flex.Item>
              </Flex>
              <br />
              <Button
                onClick={() => {
                  history.push("/BasicCatering");
                }}
                type="primary"
              >
                Beli kupon
              </Button>
            </Card.Body>
          </Card>

          <WhiteSpace size="lg" />
          <Card>
            <Card.Header title="Reusable Katering" />
            <Card.Body>
              <Flex>
                <Flex.Item className="cateringImg">
                  <img src={reusableImg} alt="" />
                </Flex.Item>
                <Flex.Item>
                  <p>
                    Katering harian kotak makan dikembalikan dengan menu lengkap
                    lauk utama, lauk pendamping, sayur dan dessert
                  </p>
                </Flex.Item>
              </Flex>
              <br />
              <Button
                onClick={() => {
                  history.push("/");
                }}
                type="primary"
              >
                Beli kupon
              </Button>
            </Card.Body>
          </Card>
        </WingBlank>
      </div>
    </div>
  );
};

export default Beranda;
