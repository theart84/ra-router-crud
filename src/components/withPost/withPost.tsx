// Core
import React, {useContext, useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {ParamTypes, TPost} from "../../types";
import {PostContext} from "../../store/post-context";


const withPost = (Component: React.ComponentType<any>): React.FC => {
  return () => {
    const [post, setPost] = useState<TPost>({id: '', content: ''});
    const postContext = useContext(PostContext);
    const params = useParams<ParamTypes>()
    useEffect(() => {
      fetch(`http://localhost:7777/posts/${params.id}`)
        .then((response) => response.json())
        .then(data => setPost(prevState => ({...prevState, id: data.id, content: data.content})))
    }, [params.id])

    const onDeleteHandler = () => {
      postContext.deletePost(params.id)
    }

    const onEditHandler = (content: string) => {
      postContext.editPost(params.id, content);
    }

    return <Component id={post.id} content={post.content} onDeletePost={onDeleteHandler} onEditPost={onEditHandler}/>
  }
}

export default withPost;
