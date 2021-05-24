import React from 'react';
import styled from 'styled-components';
import { Border, FlexRow, JustifyContent, theme, Transition } from '../../components';

const Wrapper = styled(FlexRow)`
  margin: 0.75em 0;
  ${Transition({ duration: 0.3 })}
  border-radius: 100px;

  &:hover {
    -webkit-box-shadow: 0 0 5px ${theme.primary};
    box-shadow: 0 0 5px ${theme.primary};
  }

  @media only screen and (max-width: 600px) {
    & {
      font-size: 12px;
    }
  }
`;

const Label = styled.div`
  max-width: 20%;
  min-width: 6em;
  padding: 0.25em 0.75em;
  font-weight: bold;
  color: ${theme.primary};
  ${Border({ size: 1, radius: '100px 0 0 100px' })};

  @media only screen and (max-width: 600px) {
    & {
      min-width: 70px;
    }
  }
`;

const BarWrapper = styled(FlexRow)`
  font-weight: 600;
  line-height: 1.5;
  width: 80%;
  padding: 2px 2px;
  ${JustifyContent('space-between')}
  ${Border({ size: 1, radius: '0 100px 100px 0' })};
  border-left: 0;
`;

const Bar = styled.div`
  width: 0;
  background-color: ${theme.primary}df;
  height: 100%;
  border-radius: 2px;
  ${Transition({
    duration: 0.75,
    scope: 'width',
    delay: 0.4,
    animation: 'cubic-bezier(0.39, 0.58, 0.57, 1)',
  })}
  width: ${({ width, visible }) => `${visible ? width - 3 : 0}%`}
`;

const BarPercent = styled.div`
  height: 100%;
  padding: 0 0.5em;
  color: ${theme.primary};
  @media only screen and (max-width: 600px) {
    & {
      display: none;
    }
  }
`;

const Bars = styled.div`
  -ms-flex-preferred-size: 100%;
  flex-basis: 100%;
  text-align: left;
  margin: 0 1em;
`;

const Skill = ({ label, width, visible }) => (
  <Wrapper>
    <Label>{label}</Label>
    <BarWrapper>
      <Bar width={width} visible={visible} />
      <BarPercent>{width}%</BarPercent>
    </BarWrapper>
  </Wrapper>
);

export const SkillBars = ({ visible }) => (
  <Bars>
    <Skill label="Node.js" visible={visible} width="90" />
    <Skill label="React" visible={visible} width="80" />
    <Skill label="Typescript" visible={visible} width="85" />
    <Skill label="Javascript" visible={visible} width="75" />
    <Skill label="Nest.js" visible={visible} width="80" />
    <Skill label="Django" visible={visible} width="65" />
    <Skill label="Spring" visible={visible} width="90" />
  </Bars>
);
