// @@@@      COMPONENT IMPORTING           @@@@
import React, { useState } from 'react';
import MainNavbar from "../components/Navbar/mainNavbar/MainNavbar"
import Profile from '../components/profil/Profil';
import BlogPostCard from '../components/BlogPost/blogPostCard/BlogPostCard';
import BlogPostOwner from '../components/BlogPost/blogPostOwner/BlogPostOwner';
import BlogPostMain from '@/components/blogPostMain/BlogPostMain';
import styles from "../styles/PostDetail.module.css"
import LatestPost from '../components/latestPosts/LatestPosts';
// @@@@           ICON IMPORTING           @@@@
import { BsBookmarkStar, BsBookmarkStarFill, BsFillHeartFill, BsHeart } from 'react-icons/bs';
import { useRouter } from 'next/router';
const PostDetail = () => {
    const router = useRouter();
    const postUri = router.query.ipfsUri;
    const userName = router.query.userName;
    const bio = router.query.bio;
    const profileImgUri = router.query.profileImgUri;
    const facebook = router.query.facebook;
    const twitter = router.query.twitter;
    const youtube = router.query.youtube;
    const linkedin = router.query.linkedin;

    return (
        <div>
            <div class="blog-post-main-container">
                <header class={`${styles["bpm-navbar"]} ${styles["bpm-top"]} `}>
                    <MainNavbar />
                </header>
                <div class={styles["bpm-content"]}>
                    <main class={`${styles["bpm-main-content"]} ${styles["bpm-right"]}`}>
                        <BlogPostOwner
                            userName={userName}
                            profileImgUri={profileImgUri}
                            facebook={facebook}
                            twitter={twitter}
                            youtube={youtube}
                            linkedin={linkedin} />
                        <BlogPostMain ipfsUri={postUri} />
                    </main>
                    <aside className={`${styles["bpm-sidebar"]} ${styles["bpm-left"]}`}>
                        <Profile userName={userName} bio={bio} profileImgUri={profileImgUri} />

                        <LatestPost />
                    </aside>
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
