import React, { useState, useEffect } from 'react';
import styles from './BlogPostOwner.module.css';
import toolTipStyles from '../../common/toolTip/ToolTip.module.css';
import { SlSocialFacebook, SlSocialLinkedin, SlSocialTwitter, SlSocialYoutube, SlSocialSpotify } from 'react-icons/sl';
import { BsBookmark,BsHeart } from 'react-icons/bs'
import useBlockBlogFunctions from '@/hooks/useBlockBlogFunctions';
import useWallet from '@/hooks/useWallet';
import axios from 'axios';
import Link from 'next/link';


const BlogPostOwner = () => {
  const { getUserProfileUri, profileUri } = useBlockBlogFunctions();

  const [profileImgUri, setProfileImgUri] = useState('');
  const [userName, setUserName] = useState('');
  const [facebook, setFacebook] = useState('');
  const [twitter, setTwitter] = useState('');
  const [youtube, setYoutube] = useState('');
  const [linkedin, setLinkedin] = useState('');

  const { wallet } = useWallet();
  useEffect(() => {
    if (wallet.address && ! profileUri) {
      getUserProfileUri(wallet.address);
    }
    
    if(profileUri){
    axios.get(profileUri)
      .then(response => {
        setProfileImgUri(response.data.profilPictureIPFS);
        setUserName(response.data.name);
        setFacebook(response.data.facebook);
        setTwitter(response.data.twitter);
        setYoutube(response.data.youtube);
        setLinkedin(response.data.linkedin);
      })
      .catch(error => {
        console.log(error);
      });
    }
  }, [wallet.address,profileUri]);

  

  const handleClickf = (e) => {
    e.preventDefault();
    window.open(facebook, "_blank");
  };
  const handleClicky = (e) => {
    e.preventDefault();
    window.open(youtube, "_blank");
  };
  const handleClickl = (e) => {
    e.preventDefault();
    window.open(linkedin, "_blank");
  };
  const handleClickt = (e) => {
    e.preventDefault();
    window.open(twitter, "_blank");
  };

  return (
    <div>
      <div className={styles['blog-post-owner-container']}>
        <div className={styles['bpo-left']}>
          <img src={profileImgUri}  className={styles['bpo-left-profile-img']}/> 
          <div class={styles["bpo-left-content"]}>
            <div class={styles["bpo-left-content-username"]}>{userName}</div>
            <div class={styles["bpo-left-content-info"]}>
              <div class={styles["bpo-left-content-date"]}>Jan 9</div>
              <div class={styles["bpo-left-content-readingtime"]}>5 min read</div>
            </div>
          </div>
        </div>

        <div className={styles['bpo-right']}>
          <div className={styles['bpo-right-social-media']}>

            <div className={`${styles['bpo-social-icons']} ${toolTipStyles.tooltip}`}>

              <SlSocialFacebook onClick={handleClickf} />

              <span className={toolTipStyles['tooltiptext']}>Contact via Facebook</span>
            </div>

            <div className={`${styles['bpo-social-icons']} ${toolTipStyles.tooltip}`}>

              <SlSocialTwitter onClick={handleClickt} />

              <span className={toolTipStyles['tooltiptext']}>Contact via Twitter</span>
            </div>

            <div className={`${styles['bpo-social-icons']} ${toolTipStyles.tooltip}`}>

              <SlSocialYoutube onClick={handleClicky} />

              <span className={toolTipStyles['tooltiptext']}>Contact via Youtube</span>
            </div>

            <div className={`${styles['bpo-social-icons']} ${toolTipStyles.tooltip}`}>
              <SlSocialLinkedin onClick={handleClickl} />
              <span className={toolTipStyles['tooltiptext']}>Contact via Linkedin</span>
            </div>

          </div>

          <div className={styles['bpo-right-addList']}>
            
            <div className={`${styles['bpo-social-icons']} ${toolTipStyles.tooltip}`}>
              <BsHeart />
              <span className={toolTipStyles['tooltiptext']}>Like</span>
            </div>
            <div className={`${styles['bpo-social-icons']} ${toolTipStyles.tooltip}`}>
              <BsBookmark />
              <span className={toolTipStyles['tooltiptext']}>Add List</span>
            </div>
          </div>
        </div>



      </div>
    </div>
  )
}

export default BlogPostOwner
