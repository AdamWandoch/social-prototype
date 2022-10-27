import React from 'react';

export const ChatBubble = () => {
  return (
    <>
      <script>
        {(function (doc, scr, id) {
          var js,
            fjs = doc.getElementsByTagName(scr)[0];
          if (doc.getElementById(id)) return;
          js = doc.createElement(scr);
          js.id = id;
          js.src = 'https://contactus.nikba.com/contactus.min.js?v=1.98';
          fjs.parentNode.insertBefore(js, fjs);
        })(document, 'script', 'contactus-sdk')}
      </script>
      <div
        id='contactus'
        call=''
        call-label=''
        viber=''
        viber-label=''
        whatsapp='5548999153891'
        whatsapp-label='Whatsapp me!'
        facebook=''
        facebook-label=''
        telegram=''
        telegram-label=''
        title='Contact Adam'
        position='right'
      ></div>
    </>
  );
};
