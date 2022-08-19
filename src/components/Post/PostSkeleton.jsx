import React from 'react';
import { Skeleton } from '@mui/material';

export const PostSkeleton = () => {
  return (
    <div className='post-skeleton'>
      <Skeleton variant='circular' width={40} height={40} />
      <Skeleton variant='rounded' width={150} height={40} />
      <Skeleton variant='rounded' width={150} height={40} />
      <Skeleton variant='rounded' width={150} height={40} />
    </div>
  );
};
