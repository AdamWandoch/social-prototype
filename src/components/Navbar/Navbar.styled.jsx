import styled from 'styled-components';

export const StyledNavbar = styled.nav`
  transition: all 0.5s ease-in-out;
  background-color: ${(props) => (props.bg ? props.bg : 'none')};
  color: ${(props) => (props.color ? props.color : '#000')};
  position: fixed;
  padding: 0.5rem 0;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 500;

  section {
    position: relative;
    width: min(100%, 600px);
    margin: auto;
  }

  span {
    text-align: left;
    font-size: ${(props) =>
      props.titleFontSize ? props.titleFontSize : '1rem'};
  }

  ul {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
  }

  li {
    display: inline;
    padding: 0 1rem;
  }

  li:last-child {
    padding-right: 0;
  }
`;
