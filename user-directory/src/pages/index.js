import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container/index";
import Row from "../components/Row/index";
import Col from "../components/Col/index";

function Index() {
  return (
    <>
      <Hero backgroundImage="https://dynaimage.cdn.cnn.com/cnn/q_auto,h_600/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F150304070530-04-unfinished-business.jpg">
        <h1>User Directory</h1>
        <h2>Find Your Totally Real Coworkers</h2>
      </Hero>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1>Welcome to User Directory!</h1>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Index;
