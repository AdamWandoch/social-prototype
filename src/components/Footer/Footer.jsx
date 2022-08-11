import { StyledFooter } from './Footer.styled.jsx';

const year = new Date().getFullYear();

export const Footer = ({ color }) => {
  return (
    <StyledFooter color={color}>
      <p data-testid='paragraph'>
        Adam Wandoch {year} {'-> '}
        <a
          href='https://github.com/AdamWandoch/social-prototype'
          target='_blank'
          rel='noreferrer'
        >
          GitHub
        </a>
      </p>
    </StyledFooter>
  );
};
