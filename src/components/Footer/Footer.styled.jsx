import styled from 'styled-components';

const defaultColor = '#fff';

export const StyledFooter = styled.footer`
  font-size: small;
  margin: auto;
  margin-top: 1rem;
  margin-bottom: 2rem;
  color: ${(props) => props.color || defaultColor};
`;
