import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import { Button, Container, Row, Col} from "reactstrap";
// core components

function Team() {
  return (
    <>
      <div className="section section-team" data-background-color="black" id="team-section">
        <div className="space-50"></div>
        <Container className="text-center">
        <h1>Team</h1>
        <Row>
              <Col sm="4">
                <p className="category"></p>
                <a href="https://twitter.com/SolanaXieGor" target="_blank">
                <img
                  alt="..."
                  className="rounded img-raised"
                  src={require("assets/img/team/0.jpg").default}
                ></img>
                </a>
              </Col>
              <Col sm="4">
                <p className="category"></p>
                <a href="http://www.joeian.com" target="_blank">
                <img
                  alt="..."
                  className="rounded img-raised"
                  src={require("assets/img/team/3.jpg").default}
                ></img>
                </a>
              </Col>
              <Col sm="4">
                <p className="category"></p>
                <a href="https://twitter.com/kosmosmo" target="_blank">
                <img
                  alt="..."
                  className="rounded img-raised"
                  src={require("assets/img/team/2.jpg").default}
                ></img>
                </a>
              </Col>
            </Row>
            <Row>
              <Col sm="4">
                <p className="category"></p>
                <a href="https://twitter.com/solanasteveny" target="_blank">
                <img
                  alt="..."
                  className="rounded img-raised"
                  src={require("assets/img/team/1.jpg").default}
                ></img>
                </a>
              </Col>
              <Col sm="4">
                <p className="category"></p>
                <img
                  alt="..."
                  className="rounded img-raised"
                  src={require("assets/img/team/4.jpg").default}
                ></img>
              </Col>
              <Col sm="4">
                <p className="category"></p>
                <img
                  alt="..."
                  className="rounded img-raised"
                  src={require("assets/img/team/5.jpg").default}
                ></img>
              </Col>
            </Row>
        </Container>
      </div>
    </>
  );
}

export default Team;
