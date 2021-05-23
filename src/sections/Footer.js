import React from 'react';
import styled from 'styled-components';
import { SectionHeading, theme } from '../components';
import { ArrowUpIcon } from '../components/Icons';

const FooterWrapper = styled.footer`
  padding: 1em;
  background-color: ${theme.backgroundDark};

  -webkit-box-shadow: inset 0px 0px 10px ${theme.primaryDark};

  box-shadow: inset 0px 0px 10px ${theme.primaryDark};
`;

const FooterIconWrapper = styled.div`
  height: 2em;
  width: 2em;
  margin: 0 auto;
  // padding: 1em 0;
`;

const FooterLinksWrapper = styled.p`
  font-size: 0.85em;

  & > a {
    text-decoration: none;
    color: ${theme.primary};
  }
`;

const ContactMe = styled.p``;

const FooterLink = ({ children, href }) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    {children}
  </a>
);
export const Footer = () => (
  <FooterWrapper>
    <SectionHeading>Get in touch</SectionHeading>
    <ContactMe>
      I always open to new opportunities and projects. If you're looking for development help or
      have any queries at all, dont hesitate to contact me.
    </ContactMe>
    <FooterIconWrapper>
      <ArrowUpIcon />
    </FooterIconWrapper>
    <FooterLinksWrapper>
      Built with&nbsp;
      <FooterLink href={'https://reactjs.org/'}>React</FooterLink>,&nbsp;
      <FooterLink href={'https://ptsjs.org/'}>Pts</FooterLink>
      &nbsp;and&nbsp;
      <FooterLink href={'https://styled-components.com/'}>Styled components</FooterLink>
    </FooterLinksWrapper>
  </FooterWrapper>
);
