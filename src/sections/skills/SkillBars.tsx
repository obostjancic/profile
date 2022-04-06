import React from 'react';
import styled from 'styled-components';
import { theme } from '../../components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;

  margin: 0.75em 0;
  transition: all 0.3s ease-in-out;
  border-radius: 100px;

  &:hover {
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
  border: 1px solid ${theme.primary};
  border-radius: 100px 0 0 100px;

  @media only screen and (max-width: 600px) {
    & {
      min-width: 70px;
    }
  }
`;

const BarWrapper = styled.div`
  display: flex;
  flex-direction: row;

  font-weight: 600;
  line-height: 1.5;
  width: 80%;
  padding: 2px 2px;
  justify-content: space-between;
  border: 1px solid ${theme.primary};
  border-radius: 0 100px 100px 0;
  border-left: 0;
`;

const Bar = styled.div<BarProps>`
  width: 0;
  background-color: ${theme.primary}df;
  height: 100%;
  border-radius: 2px;
  transition: width 0.75s cubic-bezier(0.39, 0.58, 0.57, 1);
  transition-delay: 0.4s;

  width: ${({ width, visible }) => `${visible ? Number(width) - 3 : 0}%`};
`;

const BarPercent = styled.div`
  display: none;
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

interface BarProps {
  width: string;
  visible: boolean;
}
interface SkillProps extends BarProps {
  label: string;
}

const Skill = ({ label, width, visible }: SkillProps) => (
  <Wrapper>
    <Label>{label}</Label>
    <BarWrapper>
      <Bar width={width} visible={visible} />
      <BarPercent>{width}%</BarPercent>
    </BarWrapper>
  </Wrapper>
);

export const SkillBars = ({ visible }: { visible: boolean }) => (
  <Bars>
    <Skill label="Node.js" visible={visible} width="90" />
    <Skill label="React" visible={visible} width="85" />
    <Skill label="JavaScript" visible={visible} width="85" />
    <Skill label="TypeScript" visible={visible} width="80" />
    <Skill label="Nest.js" visible={visible} width="75" />
    <Skill label="Spring" visible={visible} width="80" />
    <Skill label="Django" visible={visible} width="60" />
  </Bars>
);
