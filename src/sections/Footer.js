import React from "react";
import styled from "styled-components";
import { SectionHeading, theme } from "../components";

const FooterWrapper = styled.div`
  padding: 1em;
  background-color: ${theme.backgroundDark};

  -webkit-box-shadow: inset 0px 0px 10px ${theme.primaryDark};

  box-shadow: inset 0px 0px 10px ${theme.primaryDark};
`;

export const Footer = () => (
  <FooterWrapper>
    <SectionHeading>Get in touch</SectionHeading>
    <div>
      I always open to new opportunities and projects. If you're looking for development help or have any queries at
      all, dont hesitate to contact me.
    </div>
    <div>
      <a href="#navbar">This site is built using React</a>
    </div>
  </FooterWrapper>
);
