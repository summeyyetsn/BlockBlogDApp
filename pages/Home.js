import React, {useState} from 'react';
import MainNavbar from '../components/Navbar/mainNavbar/MainNavbar';
import BlogPostCard from '../components/BlogPost/blogPostCard/BlogPostCard';
import BlogPostOwner from '../components/BlogPost/blogPostOwner/BlogPostOwner';
import LatestPosts from '../components/latestPosts/LatestPosts';
import RecommendTopics from '../components/recommentTopics/RecommendTopics';
import TagSlider from '@/components/tagSlider/TagSlider';
import styles from '../styles/Home.module.css'

import BlogPostIPFS from '@/components/blogPostIPFS/BlogPostIPFS';

const Home = () => {
  return (
    <div>
        <div className={styles["blog-post-main-container"]}>
            <header className={`${styles["bpm-navbar"]} ${styles["bpm-top"]}`}>
                <MainNavbar/>
            </header>
            <div className={styles["bpm-content"]}>
                <main className={`${styles["bpm-main-content"]} ${styles["bpm-right"]}`}>
                    {/* <BlogPostOwner/> */}
                    <TagSlider/>
                    {/* <BlogPostCard/>
                    <BlogPostCard/>
                    <BlogPostCard/>
                    <BlogPostCard/> */}
                    <BlogPostIPFS/>
                </main>
                <aside className={`${styles["bpm-sidebar"]} ${styles["bpm-left"]}`}>
                    <LatestPosts/>
                    <RecommendTopics/>
                </aside>
            </div>
        </div>
    </div>
  )
}

export default Home
