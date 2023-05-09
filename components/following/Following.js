import React from 'react'
import styles from './Following.module.css';
const Following = () => {
  return (
    <div>
      <div className={styles['following-side-container']}>
            <span className={styles['following-title-text']}>Following</span>
            <div className={styles['following-container']}>

              <div className={styles['following-line']}>
                <div className={styles['following-user-profil-img']}></div>
                <span className={styles['following-user-name']}>Bugs Bunny</span>
              </div>

              <div className={styles['following-line']}>
              <div className={styles['following-user-profil-img']}></div>
                <span className={styles['following-user-name']}>Johnny Bravo</span>
              </div>

              <div className={styles['following-line']}>
              <div className={styles['following-user-profil-img']}></div>
                <span className={styles['following-user-name']}>Mrs Bean</span>
              </div>

              <div className={styles['following-line']}>
              <div className={styles['following-user-profil-img']}></div>
                <span className={styles['following-user-name']}>Sheap Shaun</span>
              </div>

              <div className={styles['following-line']}>
              <div className={styles['following-user-profil-img']}></div>
                <span className={styles['following-user-name']}>The Farmer</span>
              </div>

              
            </div>
            <span className={styles['following-see-all']}>See all (28)</span>
          </div>
    </div>
  )
}

export default Following
