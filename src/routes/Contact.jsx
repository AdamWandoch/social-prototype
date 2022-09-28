import React from 'react';
import photo from '../img/me2.png';
import '../styles/content-styles.css';

export const Contact = () => {
  return (
    <main>
      <article>
        <a
          href='https://www.linkedin.com/in/adam-wandoch/'
          target='_blank'
          rel='noreferrer'
        >
          <img src={photo} alt='Adam' className='portrait' />
        </a>
        <h1>Get to know me!</h1>
        <h2>How to get in touch?</h2>
        <p>
          I'm currently freelancing and helping my wife to build a business but
          also looking for a full-time position as a Web Developer. I'm based in
          Brazil and available to work immediately.
        </p>

        <p>
          You can find me on{' '}
          <a
            href='https://www.linkedin.com/in/adam-wandoch/'
            rel='noreferrer'
            target='_blank'
          >
            LinkedIn
          </a>
          ,{' '}
          <a
            href='https://github.com/AdamWandoch'
            rel='noreferrer'
            target='_blank'
          >
            GitHub
          </a>{' '}
          and{' '}
          <a
            href='https://www.youtube.com/channel/UCVIH7IAFxmwSxYid9r_2R9w'
            rel='noreferrer'
            target='_blank'
          >
            YouTube
          </a>{' '}
          or just simply{' '}
          <a href='mailto:wandoch.adam@google.com?subject=Contant from SocialAppPrototype'>
            DROP&nbsp;AN&nbsp;EMAIL
          </a>
          !
        </p>
      </article>
    </main>
  );
};
