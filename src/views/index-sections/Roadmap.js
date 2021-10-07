import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import { Button, Container, Row } from "reactstrap";
import { Chrono } from "react-chrono";
// core components
import bg from 'assets/img/br4.jpg'

const items = [
              {
                title: "25%",
                cardTitle: "𝕀ℕ𝕋ℝ𝕆",
                cardSubtitle:"WallStreetPunkS Introduction",
                cardDetailedText: "WallStreetPunkS started in August 2021. Our project consists of 9,000 algorithmically generated collectible avatars based around 6 characters. We are a team based in New York. Our goal is to help artists start their NFT journey and build their reputation. This is our first feature artist project. Our project artist, JOEIAN, is an illustrator based in Tokyo, Japan. The characters of WallStreetPunkS live in a futuristic cyberpunk world. In 2089, we follow our 6 characters, Crypto Maxi, Entrepreneur Doge, Social Arbitrager, The Suit, The Android (Ai), and The Financial Regulator. ",
              },
              {
                title: "50%",
                cardTitle: "𝔼𝔸ℝ𝕃𝕐 𝕆ℂ𝕋𝕆𝔹𝔼ℝ",
                cardSubtitle:"WallStreetPunkS First Drop: PUNK DROP VOL. 1",
                cardDetailedText: "First 3 Characters: Crypto Maxi, Entrepreneur Doge, and Social Arbitrager",
              },
              {
                title: "75%",
                cardTitle: "𝔼𝔸ℝ𝕃𝕐 ℕ𝕆𝕍𝔼𝕄𝔹𝔼ℝ",
                cardSubtitle:"WallStreetPunkS Second Drop: PUNK DROP VOL. 2",
                cardDetailedText: ["Following 3 Characters: The Suit, The Android (Ai), and The Financial Regulator",
                "10% Sold - Random airdrop for randomly selected community members (raffle event)" ,
                "25% Sold - Earlier sketch of selected character will be airdropped to randomly selected community members (raffle event)" ,
                "50% Sold - A chance to win 1 of 10 physically printed featured artists, JOEIAN, artbook (giveaway)" ,
                "100% Sold - MYSTERY CHARACTER airdrop to the wallets that hold all six WallStreetPunkS characters"]
              },
            ];
            const year2022Items = [
              {
                title: "2022",
                cardTitle: "Ongoing development of WallStreetPunkS world and storyline",
                cardSubtitle:"Support Team and other Artists",
                cardDetailedText: "10% for our team to support other artists and 20% to support featured artist, JOEIAN, in collaboration with WallStreetPunkS",
              },
            ]

function Roadmap() {
  return (
    <>
      <div className="section section-roadmap" data-background-color="black" id="roadmap-section">
        <div className="space-50"></div>
        <Container className="text-center">
        <h1>𝕎𝕒𝕝𝕝𝕊𝕥𝕣𝕖𝕖𝕥ℙ𝕦𝕟𝕜𝕊 ℝ𝕆𝔸𝔻𝕄𝔸ℙ 𝟚𝟘𝟚𝟙</h1>
          <Row>
            
          <div>
          <Chrono
            items={items}
            mode="VERTICAL_ALTERNATING"
            theme={{ 
              primary: "red",
              secondary: "grey",
              cardBgColor: "black",
              cardForeColor: "violet",
              titleColor: "white"
            }}
          />
          </div>
          </Row>
          <div>
            <h1 className="text-center">𝘽𝙖𝙩𝙩𝙡𝙚-𝙍𝙤𝙮𝙖𝙡𝙩𝙮-𝙋𝙧𝙤𝙜𝙧𝙖𝙢</h1>
            <img src={bg}></img>
            </div>
        </Container>
      </div>
    </>
  );
}

export default Roadmap;
