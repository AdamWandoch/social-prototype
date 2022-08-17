import React from 'react';
import { StyledNavbar } from './Navbar.styled';

const config = {
  title: 'SocialAppPrototype',
  bg: 'rgba(255, 255, 255, 0.2)',
  color: 'yellow',
  titleFontSize: '1.3rem',
  links: ['Home', 'About', 'Contact'],
};

export const Navbar = () => {
  return (
    <StyledNavbar {...config}>
      <section>
        <span>{config.title || '!!! default title !!!'}</span>
        <ul>{config.links && config.links.map((link) => <li>{link}</li>)}</ul>
      </section>
    </StyledNavbar>
  );
};
