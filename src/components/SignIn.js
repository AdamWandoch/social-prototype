import React, { useState } from 'react';
import { AvatarChoice } from './AvatarChoice';
import avatars from '../img/avatars/avatars';
import choose from '../img/avatars/choose.svg';
import { Avatar } from './Avatar';

export const SignIn = ({ setUser }) => {
  const [nickname, setNickname] = useState('');
  const [avatarIndex, setAvatarIndex] = useState(null);
  const [showAvatarChoice, setShowAvatarChoice] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    
  };

  return (
    <>
      <h2 className='text-centered margin-top-bottom'>
        Pop in your nickname, <br />
        pick an avatar and enjoy!
      </h2>
      <div className='sign-in'>
        <form onSubmit={handleSubmit}>
          <input
            className='text-input'
            type='text'
            name='nickname'
            id='nickname'
            value={nickname}
            placeholder='enter your nickname'
            onChange={(e) => {
              setNickname(e.target.value);
            }}
          />
          <div onClick={() => setShowAvatarChoice(true)}>
            <p className='label'>Choose an avatar:</p>
            {avatarIndex !== null ? (
              <Avatar index={avatarIndex} pickAvatar={setAvatarIndex} />
            ) : (
              <img
                className='choose-img avatar'
                src={choose}
                alt='choose'
                onClick={() => setShowAvatarChoice(!showAvatarChoice)}
              />
            )}
          </div>
          <button className='text-input btn-login'>LOGIN</button>
        </form>
      </div>
      {showAvatarChoice && (
        <AvatarChoice
          showChoice={setShowAvatarChoice}
          pickAvatar={setAvatarIndex}
        />
      )}
    </>
  );
};
