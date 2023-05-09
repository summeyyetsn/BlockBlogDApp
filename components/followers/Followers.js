import React from 'react'
import styles from './Followers.module.css';
const Followers = () => {
  return (
    <div>
      <div className={styles['follower-side-container']}>
            <span className={styles['follower-title-text']}>Followers</span>
            <div className={styles['follower-container']}>

              <div className={styles['follower-line']}>
                <div className={styles['follower-user-profil-img']}></div>
                <span className={styles['follower-user-name']}>Bugs Bunny</span>
                <span className={styles['follower-line-follow-button']}>Follow</span>
              </div>

              <div className={styles['follower-line']}>
              <div className={styles['follower-user-profil-img']}></div>
                <span className={styles['follower-user-name']}>Johnny Bravo</span>
                <span className={styles['follower-line-following-button']}>Following</span>
              </div>

              <div className={styles['follower-line']}>
              <div className={styles['follower-user-profil-img']}></div>
                <span className={styles['follower-user-name']}>Mrs Bean</span>
                <span className={styles['follower-line-following-button']}>Following</span>
              </div>

              <div className={styles['follower-line']}>
              <div className={styles['follower-user-profil-img']}></div>
                <span className={styles['follower-user-name']}>Sheap Shaun</span>
                <span className={styles['follower-line-follow-button']}>Follow</span>
              </div>

              <div className={styles['follower-line']}>
              <div className={styles['follower-user-profil-img']}></div>
                <span className={styles['follower-user-name']}>The Farmer</span>
                <span className={styles['follower-line-follow-button']}>Follow</span>
              </div>

              
            </div>
            <span className={styles['follower-see-all']}>See all (28)</span>
          </div>
    </div>
  )
}

export default Followers
