import styled from 'styled-components';

const defaultColour = '#fff';

export const StyledFooter = styled.footer`
  text-align: center;
  font-size: small;
  margin-top: 1rem;
  margin-bottom: 2rem;
  color: ${(props) => props.colour || defaultColour};
`;
