import React from 'react';

interface NavItemProps {
  href: string;
  children: React.ReactNode;
}

const NavItem = ({ href, children }: NavItemProps) => {
  return (
    <a
      className="uppercase text-sm font-bold m-3 text-[#818181] hover: text-transparent bg-clip-text bg-gradient-to-br from-prim-light to-prim-dark transition-all"
      href={href}
    >
      {children}
    </a>
  );
};

export const Navbar = () => (
  <header>
    <nav id="navbar" className="flex absolute top-0 left-0">
      <NavItem href="#skills">Skills</NavItem>
      <NavItem href="#projects">Projects</NavItem>
      <NavItem href="#experience">Experience</NavItem>
      {/* <NavItem href="#articles">Articles</NavItem> */}
    </nav>
  </header>
);
