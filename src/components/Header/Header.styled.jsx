import styled from 'styled-components';

const defaultShadow = 'hsla(0, 0%, 0%, 0.363)';

export const HeaderStyled = styled.header`
  display: grid;
  filter: drop-shadow(0 0 5px ${(props) => props.shadow || defaultShadow});
`;
