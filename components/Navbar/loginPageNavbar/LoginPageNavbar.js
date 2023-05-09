import React, { useEffect, useState } from "react";
import styles from './LoginPageNavbar.module.css'


const LoginPageNavbar = () => {

    const [isNavbarActive, setIsNavbarActive] = useState(false);
        useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const threeQuarterHeight = (window.innerHeight * 70) / 100; // Yüzde 75 oranında yükseklik
            setIsNavbarActive(scrollPosition >= threeQuarterHeight);
        };
    
        window.addEventListener("scroll", handleScroll);
    
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
        }, []);
  return (
    <div>
        <div className={`${styles.navbar} ${isNavbarActive ? styles.active : ""}`}>

            <div className={styles['login-page-navbar-container']}>

                <div className={styles['login-page-navbar-left']}>
                    <div className={styles['login-page-navbar-logo']}></div>
                </div>

                <div className={styles['login-page-navbar-right']}>
                <div className={`${styles['login-page-navbar-right-ourStory']} ${styles['gnr-text']}`}>Our story</div>
                <div className={`${styles['login-page-navbar-right-signIn']} ${styles['gnr-text']}`}>Sign In</div>
                <div className={`${styles['login-page-navbar-right-getStarted']} ${styles['gnr-text']}`}>Get Started</div>

                </div>
            </div>
        </div>
        <div className={styles["doldur"]}>
            <div className={styles["colorful-part"]}>
                <h1>Hello World</h1>
            </div>
            <div><h1>HelloWorld</h1></div>
            <div><h1>HelloWorld</h1></div>
            <div><h1>HelloWorld</h1></div>
            <div><h1>HelloWorld</h1></div>
            <div><h1>HelloWorld</h1></div>
            <div><h1>HelloWorld</h1></div>
            <div><h1>HelloWorld</h1></div>
            <div><h1>HelloWorld</h1></div>
            <div><h1>HelloWorld</h1></div>
            <div><h1>HelloWorld</h1></div>
            <div><h1>HelloWorld</h1></div>
            <div><h1>HelloWorld</h1></div>
            <div><h1>HelloWorld</h1></div>
            <div><h1>HelloWorld</h1></div>
            <div><h1>HelloWorld</h1></div>
            <div><h1>HelloWorld</h1></div>
            <div><h1>HelloWorld</h1></div>
            <div><h1>HelloWorld</h1></div>
            <div><h1>HelloWorld</h1></div>
            <div><h1>HelloWorld</h1></div>
            <div><h1>HelloWorld</h1></div>
            <div><h1>HelloWorld</h1></div>
            <div><h1>HelloWorld</h1></div>
            <div><h1>HelloWorld</h1></div>
            <div><h1>HelloWorld</h1></div>
            <div><h1>HelloWorld</h1></div>
            <div><h1>HelloWorld</h1></div>
            <div><h1>HelloWorld</h1></div>
            <div><h1>HelloWorld</h1></div>
            <div><h1>HelloWorld</h1></div>
            <div><h1>HelloWorld</h1></div>
            <div><h1>HelloWorld</h1></div>
        </div>
    </div>
  )
}

export default LoginPageNavbar
