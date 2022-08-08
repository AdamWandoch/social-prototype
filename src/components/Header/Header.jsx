import logo from '../../img/avatar-group.png';
import { HeaderStyled } from './Header.styled';

export const Header = () => {
  return (
    <HeaderStyled data-testid='wrapper'>
      <img src={logo} className='logo' alt='logo' />
      <h1 className='title'>Social App Prototype.</h1>
    </HeaderStyled>
  );
};
