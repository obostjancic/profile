import React from 'react';
import styled from 'styled-components';
import { SectionHeading, theme } from '../components';
import { ArrowUpIcon } from '../components/Icons';

const FooterWrapper = styled.footer`
  padding: 1em 0.5em 0.25em 0.5em;
  background-color: ${theme.backgroundDark};

  box-shadow: inset 0px 0px 10px ${theme.primaryDark};

  & a {
    text-decoration: none;
    color: ${theme.primary};
  }
`;

const FooterIconWrapper = styled.div`
  height: 2em;
  width: 2em;
  margin: 0 auto;
  padding: 0.5em 0 1em 0;
`;

const FooterLinksWrapper = styled.p`
  font-size: 12px;
`;

const FooterLink = ({ children, href }) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    {children}
  </a>
);

export const Footer = () => (
  <FooterWrapper>
    <SectionHeading>Get in touch</SectionHeading>
    <p>
      I'm always open to new opportunities and projects. <br />
      If you're looking for development help or have any queries at all, <br /> don't hesitate to{' '}
      <FooterLink href="mailto:ognjen.bostjancic@gmail.com">contact me</FooterLink>.
    </p>
    <FooterIconWrapper>
      <ArrowUpIcon />
    </FooterIconWrapper>
    <FooterLinksWrapper>
      Crafted with&nbsp;
      <FooterLink href={'https://reactjs.org/'}>React</FooterLink>,&nbsp;
      <FooterLink href={'https://vantajs.com/'}>Vanta.js</FooterLink>
      &nbsp;and&nbsp;
      <FooterLink href={'https://styled-components.com/'}>Styled components</FooterLink>
    </FooterLinksWrapper>
  </FooterWrapper>
);
