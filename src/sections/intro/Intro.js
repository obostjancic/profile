import React from 'react';
import styled from 'styled-components';
import { theme, VSSection } from '../../components';
import { isMobile } from '../../utils';
import { Canvas } from './Canvas';
import { Icons } from '../../components/Icons';
import { Photo } from './Photo';

const IntroWrapper = styled.div`
  padding: 0 50px;
  max-width: 600px;
  margin: 0 auto;
  padding-top: 6em;
  min-height: 80vh;
  opacity: 1;

  @media only screen and (max-width: 600px) {
    & {
      padding: 0;
      margin: 5em auto 5em auto;
    }
  }
`;

const Heading = styled.h1`
  margin: 0;
  margin-top: 1em;
  font-weight: bold;
`;

const Subheading = styled.h2`
  font-size: 1.17em;
  margin-top: 0.5em;
  margin-bottom: 0;
  background-color: #eeeeee25;
  display: inline-block;
  color: ${theme.primary};
`;

const Summary = styled.summary`
  margin: 3em auto 1em auto;
  line-height: 2;
  background-color: #eeeeee25;
`;

const EmphasizedSummary = styled.p`
  font-size: 18px;
  padding-bottom: 1em;
`;

const IntroLink = styled.a`
  text-decoration: none;
  font-weight: bold;
  color: ${theme.primary};
  pointer-events: auto;
  &::visited {
    color: ${theme.primary};
  }
`;

export const Intro = () => {
  return (
    <>
      {!isMobile() && <Canvas />}
      <VSSection intro>
        <IntroWrapper>
          <Photo />
          <hgroup>
            <Heading>Ognjen Bostjancic</Heading>
            <Subheading>Software developer</Subheading>
          </hgroup>
          <Summary>
            <EmphasizedSummary>
              Hello, I'm Ogi - A software developer focused on the Web apps. Using React and Node.js
              with Typescript daily.
            </EmphasizedSummary>
            Currently, I work as a Web developer for{' '}
            <IntroLink href="https://anyline.com/" target="_blank" rel="noopener noreferrer">
              Anyline
            </IntroLink>
            , where I am committed to the creation of a cloud infrastructure that is used for
            automation of Machine Learning and Computer Vision processes. When I am not rolling out
            new features I spend my time improving code quality by refactoring, introducing design
            patterns or writing additional tests. Colleagues know me as a motivated and
            communicative team member who is enthusiastic about taking the development process to
            the next level.
          </Summary>
          <Icons />
        </IntroWrapper>
      </VSSection>
    </>
  );
};
