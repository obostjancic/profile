import styled from 'styled-components';
import { theme } from './Base.styles';

export const Section = styled.section`
  max-width: 1000px;
  padding: 0 50px;
  padding-top: 1em;
  margin: 0 auto 5em auto;
  pointer-events: ${({ intro }) => (intro ? 'none' : 'auto')};
  ${({ active }) => (active ? '  transition: all 1s ease-in-out' : 'opacity: 0')}
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
