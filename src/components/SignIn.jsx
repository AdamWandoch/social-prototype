import React, { useState } from 'react';
import { AvatarsModal } from './AvatarsModal';
import { Avatar } from './Avatar';
import choose from '../img/avatars/choose.svg';
import axios from 'axios';

export const SignIn = ({ setUser }) => {
  const [nickname, setNickname] = useState('');
  const [avatarIndex, setAvatarIndex] = useState(null);
  const [showAvatarsModal, setShowAvatarsModal] = useState(false);

  const signIn = (e) => {
    e.preventDefault();
    const postUser = async () => {
      const user = {
        id: 0,
        nickname: nickname,
        avatarId: avatarIndex,
      };
      const resp = await axios.post(
        process.env.REACT_APP_API_URL.concat('user/post'),
        user
      );
      setUser(resp.data);
    };
    postUser();
  };

  return (
    <>
      <h2 className='text-centered margin-top-bottom'>
        Pop in your nickname, <br />
        pick an avatar and enjoy!
      </h2>
      <div className='sign-in'>
        <form onSubmit={signIn}>
          <input
            className='text-input'
            type='text'
            id='nickname'
            value={nickname}
            placeholder='your nickname'
            required
            onChange={(e) => {
              setNickname(e.target.value);
            }}
          />
          <div onClick={() => setShowAvatarsModal(true)}>
            <p className='label'>Choose an avatar:</p>
            {avatarIndex !== null ? (
              <Avatar index={avatarIndex} pickAvatar={setAvatarIndex} />
            ) : (
              <img
                className='choose-img avatar'
                src={choose}
                alt='choose avatar icon'
                onClick={() => setShowAvatarsModal(true)}
              />
            )}
          </div>
          <button className='btn'>login</button>
        </form>
      </div>
      {showAvatarsModal && (
        <AvatarsModal
          showChoice={setShowAvatarsModal}
          pickAvatar={setAvatarIndex}
        />
      )}
    </>
  );
};
