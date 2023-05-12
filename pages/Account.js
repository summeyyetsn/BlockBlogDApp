import React from 'react'
import MainNavbar from '../components/Navbar/mainNavbar/MainNavbar';
import BlogPostCard from '../components/BlogPost/blogPostCard/BlogPostCard';
import BlogPostProfile from '@/components/BlogPost/blogPostCard/BlogPostProfile';
import ProfilAccount from '../components/profilAccount/ProfilAccount';
import Followers from '../components/followers/Followers';
import Following from '../components/following/Following';
import styles from "../styles/Account.module.css"
import AccountPostList from '@/components/accountPostList/AccountPostList';
import AccountBanner from '@/components/accountBanner/AccountBanner';
import EditProfile from '@/components/editProfile/EditProfile';


const Account = () => {
  return (
    <div>
        <div className={styles["container"]}>
            <header className={`${styles["navbar"]} ${styles["profilePage-top"]}`}>
                <MainNavbar/>
            </header>
            <div className={styles["content"]}>
            <main className={`${styles["main-content"]} ${styles["profilePage-right"]}`}>
                {/* <AccountBanner/>
                <AccountPostList/> */}

                <EditProfile/>
            </main>
                <aside className={`${styles["sidebar"]} ${styles["profilePage-left"]}`}>
                    <ProfilAccount/>
                    <Following/>
                    {/* <Followers/> */}
                </aside>
        </div>
    </div>
</div>
  )
}

export default Account
