import styled from 'styled-components';

const defaultColor = '#fff';

export const StyledFooter = styled.footer`
  font-size: small;
  text-align: center;
  margin: auto;
  margin-top: 4rem;
  color: ${(props) => props.color || defaultColor};

  p {
    margin: 0;
    text-align: center;
  }

  ul {
    margin-bottom: 2rem;
    list-style-type: none;
  }

  li {
    display: inline-block;
    margin: 0;
    margin-right: 1rem;
  }

  li:last-child {
    margin-right: 0;
  }

  li::after {
    /* content: ; */
  }

  li::before {
    /* content: ' | '; */
  }
`;
