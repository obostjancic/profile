import React, { useState } from "react";
import styled from "styled-components";
import { FlexRow, SectionHeading, VSSection } from "../../components";
import { SkillBars } from "./SkillBars";

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

  const handleChange = visible => {
    setVisible(visible);
  };

  return (
    <VSSection anchor={"skills"} handleChange={handleChange}>
      <Wrapper>
        <SectionHeading>Skills & Interests</SectionHeading>
        <ColumnWrap>
          <Summary>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis pellentesque felis. Nam cursus justo
              tortor, id dignissim lacus viverra at. Curabitur pulvinar est nec lectus sagittis egestas. Sed porttitor
              orci eu nisl bibendum ultrices. Etiam in nisi sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Ut quis pellentesque felis. Nam cursus justo tortor, id dignissim lacus viverra at. Curabitur
              pulvinar est nec lectus sagittis egestas. Sed porttitor orci eu nisl bibendum ultrices. Etiam in nisi sit
              amet.
            </p>
          </Summary>
          <SkillBars visible={visible} />
        </ColumnWrap>
      </Wrapper>
    </VSSection>
  );
};
