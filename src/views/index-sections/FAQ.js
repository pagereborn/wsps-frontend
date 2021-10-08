import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import { Button, Container, Row } from "reactstrap";
import Faq from "react-faq-component";

// core components

const data = {
  rows: [
      {
          title: "What is WallStretPunkS?",
          content: "It is 9,000 algorithmically generated collectible avatars based around 6 characters.First drop only 3 character,1500 per character.",
      },
      {
          title: "When will I get my WallStreetPunkS NFT after the mint?",
          content: "Your WallStreetPunkS NFT will be sent to your wallet right after minting which might take a few minutes.",
      },
      {
          title: "What Soana Wallets can I use?",
          content: "We will be using Phantom wallet for the website connection.",
      },
      {
          title: "When will the launch be?",
          content: "OCT 13 2021",
      },
      {
        title: "How much does it cost to mint a WallStreetPunkS NFT?",
        content: "1.25 Sol",
      },
      {
          title: "Is there a pre-sale?",
          content: "Yes! To be eligible for presale, we currently have open whitelist spots available. We also have giveaways and raffles for a chance to be eligible for presale.",
      },
      {
        title: "Do you have rarity system?",
        content: "Yes, we do because rarity is important among our NFTs, there will also be a rarity chart on our website.",
      },
  ],
};

const styles = {
  bgColor: 'black',
  titleTextColor: "white",
  rowTitleColor: "white",
  rowContentColor: 'white',
  arrowColor: "white",
  //titleTextColor: 'blue',
  //titleTextSize: '48px',
  // rowTitleTextSize: 'medium',
  // rowContentColor: 'grey',
  //rowContentTextSize: '16px',
  // rowContentPaddingTop: '10px',
  //rowContentPaddingBottom: '10px',
  //rowContentPaddingLeft: '10px',
  // rowContentPaddingRight: '150px',
  // arrowColor: "red",
  transitionDuration: "1s",
  // timingFunc: "ease"
};

const config = {
  animate: true,
  //arrowIcon: "V",
  tabFocus: true
};

function FAQ() {
  return (
    <>
      <div className="section section-faq" data-background-color="black" id="faq-section">
        <div className="space-50"></div>
        <Container>
          <Row>
          <div>
            <h2 className="text-center">Frequently Asked Questions</h2>
            <Faq
                data={data}
                styles={styles}
                config={config}
            />
        </div>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default FAQ;
