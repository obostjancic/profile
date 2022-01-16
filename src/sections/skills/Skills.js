import React, { useState } from 'react';
import styled from 'styled-components';
import { SectionHeading, VSSection } from '../../components';
import { SkillBars } from './SkillBars';

const Wrapper = styled.div`
  max-width: 1024px;
`;

const ColumnWrap = styled.div`
  display: flex;
  flex-direction: row;
  @media only screen and (max-width: 992px) {
    & {
      flex-direction: column;
      flex-wrap: wrap;
      && > div {
        margin: 0;
      }
    }
  }
`;

const Summary = styled.div`
  flex-basis: 100%;
  text-align: left;
  margin: 0 1em;
`;

export const Skills = () => {
  const [visible, setVisible] = useState(false);

  const handleChange = (visible) => {
    setVisible(visible);
  };

  return (
    <VSSection anchor="skills" handleChange={handleChange}>
      <Wrapper>
        <SectionHeading>Skills & Interests</SectionHeading>
        <ColumnWrap>
          <Summary>
            <p>
              Apart from end to end development and maintenance of stable and scalable RESTful Web
              Applications, I have taken on myself a series of other responsibilities. Some of them
              include: Migration from JavaScript to TypeScript, Ownership of private NPM packages
              and UI kit libraries, writing extensive Database Migration scripts, as well as
              integration of monitoring and error tracking services.
            </p>
            <p>
              Outside of work, I am frequently working on my side projects, or going through the
              articles and blog posts from my reading list.
            </p>
          </Summary>
          <SkillBars visible={visible} />
        </ColumnWrap>
      </Wrapper>
    </VSSection>
  );
};
