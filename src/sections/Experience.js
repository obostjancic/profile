import React from "react";
import styled from "styled-components";
import { theme } from "../components";
import { VSSection } from "../components/VSSection";

const ExperienceWrapper = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const JobWrapper = styled.div`
  margin: 4em auto;

  & > h2 {
    margin-bottom: 0.25em;
  }
  & > h3 {
    margin: 0;
    color: ${theme.primary};
  }
  & > p {
    margin-top: 0;
    font-size: 0.8em;
    line-height: 1.5;
  }
  & > div {
    background-color: #f5f7fb;
    line-height: 1.5;
  }
`;

const Job = ({ company, position, duration, children }) => (
  <JobWrapper>
    <h2>{company}</h2>
    <h3>{position}</h3>
    <p>{duration}</p>
    <div>{children}</div>
  </JobWrapper>
);

export const Experience = () => (
  <VSSection anchor="experience">
    <ExperienceWrapper>
      <h2 className="section-heading">Experience</h2>

      <Job company="Anyline GmbH, Vienna" position="Web developer" duration={"February 2020 - Present"}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis pellentesque felis. Nam cursus justo tortor, id
        dignissim lacus viverra at. Curabitur pulvinar est nec lectus sagittis egestas. Sed porttitor orci eu nisl
        bibendum ultrices. Etiam in nisi sit amet.
      </Job>
      <Job company="Workflow EDV, Vienna" position="Web developer" duration={"May 2018 - January 2020"}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis pellentesque felis. Nam cursus justo tortor, id
        dignissim lacus viverra at. Curabitur pulvinar est nec lectus sagittis egestas. Sed porttitor orci eu nisl
        bibendum ultrices. Etiam in nisi sit amet.
      </Job>
      <Job company="IT Services, Sarajevo" position="Web developer" duration={"March 2017 - May 2018"}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis pellentesque felis. Nam cursus justo tortor, id
        dignissim lacus viverra at. Curabitur pulvinar est nec lectus sagittis egestas. Sed porttitor orci eu nisl
        bibendum ultrices. Etiam in nisi sit amet.
      </Job>
    </ExperienceWrapper>
  </VSSection>
);
