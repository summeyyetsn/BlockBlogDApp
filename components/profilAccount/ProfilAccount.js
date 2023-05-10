import React from 'react'
import styles from './ProfilAccount.module.css';
import {TbCoffee} from 'react-icons/tb';
import Link from 'next/link';

const ProfilAccount = () => {
  return (
    <div>
        <div className={styles["profile-right-div"]}>
          <div className={styles['profil-side']}>
            <Link href="/Profile">
              <img src='/images/profil.jpg' alt='profil-photo' className={styles['prf-img']} />
            </Link> 
            {/* <div className={styles['prf-img']}></div> */}

            <span className={styles["text-profil"]}>Jhonny Bravo</span>
            <div className={styles["span-follow"]}> <span>84.2K Followers</span>  </div>
            <p className={styles["edit-profile"]}>Edit Profile </p>
            
             
          </div>
        </div>
    </div>
    
  )
}

export default ProfilAccount
