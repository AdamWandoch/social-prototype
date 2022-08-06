import { CommentEditForm } from '../CommentEditForm/CommentEditForm';
import { CommentsList } from '../CommentsList/CommentsList';

export const Comments = () => {
  return (
    <div className='comments-window'>
      <CommentsList />
      <CommentEditForm />
    </div>
  );
};
