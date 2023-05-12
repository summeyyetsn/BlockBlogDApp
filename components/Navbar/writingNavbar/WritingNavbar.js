import React, { useState, useEffect } from 'react'
import styles from './WritingNavbar.module.css';
import { SlArrowDown } from 'react-icons/sl';
import { TbDots } from 'react-icons/tb';

import axios from 'axios';
import useWallet from '@/hooks/useWallet';
import Link from 'next/link';
import useBlockBlogFunctions from '@/hooks/useBlockBlogFunctions';



export default function WritingNavbar(props) {

  const [blogPostURL, setBlogPostURL] = useState("");

  const { createBlogPost } = useBlockBlogFunctions();

  const { wallet } = useWallet();

  useEffect(() => {
    wallet.connect();
  }, [])


  const { desc } = props;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (desc) {
      const blob = new Blob([desc], { type: 'text/html' });

      const reader = new FileReader();
      reader.readAsDataURL(blob);
      reader.onload = async () => {
        const postContent = reader.result;
        const uploadArray = [
          {
            path: `blogpost.txt`,
            content: postContent,
          },
        ];
        try {
          const response = await axios({
            method: "POST",
            url: "/api/upload/blogpost",
            data: uploadArray,
            headers: {
              'Content-Type': 'application/json',
            }
          });
          
         
          createBlogPost(response.data[0].path);
          

        } catch (error) {
          console.log(error);
        }
      };
    }
    
      
      
    

    console.log("Press the button")
  };

  // const handleChange = (e) => {
  //   e.preventDefault();

  //   if (desc) {
  //     const blob = new Blob([desc], { type: 'text/html' });

  //     const reader = new FileReader();
  //     reader.readAsDataURL(blob);
  //     reader.onload = async () => {
  //       const postContent = reader.result;
  //       const uploadArray = [
  //         {
  //           path: `blogpost.txt`,
  //           content: postContent,
  //         },
  //       ];


  //       try {
  //         const response = await axios({
  //           method: "POST",
  //           url: "/api/upload/blogpost",
  //           data: uploadArray,
  //           headers: {
  //             'Content-Type': 'application/json',
  //           }
  //         });
  //         console.log(response.data[0].path);
  //         setBlogPostURL(response.data[0].path);

  //         handleSubmit(e);

  //       } catch (error) {
  //         console.log(error);
  //       }
  //     };
  //   }
  // };

  return (
    <div>

      <div className={styles["header-div-writing-page"]}>
        <div className={styles["header-left-writing-page"]}>
          <Link href="/">
            <img src='/images/logoBlack.png' alt='logo' className={styles["logo-img-writing-page"]} />
          </Link>
        </div>
        <div className={styles["header-right-writing-page"]}>
          <form onSubmit={handleSubmit}>
            <button type="submit" className={styles["publish-button-writing-page"]}>
              Publish
            </button>
          </form>
          {/* <span onClick={downloadTxtFile} className={styles['publish-button-writing-page']}>Publish</span> */}
          <div className={styles["dib"]}>
            <div className={styles["three-dot-writing-page"]}>
              <TbDots />
            </div>
          </div>
          <div className={styles["div-notification-writing-page"]}>
            <a href="" className={styles["href-design-writing-page"]}>
              <div className={styles["notification-icon-writing-page"]}></div>
            </a>
          </div>

          <div className={styles["profil-img-side-writing-page"]}>
            <div className={styles["profil-button-writing-page"]}></div>
            <SlArrowDown
              className={styles["profile-arrow-down-writing-page"]}
            />
          </div>
        </div>
      </div>

    </div>
  );
}
