import React, { useEffect } from 'react'
import styles from './Stories.module.css';
import toolTipStyles from '@/components/common/toolTip/ToolTipStories.module.css';

import useBlockBlogFunctions from '@/hooks/useBlockBlogFunctions';
import useWallet from '@/hooks/useWallet';
import IPFSTitle from '../blogPostIPFS/IPFSTitle';
import IPFSContent from '../blogPostIPFS/IPFSContent';
import TruncateText from '../blogPostIPFS/TruncateText';
import Link from 'next/link';
import axios from 'axios';

const Stories = () => {
    const { likeBlogPost, deleteBlogPost, updateListingStatus, updateReadingList, getUserProfileUri, profileUri, getAllPosts, allBlogPosts } = useBlockBlogFunctions();

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
            getAllPosts();
        }
    }, [wallet.address])

    return (
        <div>
            <div className={styles['banner-container']}>
                <div className={styles['banner-title']}>Your Stories</div>
            </div>
            {allBlogPosts?.map((post) => (
                post.postId != 0 && post.owner.toLowerCase() == wallet.address.toLowerCase() ? (
                    <div>
                        <div className={styles['stories-container']}>
                            <div className={styles['stories-title']}><IPFSTitle ipfsUri={post.post_uri} /></div>
                            <div className={styles['stories-content']}><IPFSContent ipfsUri={post.post_uri} /></div>
                            <div className={styles['stories-button-container']}>

                                <div className={toolTipStyles.tooltip}>
                                    <img src='/images/edit.png' className={styles['stories-button-deleteEdit']} />
                                    <span className={toolTipStyles['tooltiptext']}>Edit</span>
                                </div>

                                <div className={toolTipStyles.tooltip}>
                                    <img src='/images/delete.png' className={styles['stories-button-deleteEdit']} onClick={() => deleteBlogPost(post.postId)} />
                                    <span className={toolTipStyles['tooltiptext']}>Delete</span>
                                </div>
                                {!post.isActive ? (
                                    <div className={toolTipStyles.tooltip}>
                                        <img src='/images/active.png' className={styles['stories-button-activePassive']} onClick={() => updateListingStatus(post.postId)} />
                                        <span className={toolTipStyles['tooltiptext']}>Public</span>
                                    </div>
                                ) : (
                                    <div className={toolTipStyles.tooltip}>
                                        < img src='/images/passive.png' className={styles['stories-button-activePassive']} onClick={() => updateListingStatus(post.postId)} />
                                        <span className={toolTipStyles['tooltiptext']}>Private</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div >
                ) : null
            ))}
        </div>
    )
}

export default Stories
