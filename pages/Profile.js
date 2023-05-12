import React from 'react'
import MainNavbar from '../components/Navbar/mainNavbar/MainNavbar';
import BlogPostCard from '../components/BlogPost/blogPostCard/BlogPostCard';
import BlogPostProfile from '@/components/BlogPost/blogPostCard/BlogPostProfile';
import Profil from '../components/profil/Profil';
import Followers from '../components/followers/Followers';
import Following from '../components/following/Following';
import styles from "../styles/Profile.module.css"


const Profile = () => {
  return (
    <div>
        <div className={styles["container"]}>
            <header className={`${styles["navbar"]} ${styles["profilePage-top"]}`}>
                <MainNavbar/>
            </header>
            <div className={styles["content"]}>
            <main className={`${styles["main-content"]} ${styles["profilePage-right"]}`}>
                {/* <BlogPostCard/> */}
                <BlogPostProfile/>
            </main>
                <aside className={`${styles["sidebar"]} ${styles["profilePage-left"]}`}>
                    <Profil/>
                    <Following/>
                    <Followers/>
                </aside>
        </div>
    </div>
</div>
  )
}

export default Profile
