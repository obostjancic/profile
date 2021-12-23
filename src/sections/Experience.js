import React from 'react';
import styled from 'styled-components';
import { theme, SectionHeading, VSSection } from '../components';

const Wrapper = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const JobWrapper = styled.div`
  margin: 4em auto;

  & > h2 {
    font-size: 23px;
    margin-bottom: 0.25em;
  }
  & > h3 {
    font-size: 18px;
    margin: 0;
    color: ${theme.primary};
  }
  & > h4 {
    margin-top: 0;
    font-size: 0.8em;
    line-height: 1.5;
    font-weight: normal;
  }
  & > p {
    background-color: #f5f7fb;
    line-height: 1.5;
  }

  @media only screen and (max-width: 992px) {
    & {
      text-align: left;
    }
  }
`;

const Job = ({ company, position, duration, children }) => (
  <JobWrapper>
    <h2>{company}</h2>
    <h3>{position}</h3>
    <h4>{duration}</h4>
    <p>{children}</p>
  </JobWrapper>
);

export const Experience = () => (
  <VSSection anchor="experience">
    <Wrapper>
      <SectionHeading>Experience</SectionHeading>

      <Job
        company="Anyline, Vienna"
        position="Full stack web developer"
        duration={'February 2020 - Present'}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis pellentesque felis. Nam
        cursus justo tortor, id dignissim lacus viverra at. Curabitur pulvinar est nec lectus
        sagittis egestas. Sed porttitor orci eu nisl bibendum ultrices. Etiam in nisi sit amet.
      </Job>
      <Job
        company="Workflow EDV, Vienna"
        position="Backend web developer"
        duration={'May 2018 - Jan 2020'}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis pellentesque felis. Nam
        cursus justo tortor, id dignissim lacus viverra at. Curabitur pulvinar est nec lectus
        sagittis egestas. Sed porttitor orci eu nisl bibendum ultrices. Etiam in nisi sit amet.
      </Job>
      <Job
        company="IT Services, Sarajevo"
        position="Backend web developer"
        duration={'Mar 2017 - May 2018'}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis pellentesque felis. Nam
        cursus justo tortor, id dignissim lacus viverra at. Curabitur pulvinar est nec lectus
        sagittis egestas. Sed porttitor orci eu nisl bibendum ultrices. Etiam in nisi sit amet.
      </Job>
    </Wrapper>
  </VSSection>
);
