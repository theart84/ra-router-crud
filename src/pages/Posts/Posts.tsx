// Core
import React, {useContext} from "react";

// Context
import {PostContext} from "../../store/post-context";

// Types
import {TPost} from "../../types";
import Post from "../../components/Post/Post";

const Posts: React.FC = () => {
  const postContext = useContext(PostContext);
  if (postContext.posts.length === 0) {
    return (
      <div className="card">
        <div className="card-body text-center">
          There is nothing here yet!
        </div>
      </div>
    )
  }

  return (
    <div>
      {postContext.posts.map((post: TPost) => (
        <Post
          key={post.id}
          id={post.id}
          content={post.content}
        />))
      }
    </div>
  )
}

export default Posts;
