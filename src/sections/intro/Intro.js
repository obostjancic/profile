import React from "react";
import styled from "styled-components";
import { theme, VSSection } from "../../components";
import { isMobile } from "../../utils";
import { Canvas } from "./Canvas";
import { Icons } from "./icons/Icons";
import { Photo } from "./Photo";

const IntroWrapper = styled.div`
  padding: 0 50px;
  max-width: 600px;
  margin: 0 auto;
  padding-top: 10em;
  min-height: 80vh;
  opacity: 1;

  @media only screen and (max-width: 600px) {
    & {
      padding: 0;
      margin: 5em auto 5em auto;
    }
  }
`;

const Heading = styled.h1`
  margin: 0;
  margin-top: 1em;
  font-weight: bold;
`;

const Subheading = styled.h3`
  margin-top: 0.5em;
  margin-bottom: 0;
  background-color: #eeeeee25;
  display: inline-block;
  color: ${theme.primary};
`;

const Summary = styled.div`
  margin: 3em auto;
  line-height: 2;
  background-color: #eeeeee25;
`;

export const Intro = () => {
  return (
    <>
      {!isMobile() && <Canvas />}
      <VSSection intro>
        <IntroWrapper>
          <Photo />
          <Heading>Ognjen Bostjancic</Heading>
          <Subheading>Software developer</Subheading>
          <Summary>
            Computer science student and software developer currently focused on web development, but interested in
            pretty much everything that ends up compiled or interpreted. Currently, I am working as a web developer for
            Anyline GmbH, where I am mostly commited to development of a cloud infrastructure used to automate Machine
            learning and Computer vision processes. Colleagues know me as motivated, communicative and a creative
            developer who likes to help others, and who can be trusted to come up with a solution.
            {/* I welcome individual responsibility, and I
        can work well alone, but I’m at my best collaborating with others. Parallel to work I graduated with a Bachelor
        in Computer Science, and I am studying a Master Degree in Computer Science. Contact me, take a look at some of
        my code or check my resume here: */}
          </Summary>
          <Icons />
        </IntroWrapper>
      </VSSection>
    </>
  );
};
