/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";
// core components
import mobileBackground from 'assets/img/mobile-bg1.gif'
import wideBackground from 'assets/img/wide-background2.gif'
import {useMediaQuery} from 'react-responsive';
import Countdown from 'react-countdown';
import Moment from 'react-moment';
import moment from 'moment';

function IndexHeader() {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
  })
  const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
  const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })
  let pageHeader = React.createRef();
  var backgroundImagePath = require("assets/img/mobile-background.gif");
  const imageUrl = isTabletOrMobile ? mobileBackground : wideBackground;
  
  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      //window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div className="page-header clear-filter">
        <div
          className="page-header-image"
          style={{
            backgroundImage:
            `url(${imageUrl})`,
          }}
          ref={pageHeader}
        ></div>
        <Container>
        <div className="space-25"></div>
          <Countdown
              date={"2021-10-13T22:00:00.000+00:00"}
              renderer={props => <div><h2 style={{'fontWeight':'bold'}}>Public Sale 10/13 10PM UTC(6PM EST)</h2><p style={{'fontWeight':'bold'}}>{props.formatted.days} day(s) {props.formatted.hours} hour(s) {props.formatted.minutes} minute(s) {props.formatted.seconds} second(s)</p></div>}
          />
          <div className="category category-absolute">
            <a href="https://discord.io/wsps" target="_blank">
              <img
                alt="..."
                className="discord-logo"
                src={require("assets/img/dis_logo.png").default}
              ></img>
            </a>
            <a href="https://twitter.com/WS_Punk_S"target="_blank">
              <img
                alt="..."
                className="twitter-logo"
                src={require("assets/img/twi_logo.png").default}
              ></img>
            </a>
            <a href="https://instagram.com/wallstreetpunks" target="_blank">
              <img
                alt="..."
                className="instagram-logo"
                src={require("assets/img/ins_logo.png").default}
              ></img>
            </a>
          </div>
        </Container>
      </div>
    </>
  );
}

export default IndexHeader;
