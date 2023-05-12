import styles from './BlogPostIPFS.module.css';
import React, { useEffect, useState } from 'react';
import { BsBookmarkStar, BsBookmarkStarFill, BsThreeDots, BsFillHeartFill, BsHeart } from 'react-icons/bs';
import { BsDot } from 'react-icons/bs';
import toolTipStyles from '../common/toolTip/ToolTip.module.css'
import useBlockBlogFunctions from '@/hooks/useBlockBlogFunctions';
import useWallet from '@/hooks/useWallet';
import IPFStoGetIMG from './IPFStoGetIMG';
import IPFSTitle from './IPFSTitle';
import IPFSContent from './IPFSContent';
import TruncateText from "./TruncateText";
import Link from 'next/link';
import axios from 'axios';

const BlogPostCard = () => {
  
  const [profileImgUri, setProfileImgUri] = useState('');
  const [userName, setUserName] = useState('');
  
  const OwnerNameMax = 25;
  const { getAllActivePosts, blogPosts, likeBlogPost, deleteBlogPost, updateListingStatus, updateReadingList,getUserProfileUri, profileUri } = useBlockBlogFunctions();

  const { wallet } = useWallet();

  const unixToDateString = (unixTimestamp) => {
    const date = new Date(unixTimestamp * 1000);
    const months = [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
    const month = months[date.getMonth()];
    const day = date.getDate();
    const year = date.getFullYear();
    return `${month} ${day} ${year}`;
  };

  useEffect(() => {

    wallet.connect();
    if (wallet.address) {
      getAllActivePosts();
    }

    if (wallet.address && ! profileUri) {
      getUserProfileUri(wallet.address);
    }
    if(profileUri){
      axios.get(profileUri)
      .then(response => {
        setUserName(response.data.name);
        setProfileImgUri(response.data.profilPictureIPFS);
      })
      .catch(error => {
        console.log(error);
      });

    }
  }, [wallet.address,profileUri])

  return (
    <div >
      {blogPosts?.map((post) => (
        post.postId != 0 ? (
          <div key={post.postId} className={styles['blog-card-frame']}>
            <div className={styles["blogCardContainer"]}>
              <div className={styles["left-div-left"]}>
                <div className={styles['blog-card-top']}>
                  <img src={profileImgUri} className={styles['profile-photo']}/>
                  <div className={styles['blog-card-top-center']}>
                    <span className={styles['user-name']}>
                      <TruncateText text={userName} maxLength={OwnerNameMax} />
                    </span>
                    <span className={styles['dot']}><BsDot /></span>
                    <span className={styles["date"]}> {unixToDateString(post.createAt)} </span>
                  </div>
                </div>
                <Link className={styles['link-style']}
                  href={{
                    pathname: '/PostDetail',
                    query: { 
                      ipfsUri: post.post_uri
                    },
                  }}>
                  <div className={styles["title-content-container"]}>
                    <span className={styles["title"]}>
                      <IPFSTitle ipfsUri={post.post_uri}  />
                    </span>
                    <span className={styles["text-exp"]}>
                      <IPFSContent ipfsUri={post.post_uri}  />
                    </span>
                  </div>
                </Link>
                <div className={styles["post-lw"]}>
                  <div className={styles['post-lw-left']}>
                    <button className={styles["eng-button"]}>English Learning</button>
                    <button className={styles["eng-button"]}>New Language</button>
                  </div>
                  <div className={styles['icons-container']}>

                    <div>
                      <div className={styles["icons"]}>
                        <div className={toolTipStyles['tooltip']}>
                          <div onClick={() => likeBlogPost(post.postId)}>
                            <div className={styles['like-container']}>
                              <BsHeart className={styles['BsHeart']} />
                              {post.likes.toNumber()}
                            </div>
                          </div>
                          <span className={toolTipStyles['tooltiptext']}>Like</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className={styles["icons"]}>
                        <div className={toolTipStyles['tooltip']}>
                          <div onClick={() => updateReadingList(post.postId)} >
                            <BsBookmarkStar />
                          </div>
                          <span className={toolTipStyles['tooltiptext']}>Add List</span>
                        </div>
                      </div>
                    </div>
                    <a href="">
                      <div className={styles['icons']}><BsThreeDots /></div>
                    </a>
                  </div>
                </div>
              </div>
              <div className={styles["left-div-right"]}>
                <div className={styles['left-div-right-center']}>
                  <div className={styles['right-image']}>
                    <IPFStoGetIMG ipfsUri={post.post_uri} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : null
      ))}
      {/* {<table>
        <thead>
          <tr>
            <th>  Post Id</th>
            <th>  Owner</th>
            <th>  İsActive</th>
            <th>  CreateAt</th>
            <th>  Real Date</th>
            <th>  Likes</th>
            <th>  Post URI</th>
          </tr>
        </thead>
        <tbody>
          {blogPosts?.map((post, i) => (
            post.postId != 0 ? (
              <tr key={post.postId}>
                <td>{post.postId.toNumber()}</td>
                <td>{post.owner}</td>
                <td>{post.isActive.toString()}</td>
                <td>{post.createAt.toNumber()}</td>
                <td>{unixToDateString(post.createAt)}</td>
                <td>{post.likes.toNumber()}</td>
                <td>{post.post_uri}</td>
                <button onClick={() => likeBlogPost(post.postId)}>Like</button>
                <button onClick={() => deleteBlogPost(post.postId)}>X</button>
                <button onClick={() => updateListingStatus(post.postId)}> Active Status </button>
                <button onClick={() => updateReadingList(post.postId)} >Add List</button>
                <IPFStoGetIMG ipfsUri={post.post_uri} />

              </tr>
            ) : null
          ))}

        </tbody>
      </table>} */}
    </div>


  )
}

export default BlogPostCard
