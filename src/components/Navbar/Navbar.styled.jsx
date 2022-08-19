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
  z-index: 5;
  

  a {
    text-decoration: none;
  }

  section {
    display: grid;
    grid-template-columns: 1fr 1fr;
    position: relative;
    width: min(100%, 600px);
    height: 3rem;
    margin: auto;
    align-items: center;
  }

  span {
    display: block;
    width: min-content;
    border: solid 3px;
    border-radius: 10rem;
    padding: 0 1rem;
    margin-left: 0.5rem;
    text-align: left;
    background-color: ${(props) => (props.bg ? props.bg : 'none')};
    font-size: ${(props) =>
      props.titleFontSize ? props.titleFontSize : '1rem'};
  }

  .menu {
    display: flex;
    margin-left: auto;
  }

  li {
    padding: 0 1rem;
    border: solid 3px;
    border-radius: 10rem;
    margin: 0 0.5rem;
    display: block;
    width: 100%;
  }

  .menu-button {
    padding: 0 0.5rem;
    cursor: pointer;
    display: none;
    width: min-content;
    margin-left: auto;
    margin-right: 0.5rem;
    font-size: 1rem;
    align-self: center;
    background-color: unset;
  }

  @media screen and (max-width: 768px) {
    section {
      height: unset;
    }

    .menu-button {
      display: block;
    }

    .menu {
      display: none;
    }

    .menu.expanded {
      display: block;
    }

    li {
      width: 200%;
      text-align: center;
      margin: 2rem auto;
    }
  }
`;
