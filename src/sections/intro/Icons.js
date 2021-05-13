import React from "react";
import styled from "styled-components";
import { AlignItemsSpaceAround, FlexRow, Scale, Transition } from "../../components";

const IconWrapper = styled.a`
  ${Transition({ duration: 0.3 })}
  -webkit-filter: invert(27%) sepia(40%) saturate(6820%) hue-rotate(183deg) brightness(93%) contrast(101%);
  filter: invert(27%) sepia(40%) saturate(6820%) hue-rotate(183deg) brightness(93%) contrast(101%);
  max-height: 2em;
  min-width: 2em;
  cursor: pointer;
  opacity: 0.95;
  margin: 0 1em;

  &:hover {
    ${Scale({ amount: 1.2 })}
  }
`;

export const Icons = styled(FlexRow)`
  ${AlignItemsSpaceAround}
  padding: 0 10%;
  pointer-events: auto;
`;

export const Icon = ({ src, href }) => (
  <IconWrapper href={href} target="_blank" rel="noopener noreferrer">
    <img src={src} alt="" />
  </IconWrapper>
);
