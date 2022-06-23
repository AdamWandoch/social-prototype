import React, { useState } from 'react';

export const Feed = (props) => {
  const [user, setUser] = useState(props.user);
  return (
    <div>
      <p>Feed content here</p>
      <p>Current User: {user}</p>
    </div>
  );
};
