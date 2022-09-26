import { useState } from 'react';
import { AvatarsModal } from '../AvatarsModal/AvatarsModal';
import { Avatar } from '../Avatar/Avatar';
import { API_URL } from '../../helpers/urls';
import choose from '../../img/avatars/choose.svg';
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
      const resp = await axios
        .post(API_URL.concat('user/post'), user)
        .catch(function (error) {
          if (error.response) {
            console.log('Something went wrong');
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
            alert(
              'Oops, something went wrong. The request returned an error, try different details or contact support..'
            );
          }
        });
      setUser(resp.data);
    };
    postUser();
  };

  return (
    <>
      <h2 className='text-centered margin-top-bottom'>
        Pop in your nickname, <br />
        pick an avatar and post!
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
