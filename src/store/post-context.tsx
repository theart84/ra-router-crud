// Core
import React, {useEffect, useState} from "react";
import {useHistory} from "react-router-dom";

// Types
import {ContextProps, TPost} from "../types";


export const PostContext = React.createContext<ContextProps>({
  posts: [],
  addNewPost: () => {
  },
  editPost: (id: string, content: string) => {
  },
  deletePost: (id: string) => {
  }
})

const PostsContextProvider = (props: any) => {
  const [posts, setPosts] = useState<TPost[]>([]);
  const history = useHistory<History>();
  useEffect(() => {
    fetch('http://localhost:7777/posts')
      .then((response) => response.json())
      .then((data: TPost[]) => setPosts(((prevState) => [...prevState, ...data])))
  }, []);

  const onAddNewPostHandler = (payload: TPost) => {
    fetch('http://localhost:7777/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    })
      .then(() => {
        setPosts(prevState => [...prevState, payload]);
      })
      .then(() => history.replace('/'))
  }

  const onEditPostHandler = (id: string, content: string) => {
    fetch(`http://localhost:7777/posts/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({content})
    })
      .then(() => {
        setPosts(prevState => {
          const filteredPosts = prevState.filter(o => o.id !== id);
          const editPost = {id, content}
          return [...filteredPosts, editPost];
        })
      })
      .then(() => history.replace('/'))
  }

  const onDeletePostHandler = (id: string) => {
    fetch(`http://localhost:7777/posts/${id}`, {
      method: 'DELETE'
    })
      .then(() => {
        setPosts(prevState => {
          const filteredPosts = prevState.filter(o => o.id !== id);
          return [...filteredPosts];
        })
      })
      .finally(() => history.push('/'));
  }


  return (
    <PostContext.Provider value={{
      posts,
      addNewPost: onAddNewPostHandler,
      editPost: onEditPostHandler,
      deletePost: onDeletePostHandler
    }}
    >
      {props.children}
    </PostContext.Provider>
  )
}

export default PostsContextProvider;


