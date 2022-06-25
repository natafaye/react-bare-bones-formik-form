import React, { useState } from 'react'
import CreatePostForm from './CreatePostForm';
import PostList from './PostList';

function App() {
  const [postList, setPostList] = useState([]);

  return (
    <>
      <CreatePostForm setPostList={setPostList}/>
      <PostList posts={postList} />
    </>
  );
}

export default App;
