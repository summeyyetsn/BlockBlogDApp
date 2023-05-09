// @@@@      COMPONENT IMPORTING           @@@@
import React, {useState} from 'react';
import MainNavbar from "../components/Navbar/mainNavbar/MainNavbar"
import Profile from '../components/profil/Profil';
import BlogPostCard from '../components/BlogPost/blogPostCard/BlogPostCard';
import BlogPostOwner from '../components/BlogPost/blogPostOwner/BlogPostOwner';
import BlogPostMain from '@/components/blogPostMain/BlogPostMain';
import styles from "../styles/PostDetail.module.css"
import LatestPost from '../components/latestPosts/LatestPosts';
// @@@@           ICON IMPORTING           @@@@
import {BsBookmarkStar,BsBookmarkStarFill,BsFillHeartFill,BsHeart} from 'react-icons/bs';

const PostDetail = ({ ipfsUri }) => {

  return (
    <div>
        <div>
            <div class="blog-post-main-container">
                <header class={`${styles["bpm-navbar"]} ${styles["bpm-top"]} `}>
                    <MainNavbar/>
                </header>
                <div class={styles["bpm-content"]}>
                    <main class={`${styles["bpm-main-content"]} ${styles["bpm-right"]}`}>
                        <BlogPostOwner/>
                        {/* <BlogPostCard/> */}
                        <BlogPostMain ipfsUri={ipfsUri}/>
                    </main>
                    <aside className={`${styles["bpm-sidebar"]} ${styles["bpm-left"]}`}>
                        <Profile/>
                        <LatestPost/>
                    </aside>
                </div>
            </div>
        </div>
    </div>
  )
}
PostDetail.getInitialProps = ({ query }) => {
    const { ipfsUri } = query;
    return { ipfsUri };
  };
export default PostDetail
