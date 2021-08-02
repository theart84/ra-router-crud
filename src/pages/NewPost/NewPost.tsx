// Core
import React, {FormEvent, useContext, useRef} from "react";
import {useHistory} from 'react-router-dom'
import {generate} from 'shortid';

// Context
import {PostContext} from "../../store/post-context";

// Types
import {TPost} from "../../types";

// Styles
import styles from "./NewPost.module.css";

const NewPost: React.FC = () => {
  const history = useHistory();
  const postContext = useContext(PostContext);
  const textInput = useRef<HTMLInputElement>(null);
  const onSubmitHandler = (event: FormEvent) => {
    event.preventDefault();
    const text = textInput.current?.value;
    if (!text) {
      return;
    }
    const newPost: TPost = {
      id: generate(),
      content: text || ''
    }
    postContext.addNewPost(newPost);
    if (textInput.current && textInput.current.value) {
      textInput.current.value = '';
    }
  }

  const onCloseHandler = () => {
    if (textInput.current && textInput.current.value) {
      textInput.current.value = '';
    }
    history.push('/');
  }

  return (
    <div className="card w-50" style={{position: 'relative', marginRight: 'auto', marginLeft: 'auto'}}>
      <div className={styles.close} onClick={onCloseHandler}/>
      <h5 className="card-header">Publishing a new post</h5>
      <div className="card-body">
        <form onSubmit={onSubmitHandler}>
          <div className="mb-3">
            <label htmlFor="post" className="form-label">Please enter your text</label>
            <input ref={textInput} type="text" className="form-control" id="post" placeholder="Post..."/>
          </div>
          <button type="submit" className="btn btn-primary">Add New Post</button>
        </form>
      </div>
    </div>
  )
}

// Exports
export default NewPost;
