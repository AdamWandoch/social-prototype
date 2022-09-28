import { StyledFooter } from './Footer.styled.jsx';

const year = new Date().getFullYear();

export const Footer = ({ color }) => {
  return (
    <StyledFooter color={color}>
      <p data-testid='paragraph'>Adam Wandoch {year}</p>
      <ul>
        <li>
          <a
            href='https://www.linkedin.com/in/adam-wandoch/'
            target='_blank'
            rel='noreferrer'
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a
            href='https://github.com/AdamWandoch/social-prototype'
            target='_blank'
            rel='noreferrer'
          >
            GitHub
          </a>
        </li>
        <li>
          <a
            href='https://www.youtube.com/channel/UCVIH7IAFxmwSxYid9r_2R9w'
            target='_blank'
            rel='noreferrer'
          >
            YouTube
          </a>
        </li>
        <li>
          <a
            href='https://www.instagram.com/adamwandoch/'
            target='_blank'
            rel='noreferrer'
          >
            Instagram
          </a>
        </li>
      </ul>
    </StyledFooter>
  );
};
