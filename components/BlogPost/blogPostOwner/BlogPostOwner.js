import React from 'react';
import styles from './BlogPostOwner.module.css';
import toolTipStyles from'../../common/toolTip/ToolTip.module.css';
import {SlSocialFacebook,SlSocialLinkedin,SlSocialTwitter,SlSocialYoutube,SlSocialSpotify} from 'react-icons/sl';
import {BsBookmark,BsBookmarkFill} from 'react-icons/bs'

const BlogPostOwner = () => {
  return (
    <div>
      <div className={styles['blog-post-owner-container']}>
        <div className={styles['bpo-left']}>
            <div className={styles['bpo-left-profile-img']}> </div>
            <div class={styles["bpo-left-content"]}>
            <div class={styles["bpo-left-content-username"]}>Jhonny Bravo</div>
            <div class={styles["bpo-left-content-info"]}>
                <div class={styles["bpo-left-content-date"]}>Jan 9</div>
                <div class={styles["bpo-left-content-readingtime"]}>5 min read</div>
            </div>
            </div>
        </div>

        <div className={styles['bpo-right']}>
            <div className={styles['bpo-right-social-media']}>

            <div className={`${styles['bpo-social-icons']} ${toolTipStyles.tooltip}`}>
                  <SlSocialFacebook/>
                  <span className={toolTipStyles['tooltiptext']}>Contact via Facebook</span>
                </div>

                <div className={`${styles['bpo-social-icons']} ${toolTipStyles.tooltip}`}>
                  <SlSocialTwitter/>
                  <span className={toolTipStyles['tooltiptext']}>Contact via Twitter</span>
                </div>

                <div className={`${styles['bpo-social-icons']} ${toolTipStyles.tooltip}`}>
                  <SlSocialYoutube/>
                  <span className={toolTipStyles['tooltiptext']}>Contact via Youtube</span>
                </div>

                <div className={`${styles['bpo-social-icons']} ${toolTipStyles.tooltip}`}>
                  <SlSocialSpotify/>
                  <span className={toolTipStyles['tooltiptext']}>Contact via Spotify</span>
                </div>

                <div className={`${styles['bpo-social-icons']} ${toolTipStyles.tooltip}`}>
                  <SlSocialLinkedin/>
                  <span className={toolTipStyles['tooltiptext']}>Contact via Linkedin</span>
                </div>

            </div>

            <div className={styles['bpo-right-addList']}>
              <div className={`${styles['bpo-social-icons']} ${toolTipStyles.tooltip}`}>
                <BsBookmark/>
                <span className={toolTipStyles['tooltiptext']}>Add List</span>
              </div>
            </div>
        </div>
        

        
      </div>
    </div>
  )
}

export default BlogPostOwner
