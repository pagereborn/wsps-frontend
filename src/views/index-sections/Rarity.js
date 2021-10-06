import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import { Button, Container, Row } from "reactstrap";
// core components
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import doge0201 from 'assets/img/wsps_rare/doge02_01.png'
import doge0202 from 'assets/img/wsps_rare/doge02_02.png'
import doge0301 from 'assets/img/wsps_rare/doge03_01.png'
import doge0302 from 'assets/img/wsps_rare/doge03_02.png'
import doge0303 from 'assets/img/wsps_rare/doge03_03.png'
import doge0304 from 'assets/img/wsps_rare/doge03_04.png'
import doge0305 from 'assets/img/wsps_rare/doge03_05.png'

import girl0101 from 'assets/img/wsps_rare/girl01_01.png'
import girl0201 from 'assets/img/wsps_rare/girl02_01.png'
import girl0202 from 'assets/img/wsps_rare/girl02_02.png'
import girl0301 from 'assets/img/wsps_rare/girl03_01.png'
import girl0302 from 'assets/img/wsps_rare/girl03_02.png'
import girl0303 from 'assets/img/wsps_rare/girl03_03.png'
import girl0304 from 'assets/img/wsps_rare/girl03_04.png'
import girl0305 from 'assets/img/wsps_rare/girl03_05.png'
import girl0306 from 'assets/img/wsps_rare/girl03_05(1).png'

import male0101 from 'assets/img/wsps_rare/male01_01.png'
import male0201 from 'assets/img/wsps_rare/male02_01.png'
import male0202 from 'assets/img/wsps_rare/male02_02.png'
import male0301 from 'assets/img/wsps_rare/male03_01.png'
import male0302 from 'assets/img/wsps_rare/male03_02.png'
import male0303 from 'assets/img/wsps_rare/male03_03.png'
import male0304 from 'assets/img/wsps_rare/male03_04.png'
import male0305 from 'assets/img/wsps_rare/male03_05.png'


function Rarity() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };
  return (
    <>
      <div className="section section-rarity" data-background-color="black" id="rarity-section">
        <div className="space-50"></div>
        <Container className="text-center">
        <h1>Rarity Collectible</h1>
          <div>
          <Slider {...settings}>
          <div>
            <img src={doge0201}/>
          </div>
          <div>
            <img src={doge0202}/>
          </div>
          <div>
          <img src={doge0301}/>
          </div>
          <div>
          <img src={doge0302}/>
          </div>
          <div>
          <img src={doge0303}/>
          </div>
          <div>
          <img src={doge0304}/>
          </div>
          <div>
          <img src={doge0305}/>
          </div>
          <div>
          <img src={girl0101}/>
          </div>
          <div>
          <img src={girl0201}/>
          </div>
          <div>
          <img src={girl0202}/>
          </div>
          <div>
          <img src={girl0301}/>
          </div>
          <div>
          <img src={girl0302}/>
          </div>
          <div>
          <img src={girl0303}/>
          </div>
          <div>
          <img src={girl0304}/>
          </div>
          <div>
          <img src={girl0305}/>
          </div>
          <div>
          <img src={male0101}/>
          </div>
          <div>
          <img src={male0201}/>
          </div>
          <div>
          <img src={male0202}/>
          </div>
          <div>
          <img src={male0301}/>
          </div>
          <div>
          <img src={male0302}/>
          </div>
          <div>
          <img src={male0303}/>
          </div>
          <div>
          <img src={male0304}/>
          </div>
          <div>
          <img src={male0305}/>
          </div>
        </Slider>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Rarity;
