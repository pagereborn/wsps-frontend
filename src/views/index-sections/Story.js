import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import { Button, Container, Row, Col} from "reactstrap";
// core components

function Story() {
  return (
    <>
      <div className="section section-story" data-background-color="black" id="story-section">
        <div className="space-50"></div>
        <Container >
          <h1 className="text-center">WallStreetPunkS Story</h1>
          <div>
          <p>It's the year 2089; it has been more than 10 years since the end of the world. This world has long been replaced by artificial intelligence, and the government controlled by AI can only be described as mad, destructive, dark, and ruthless.  The world has entered turbulent times after the global economy came to a halt and markets began to crash.
          </p>
          <p>A group of 9000 experts from various fields and races from Wall Street organized a resistance army called "WallStreetPunkS" to resist the evil government's desire to replace the new world with Solana, a currency more suitable for the new era.
          </p>
          <p>After years of struggle, "WallStreetPunkS" turned anger into wisdom. Various species chose to unite and cooperate in exchange for a new era of peace. But whether victory can be achieved.... is still up in the air. The story starts with six of our experts...
          </p>
            </div>
            <Row>
              <Col sm="4" className="text-center">
              <img
                  alt="Social Arbitrager"
                  className="rounded img-raised"
                  src={require("assets/img/chara01.gif").default}
                ></img>
                <h3 className="text-center" style={{'fontFamily':'monaco'}}>Social Arbitrager</h3>
              </Col>
              <Col sm="4" className="text-center">
              
              <img
                  alt="Crypto Maxi"
                  className="rounded img-raised"
                  src={require("assets/img/chara02.gif").default}
                ></img>
                <h3 className="text-center" style={{'fontFamily':'monaco'}}>Crypto Maxi</h3>
              </Col>
              <Col sm="4" className="text-center">
              
              <img
                  alt="Entrepreneur Doge"
                  className="rounded img-raised"
                  src={require("assets/img/chara03.gif").default}
                ></img>
                <h3 className="text-center" style={{'fontFamily':'monaco'}}>Entrepreneur Doge</h3>
              </Col>
            </Row>
        </Container>
      </div>
    </>
  );
}

export default Story;
