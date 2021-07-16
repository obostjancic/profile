import React, { useState } from 'react';
import styled from 'styled-components';
import { FlexRow, SectionHeading, VSSection } from '../../components';
import { SkillBars } from './SkillBars';

const Wrapper = styled.div`
  max-width: 1024px;
`;

const ColumnWrap = styled(FlexRow)`
  @media only screen and (max-width: 992px) {
    & {
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -ms-flex-direction: column;
      flex-direction: column;
      -ms-flex-wrap: wrap;
      flex-wrap: wrap;
    }
  }
`;

const Summary = styled.div`
  -ms-flex-preferred-size: 100%;
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
              backlog of Medium articles I gathered over the years.
            </p>
          </Summary>
          <SkillBars visible={visible} />
        </ColumnWrap>
      </Wrapper>
    </VSSection>
  );
};
