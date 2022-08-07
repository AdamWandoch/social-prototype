import { StyledFooter } from './Footer.styled.jsx';

export const Footer = ({ colour }) => {
  return (
    <StyledFooter colour={colour}>
      <p>
        Adam Wandoch 2022 {'-> '}
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
