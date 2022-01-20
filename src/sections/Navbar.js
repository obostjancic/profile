import React from 'react';
import styled from 'styled-components';
import { theme } from '../components';

const NavbarWrapper = styled.div`
  display: flex;
  flex-direction: row;

  position: absolute;
  top: 0;
  left: 0;
  // background-color: #eeeeee55;

  @media only screen and (max-width: 600px) {
    & {
      // top: -5em;
      left: 0;
      // background-color: #eeeeee05;
    }
  }
`;

const NavItem = styled.a`
  transition: all 0.3s ease-in-out;

  font-size: 15px;
  color: #818181 !important;
  text-transform: uppercase;
  margin: 0.75em;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    color: ${theme.primary} !important;
    cursor: pointer;
  }

  @media only screen and (max-width: 600px) {
    & {
      font-size: 14px;
    }
  }
`;

export const Navbar = () => (
  <header>
    <nav>
      <NavbarWrapper id="navbar">
        <NavItem href="#skills">Skills</NavItem>
        <NavItem href="#projects">Projects</NavItem>
        <NavItem href="#experience">Experience</NavItem>
        {/* <NavItem href="#articles">Articles</NavItem> */}
      </NavbarWrapper>
    </nav>
  </header>
);
