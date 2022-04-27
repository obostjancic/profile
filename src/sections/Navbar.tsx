import React from 'react';

interface NavItemProps {
  href: string;
  children: React.ReactNode;
}

function NavItem({ href, children }: NavItemProps) {
  return (
    <a
      className="uppercase font-bold my-3 mx-2 sm:mx-4 text-base text-gradient hover:text-prim-dark transition-all"
      href={href}
    >
      {children}
    </a>
  );
}

export default function Navbar() {
  return (
    <header>
      <nav id="navbar" className="flex absolute top-0 left-0">
        <NavItem href="#skills">Skills</NavItem>
        <NavItem href="#projects">Projects</NavItem>
        <NavItem href="#experience">Experience</NavItem>
        {/* <NavItem href="#articles">Articles</NavItem> */}
      </nav>
    </header>
  );
}
