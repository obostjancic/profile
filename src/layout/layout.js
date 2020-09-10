import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Timeline1 } from "../components/timeline/timeline";
import Tree from "../components/tree/tree";
import { Intro } from "../components/intro/intro";
import { Skills } from "../components/skills/skills";

export const Main = () => (
  <Container style={{ minWidth: "80%" }}>
    <Row>
      <Col lg={5} md={12} sm={12} xs={12}>
        <Intro />
      </Col>
      <Col lg={7} md={12} sm={12} xs={12}>
        <Timeline1 />
      </Col>
    </Row>
    <Row>
      <Col lg={5} md={12} sm={12} xs={12}>
        <Skills />
      </Col>
      <Col lg={7} md={12} sm={12} xs={12}>
        <Tree />
      </Col>
    </Row>
  </Container>
);
