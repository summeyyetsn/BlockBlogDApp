import React from 'react'
import styles from './LatestPosts.module.css';
const LatestPost = () => {
  return (
    <div>
        
        <div className={styles["latest-post-right-div"]}>
            <div className={styles["div-lct-save"]}>
                <span className={styles['recently-saved-text']}>Latest Posts</span>
            </div>

            <div className={styles["div-lct"]}>
              <div className={styles['recently-saved-bottom']}>
                <div className={styles['profil-img']}></div>
                <span className={styles["text-ns"]}>Jhonny Bravo</span>
              </div>
                <span className={styles["text-contents"]}>I did 100 days of code, and this is what I learned </span>
                <p className={styles["datetime-text"]}>Oct 25, 2022 </p>
            </div>

            <div className={styles["div-lct"]}>
              <div className={styles['recently-saved-bottom']}>
                <div className={styles['profil-img']}></div>
                <span className={styles["text-ns"]}>Jhonny Bravo</span>
              </div>
                <span className={styles["text-contents"]}>10 Ways I Stay Consistent and Motivated</span>
                <p className={styles["datetime-text"]}>Apr 7, 2023 </p>
            </div>

            <div className={styles["div-lct"]}>
              <div className={styles['recently-saved-bottom']}>
                <div className={styles['profil-img']}></div>
                <span className={styles["text-ns"]}>Jhonny Bravo</span>
              </div>
                <span className={styles["text-contents"]}>Believe you are the type of person who is consistent </span>
                <p className={styles["datetime-text"]}>Fev 25, 2023 </p>
            </div>
            
            <button className={styles["button-see"]}>See all(52)</button>
        </div>
    </div>
  )
}

export default LatestPost
