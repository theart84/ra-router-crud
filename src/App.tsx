// Core
import React from 'react';
import {Switch, Route} from 'react-router-dom';

// Components
import Layout from "./components/Layout/Layout";
import NewPost from "./pages/NewPost/NewPost";
import Posts from "./pages/Posts/Posts";
import Post from "./components/Post/Post";
import withPost from "./components/withPost/withPost";

// HOC
const PostHOC = withPost(Post);

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" render={() => <Posts />} exact/>
        <Route path="/posts/new" component={NewPost}/>
        <Route path="/posts/:id" render={() => <PostHOC />} />
      </Switch>
    </Layout>
  );
}

export default App;
