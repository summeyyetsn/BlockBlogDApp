import React from 'react'
// @@@  IMPORTING COMPONENTS  @@@  
import MainNavbar from '@/components/Navbar/mainNavbar/MainNavbar';
import WritingNavbar from '@/components/Navbar/writingNavbar/WritingNavbar'
import LoginPageNavbar from '@/components/Navbar/loginPageNavbar/LoginPageNavbar'
import BlogPostCard from '@/components/BlogPost/blogPostCard/BlogPostCard'
import TagSlider from '@/components/tagSlider/TagSlider'
import BlogPostOwner from '@/components/BlogPost/blogPostOwner/BlogPostOwner'
import Profil from '@/components/profil/Profil'
import TipTap from '@/components/writingtiptap/WritingTipTap'
import Followers from '@/components/followers/Followers'
import Following from '@/components/following/Following'
import LatestPosts from '@/components/latestPosts/LatestPosts'
import RecommendTopics from '@/components/recommentTopics/RecommendTopics'
import BlogPostMain from '@/components/blogPostMain/BlogPostMain'

import BlogPostIPFS from '@/components/blogPostIPFS/BlogPostIPFS'
// import IPFStoText from '@/components/blogPostIPFS/IPFStoText';
// import RemoveIMG from '@/components/blogPostIPFS/RemoveIMG';

import IPFStoGetIMG from '@/components/blogPostIPFS/IPFStoGetIMG';
import IPFSTitleText from '@/components/blogPostIPFS/IPFSContent';

// @@@  IMPORTING PAGES  @@@ 
import Home from './Home';
import Writing from '../pages/Writing';
import Profile from '../pages/Profile';
import PostDetail from '../pages/PostDetail';
import Account from './Account';
import EditProfile from '@/components/editProfile/EditProfile';

const index = () => {
  return (
    <div>
      {/* @@@........ NAVBAR ............@@@ */}

      {/* <MainNavbar/> */}
      {/* <WritingNavbar/> */}
      {/* <LoginPageNavbar/> Çook eksikler var  */}

      {/* @@@........ BLOG POST ............@@@ */}

      {/* <BlogPostCard/> */}
      {/* <BlogPostOwner/> */}

      {/* @@@........ OTHER COMPONENTS ............@@@ */}
      {/* <Profile/> */}
       {/* <TipTap/> */}
      {/* <TagSlider/> */}
      {/* <Followers/> */}
      {/* <Following/> */}
      {/* <LatestPosts/> */}
      {/* <RecommendTopics/> */}
      {/* <BlogPostMain/> */}

      {/* <BlogPostIPFS/> */}
      {/* <BlogPostMain/> */}
      {/* <RemoveIMG/> */}
      {/* <IPFStoGetIMG/> */}
      {/* <IPFSTitleText/> */}

      {/* <EditProfile/> */}

      {/* @@@........ PAGES ............@@@ */}
      {/* <Home/> */}
      {/* <Writing/> */}
      {/* <Profile/> */}
      {/* <PostDetail/> */}

      {/* <Account/> */}
    </div>
  )
}

export default index

