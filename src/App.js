import React from "react";
import {useState, useEffect} from 'react';
import  {postData}  from "./data";
import { PostList } from "./components/PostList";
import {Header} from './components/Header';
import {Footer} from "./components/Footer";
import {Greeting} from "./components/Greeting";


function App() {

const [posts,setPosts] = useState(postData)

  return (
    <div>
      <Header />
      <Greeting />
      <PostList mapPosts={posts}/>
      <Footer />
    </div>
  );
}

export default App;
