import styled from 'styled-components';
import { Flex, theme, Transition } from './Base.styles';

export const FlexRow = styled.div`
  ${Flex}
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
`;

export const Reverse = styled.div`
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

export const Section = styled.section`
  max-width: 1000px;
  padding: 0 50px;
  padding-top: 1em;
  margin: 0 auto 5em auto;
  pointer-events: ${({ intro }) => (intro ? 'none' : 'auto')};
  ${({ active }) => (active ? Transition({ duration: 1 }) : 'opacity: 0')}
`;

export const SectionHeading = styled.h2`
  text-transform: uppercase;
  margin-bottom: 2em;
  font-size: 26px;
`;

export const Divider = styled.div`
  width: 4em;
  background-color: ${theme.primary};
  border: 2px solid ${theme.primary};
  border-radius: 1.5px;
  margin-bottom: 0.5em;
`;
