import React from 'react';
import { Skeleton } from '@mui/material';

export const PostSkeleton = () => {
  const style = {
    padding: '1rem',
    width: '100%',
    display: 'grid',
    gap: '0.5rem',
    gridTemplateColumns: '70px 1fr 1fr',
    alignItems: 'center',
  };

  return (
    <div style={style}>
      <Skeleton animation='wave' variant='circular' width={60} height={60} />
      <Skeleton animation='wave' variant='rounded' width={'100%'} height={40} />
      <Skeleton animation='wave' variant='rounded' width={'100%'} height={40} />
      <Skeleton
        animation='wave'
        variant='rounded'
        width={'100%'}
        height={60}
        style={{ gridColumn: 'span 3' }}
      />
    </div>
  );
};
