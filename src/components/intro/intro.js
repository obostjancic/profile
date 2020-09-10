import React from "react";
import { Row, Col } from "react-bootstrap";
import VSParagraph from "../VSParagraph";
import VSDiv from "../VSDiv";
import Link from "../common/link";

const Icon = ({ url, src }) => (
  <Col lg={3} md={6} sm={6} xs={6}>
    <Link href={url}>
      <img
        className="contact-icon"
        alt=""
        style={{ width: "60px", marginBottom: "1rem", borderRadius: "50%" }}
        src={src}
      />
    </Link>
  </Col>
);
export const Intro = () => (
  <div style={{ textAlign: "justify" }}>
    <h1 style={{ color: "#0076b2", marginTop: "2.5rem", marginBottom: "2rem", fontWeight: "500", fontSize: "300%" }}>
      Ognjen Bostjančić
    </h1>
    <VSDiv id="profile-summary" direction="left" childStyle={{ minHeight: "128px", marginBottom: "1.5rem" }}>
      <div className="photo" style={{ background: "url(profile-photo-square.jpg)", backgroundSize: "contain" }}></div>
      <p id="summary">
        <b>
          Computer science student and software developer currently focused on web development, but interested in pretty
          much everything that ends up compiled or interpreted.
        </b>
      </p>
    </VSDiv>
    <VSParagraph direction="right">
      Currently, I am working as a web developer for Anyline GmbH, where I am mostly commited to development of a cloud
      infrastructure used to automatize Machine learning and Computer vision processes.
    </VSParagraph>
    <VSParagraph direction="left">
      Colleagues know me as motivated, communicative and a creative developer who likes to help others, and who can be
      trusted to come up with a solution. I welcome individual responsibility, and I can work well alone, but I’m at my
      best collaborating with others.
    </VSParagraph>
    <VSParagraph direction="right">
      Parallel to work I graduated with a Bachelor in Computer Science, and I am studying a Master Degree in Computer
      Science.
    </VSParagraph>
    <VSParagraph direction="left" style={{ fontSize: "100%" }}>
      Contact me, take a look at some of my code or check my resume here:
    </VSParagraph>
    <div className="from-right" style={{ textAlign: "center", marginTop: "1rem" }}>
      <Row style={{ padding: "1rem 4rem" }}>
        <Icon url="https://www.facebook.com/ognjen.bostjancic" src="Facebook.png" />

        <Icon url="https://www.linkedin.com/in/obostjancic/" src="Linkedin.png" />

        <Icon url="https://gitlab.com/obostjancic" src="Gitlab.png" />

        <Icon url="ognjen-bostjancic-cv.pdf" src="cv.png" />
      </Row>
    </div>
  </div>
);
