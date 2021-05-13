import styled from "styled-components";
import { Flex, theme, Transition } from "./Base.styles";

export const FlexRow = styled.div`
  ${Flex}
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
`;

export const FlexRowReverse = styled.div`
  ${Flex}
  -webkit-box-orient: horizontal;
  -webkit-box-direction: reverse;
  -ms-flex-direction: row-reverse;
  flex-direction: row-reverse;
`;

export const FlexColumn = styled.div`
  ${Flex}
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
`;

export const Section = styled.div`
  max-width: 1000px;
  padding: 0 50px;
  margin: 0 auto 7.5em auto;
  pointer-events: ${({ intro }) => (intro ? "none" : "auto")};
  ${({ active }) => (active ? Transition({ duration: 1 }) : "opacity: 0")}
`;

export const SectionHeading = styled.h2`
  text-transform: uppercase;
  margin-bottom: 2em;
`;

export const Divider = styled.div`
  width: 100px;
  background-color: ${theme.primary};
  border: 2px solid ${theme.primary};
  border-radius: 10px;
  margin-bottom: 0.5em;
`;
