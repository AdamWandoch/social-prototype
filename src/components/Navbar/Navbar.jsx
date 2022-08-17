import React from 'react';
import { StyledNavbar } from './Navbar.styled';

export const Navbar = ({ title, bg, color, links, titleFontSize }) => {
  return (
    <StyledNavbar bg={bg} color={color} titleFontSize={titleFontSize}>
      <section>
        <span>{title || '!!! default title !!!'}</span>
        <ul>
          {links.map((link) => (
            <li>{link}</li>
          ))}
        </ul>
      </section>
    </StyledNavbar>
  );
};
