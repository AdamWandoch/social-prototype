import React, { useState } from 'react';
import { AvatarChoice } from './AvatarChoice';
import avatars from '../img/avatars/avatars';
import choose from '../img/avatars/choose.svg';
import { Avatar } from './Avatar';

export const SignIn = () => {
  const [nickname, setNickname] = useState('');
  const [avatarIndex, setAvatarIndex] = useState(null);
  const [showAvatarChoice, setShowAvatarChoice] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    // to do
  };

  return (
    <>
      <h2 className='text-centered margin-top-bottom'>
        Pop in your nickname, <br />
        pick an avatar and enjoy!
      </h2>
      <form onSubmit={handleSubmit} className='sign-in'>
        <label htmlFor='nickname' className='label'>
          Nickname:{' '}
        </label>
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
          <p className='label'>Choose avatar:</p>
          {avatarIndex !== null ? (
            <Avatar index={avatarIndex} />
          ) : (
            <img
              className='choose-img'
              src={choose}
              alt='choose'
              onClick={() => setShowAvatarChoice(!showAvatarChoice)}
            />
          )}
        </div>
        <button className='text-input btn-submit'>SUBMIT</button>
      </form>
      {showAvatarChoice && (
        <AvatarChoice
          showChoice={setShowAvatarChoice}
          pickAvatar={setAvatarIndex}
        />
      )}
    </>
  );
};
