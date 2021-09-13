/* 
  Start here and work your way down the nested components.
  Not all files in the project need code added.
  Look at each file to see what props need to be passed!
*/

import React from 'react';
import { useState } from 'react';
import Posts from './components/Posts/Posts'
import SearchBar from './components/SearchBar/SearchBar'
import dummyData from './dummy-data'
import './App.css';

const App = () => {

  const [posts, setPosts] = useState(dummyData)

  const search = keyword => {
    setPosts(posts.filter(post => (post.username.includes(keyword))))
  };

  const likePost = postId => {
    setPosts(posts.map(post => {
      return post.id === postId ? {...post, likes: post.likes + 1} : post
    }))
  }; 
   
  return (
    <div className='App'>
      <SearchBar search={search} />
      <Posts likePost={likePost} posts={posts} />
    </div>
  );
};

export default App;
