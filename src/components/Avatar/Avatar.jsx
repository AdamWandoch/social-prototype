import { AvatarStyled } from './Avatar.styled';
import avatars from '../../img/avatars/avatars';

export const Avatar = ({ index, pickAvatar }) => {
  const handleClick = () => {
    pickAvatar(index);
  };

  return (
    <AvatarStyled onClick={handleClick} className='avatar-wrapper'>
      <img src={avatars[index].icon} alt='avatar' />
      <p className='avatar-name' data-testid='paragraph'>
        {avatars[index].name.toUpperCase()}
      </p>
    </AvatarStyled>
  );
};
