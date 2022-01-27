import React from 'react';
import styled from 'styled-components';
import { theme, VSSection } from '../../components';
import { Icons } from '../../components/Icons';
import { Photo } from './Photo';
import { Vanta } from './Vanta';
import { isMobile } from './../../utils';

const IntroWrapper = styled.div`
  max-width: 600px;
  margin: 0 auto;
  min-height: 100vh;
  opacity: 1;

  display: flex;
  flex-direction: column;
  justify-content: center;

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
  background-color: #f2f6f8aa;
  border-radius: 20px;
  box-shadow: 0px 0px 50px #f2f6f8ff;
`;

const EmphasizedSummary = styled.p`
  font-size: 18px;
  padding-bottom: 1em;
  font-weight: bold;
  opacity: 0.85;
`;

const ParagraphSummary = styled.p`
  line-height: 2;
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
      {!isMobile() && <Vanta />}
      <VSSection intro>
        <IntroWrapper>
          <Photo />
          <hgroup>
            <Heading>Ognjen Bostjancic</Heading>
            <Subheading>Software developer</Subheading>
          </hgroup>
          <Summary>
            <EmphasizedSummary>
              Hello, I'm Ogi, a software developer focused on Web apps. I use React and Node.js with
              Typescript daily.
            </EmphasizedSummary>
            <ParagraphSummary>
              Currently, I work as a Web developer for{' '}
              <IntroLink href="https://anyline.com/" target="_blank" rel="noopener noreferrer">
                Anyline
              </IntroLink>
              , where I am committed to the creation of a cloud infrastructure that is used for the
              automation of machine learning and computer vision processes. When I am not rolling
              out new features, I spend my time improving code quality by refactoring, introducing
              design patterns, or writing additional tests. Coworkers know me as a motivated and
              communicative team member who is enthusiastic about taking the development process to
              the next level.
            </ParagraphSummary>
          </Summary>
          <Icons />
        </IntroWrapper>
      </VSSection>
    </>
  );
};
