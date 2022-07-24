import { CommentEditForm } from './CommentEditForm';
import { CommentsList } from './CommentsList';

export const Comments = () => {
  return (
    <div className='comments-window'>
      <CommentsList />
      <CommentEditForm />
    </div>
  );
};
