import styled from 'styled-components';

const lineThickness = '0.2rem';
const bgColor = 'hsla(0, 0%, 100%, 0.3)';

export const AvatarStyled = styled.div`
  display: grid;
  justify-items: center;

  img {
    border: solid ${(props) => props.lineThickness || lineThickness};
    border-radius: 100vh;
    padding: 0.5rem;
    width: 8rem;
    background-color: ${(props) => props.bgColor || bgColor};
  }
`;
