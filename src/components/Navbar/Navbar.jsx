import React from 'react';
import { StyledNavbar } from './Navbar.styled';
import { Link } from 'react-router-dom';

const config = {
  title: 'SocialApp.',
  bg: 'rgba(255, 255, 255, 0.5)',
  color: 'white',
  titleFontSize: '1.5rem',
  links: ['Home', 'About', 'Contact'],
};

export const Navbar = () => {
  return (
    <StyledNavbar {...config}>
      <section>
        <Link to={'./'}>
          <span>{config.title || '!!! default title !!!'}</span>
        </Link>
        
        <ul>
          {config.links &&
            config.links.map((link, index) => (
              <li key={index}>
                <Link to={`./${link.toLowerCase()}`}>{link}</Link>
              </li>
            ))}
        </ul>
      </section>
    </StyledNavbar>
  );
};
