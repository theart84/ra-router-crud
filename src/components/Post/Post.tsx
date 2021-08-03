// Core
import React, {useRef, useState} from "react";
import {useHistory, useParams} from 'react-router-dom';

// Types
import {TPostFunctions, TPost, ParamTypes} from '../../types';

const Post: React.FC<TPost & TPostFunctions> = ({id, content, onDeletePost, onEditPost}) => {
  const [isEdit, setIsEdit] = useState(false);
  const ref = useRef<HTMLParagraphElement>(null);
  const history = useHistory<History>();
  const params = useParams<ParamTypes>();
  const onViewPost = () => {
    if (params.id) {
      return;
    }
    history.push(`/posts/${id}`);
  }

  const onEditHandler = () => setIsEdit(prevState => !prevState);

  const onSubmitHandler = (event: React.KeyboardEvent): void => {
    if (event.key === 'Enter') {
      if (onEditPost && ref.current?.textContent) {
       onEditPost(ref.current?.textContent);
      }
      setIsEdit(false);
    }
  }
  return (
    <div
      className="card w-50 ml-auto mr-auto"
      data-id={id}
      style={{position: 'relative', margin: '0 auto 20px'}}
      onClick={onViewPost}
    >
      <div className="card-body">
        <p ref={ref}
           style={isEdit ? {border: '1px solid blue'} : {}}
           className="card-text"
           contentEditable={isEdit}
           onKeyUp={onSubmitHandler}
           suppressContentEditableWarning>{content}
        </p>
        {params.id && (
          <div className="d-flex flex-row-reverse">
            <button type="button" className="btn btn-danger" style={{marginLeft: 15}} onClick={onDeletePost}>Delete
            </button>
            <button type="button" className="btn btn-primary" onClick={onEditHandler}>Edit</button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Post
