import React, { useState } from 'react';
import { StyledNavbar } from './Navbar.styled';
import { Link } from 'react-router-dom';

const config = {
  title: 'SocialApp.',
  bg: 'rgba(17, 105, 156, 0.935)',
  color: 'white',
  titleFontSize: '1rem',
  links: ['Home', 'About', 'Contact'],
};

export const Navbar = () => {
  const [isMenuExpanded, setIsMenuExpanded] = useState(false);

  return (
    <StyledNavbar {...config}>
      <section>
        <Link to={'./'} onClick={() => setIsMenuExpanded(false)}>
          <span>{config.title || '!!! default title !!!'}</span>
        </Link>
        <span
          className='menu-button'
          onClick={() => setIsMenuExpanded(!isMenuExpanded)}
        >
          MENU
        </span>
        <ul className={isMenuExpanded ? 'menu expanded' : 'menu'}>
          {config.links &&
            config.links.map((link, index) => (
              <li key={index}>
                <Link
                  to={`./${link.toLowerCase()}`}
                  onClick={() => setIsMenuExpanded(false)}
                >
                  {link}
                </Link>
              </li>
            ))}
        </ul>
      </section>
    </StyledNavbar>
  );
};
