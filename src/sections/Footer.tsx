import React from 'react';
import { ArrowUpIcon } from '../components/Icons';
import { LinkProps } from '../types';

const FooterLink = ({ children, href }: LinkProps) => (
  <a
    className=" text-transparent bg-clip-text bg-gradient-to-br from-prim-light to-prim-dark"
    href={href}
    target="_blank"
    rel="noopener noreferrer"
  >
    {children}
  </a>
);

export const Footer = () => (
  <footer className="text-center px-2 pt-4 pb-1 bg-opacity-10 bg-prim-light shadow-inner">
    <h2 className="text-center uppercase mb-8 text-3xl">Get in touch</h2>

    <p>
      I'm always open to new opportunities and projects. <br />
      If you're looking for development help or have any queries at all, <br /> don't hesitate to{' '}
      <FooterLink href="mailto:ognjen.bostjancic@gmail.com">contact me</FooterLink>.
    </p>
    <div className="h-16 w-8 mx-auto py-3">
      <ArrowUpIcon />
    </div>
    <p className="text-sm">
      Crafted with&nbsp;
      <FooterLink href={'https://reactjs.org/'}>React</FooterLink>,&nbsp;
      <FooterLink href={'https://vantajs.com/'}>Vanta.js</FooterLink>
      &nbsp;and&nbsp;
      <FooterLink href={'https://styled-components.com/'}>Styled components</FooterLink>
    </p>
  </footer>
);
