import React from 'react';
import { ArrowUpIcon } from '../components/Icons';
import { LinkProps } from '../types';

function FooterLink({ children, href }: LinkProps) {
  return (
    <a className=" text-gradient" href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="px-2 py-4 text-center shadow-inner bg-opacity-10 bg-prim-dark">
      <h2 className="mb-4 text-3xl text-center uppercase">Get in touch</h2>
      <p>
        I&apos;m always open to new opportunities and projects. <br />
        If you&apos;re looking for development help or have any queries at all, <br /> don&apos;t
        hesitate to <FooterLink href="mailto:ognjen.bostjancic@gmail.com">contact me</FooterLink>.
      </p>
      <div className="w-8 h-12 py-3 mx-auto">
        <ArrowUpIcon />
      </div>
      <p className="text-sm">
        Crafted with&nbsp;
        <FooterLink href="https://reactjs.org/">React</FooterLink>,&nbsp;
        <FooterLink href="https://tailwindcss.com/">Tailwind CSS</FooterLink>
        &nbsp;and&nbsp;
        <FooterLink href="https://vantajs.com/">Vanta.js</FooterLink>
      </p>
    </footer>
  );
}
