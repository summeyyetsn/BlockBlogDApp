import React from 'react'
import MainNavbar from '../components/Navbar/mainNavbar/MainNavbar';
import BlogPostCard from '../components/BlogPost/blogPostCard/BlogPostCard';
import BlogPostProfile from '@/components/BlogPost/blogPostCard/BlogPostProfile';
import ProfilAccount from '../components/profilAccount/ProfilAccount';
import Followers from '../components/followers/Followers';
import Following from '../components/following/Following';
import styles from "../styles/Profile.module.css"


const Account = () => {
  return (
    <div>
        <div className={styles["container"]}>
            <header className={`${styles["navbar"]} ${styles["profilePage-top"]}`}>
                <MainNavbar/>
            </header>
            <div className={styles["content"]}>
            <main className={`${styles["main-content"]} ${styles["profilePage-right"]}`}>
                <BlogPostCard/>
                {/* <BlogPostProfile/> */}
            </main>
                <aside className={`${styles["sidebar"]} ${styles["profilePage-left"]}`}>
                    <ProfilAccount/>
                    {/* <Following/>
                    <Followers/> */}
                </aside>
        </div>
    </div>
</div>
  )
}

export default Account
