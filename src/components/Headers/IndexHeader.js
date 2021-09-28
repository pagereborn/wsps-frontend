/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";
// core components
import mobileBackground from 'assets/img/mobile-background.gif'
import wideBackground from 'assets/img/wide-background.gif'
import {useMediaQuery} from 'react-responsive';

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
      window.addEventListener("scroll", updateScroll);
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
          <h6 className="category category-absolute">
            <a href="https://discord.io/wsps" target="_blank">
              <img
                alt="..."
                className="discord-logo"
                src={require("assets/img/discord_logo.jpg").default}
              ></img>
            </a>
            <a href="https://twitter.com/WS_Punk_S"target="_blank">
              <img
                alt="..."
                className="twitter-logo"
                src={require("assets/img/twitter_logo.jpg").default}
              ></img>
            </a>
          </h6>
        </Container>
      </div>
    </>
  );
}

export default IndexHeader;