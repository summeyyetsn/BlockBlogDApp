import React, { useEffect, useState } from 'react'
import styles from './Profil.module.css';
import { TbCoffee } from 'react-icons/tb';
import Link from 'next/link';
import useBlockBlogFunctions from '@/hooks/useBlockBlogFunctions';
import useWallet from '@/hooks/useWallet';
import axios from 'axios';

const Profil = ({ userName, bio, profileImgUri}) => {

  const { getUserProfileUri, profileUri} = useBlockBlogFunctions();

  const { wallet } = useWallet();

  return (
    <div>
      <div className={styles["profile-right-div"]}>
        <div className={styles['profil-side']}>
          <Link href="/Profile">
            <img src={profileImgUri} alt='profil-photo' className={styles['prf-img']} />
          </Link>
          <span className={styles["text-profil"]}>{userName}</span>
          <div className={styles["span-follow"]}> <span>84.2K Followers</span>  </div>
          <p className={styles["text-explanation"]}>{bio} </p>
          <button className={styles["button-follow"]}>Follow</button>
          <button className={styles["button-order-cofee"]}>Order Coffe  <TbCoffee /></button>
        </div>
      </div>
    </div>

  )
}

export default Profil
