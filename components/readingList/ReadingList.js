import React from 'react'
import styles from './ReadingList.module.css'
import toolTipStyles from '@/components/common/toolTip/ToolTipStories.module.css';
import { BsBookmarkStar, BsBookmarkStarFill, BsThreeDots, BsFillHeartFill, BsHeart } from 'react-icons/bs';
import { HiStar } from 'react-icons/hi';
import { BsDot } from 'react-icons/bs';
const ReadingList = () => {
    return (
        <div>
            <div className={styles['banner-container']}>
                <div className={styles['banner-title']}>Reading List</div>
            </div>
            <div >
                <div className={styles['blog-card-frame']}>
                    <div className={styles["blogCardContainer"]}>
                        <div className={styles["left-div-left"]}>
                            <div className={styles['blog-card-top']}>
                                <div className={styles['profile-photo']}></div>
                                <div className={styles['blog-card-top-center']}>
                                    <span className={styles['user-name']}>Jhonny Bravo</span>
                                    <span className={styles['dot']}><BsDot /></span>
                                    <span className={styles["date"]}> Mar 14 </span>
                                </div>
                            </div>

                            <span className={styles["title"]}>Boost Your Speaking Fluencyour Speaking Fluency  </span>
                            <span className={styles["text-exp"]}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
                            <div className={styles["post-lw"]}>
                                <div className={styles['post-lw-left']}>
                                    <button className={styles["eng-button"]}>English Learning</button>
                                    <button className={styles["eng-button"]}>New Language</button>
                                </div>
                                <div className={styles['icons-container']}>
                                    <a href="">
                                        <div className={styles["icons"]}>
                                            <BsBookmarkStarFill />
                                        </div>
                                    </a>

                                </div>
                            </div>
                        </div>
                        <div className={styles["left-div-right"]}>
                            <div className={styles['left-div-right-center']}>
                                <div className={styles['right-image']}> </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div >
                <div className={styles['blog-card-frame']}>
                    <div className={styles["blogCardContainer"]}>
                        <div className={styles["left-div-left"]}>
                            <div className={styles['blog-card-top']}>
                                <div className={styles['profile-photo']}></div>
                                <div className={styles['blog-card-top-center']}>
                                    <span className={styles['user-name']}>Jhonny Bravo</span>
                                    <span className={styles['dot']}><BsDot /></span>
                                    <span className={styles["date"]}> Mar 14 </span>
                                </div>
                            </div>

                            <span className={styles["title"]}>Boost Your Speaking Fluencyour Speaking Fluency  </span>
                            <span className={styles["text-exp"]}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
                            <div className={styles["post-lw"]}>
                                <div className={styles['post-lw-left']}>
                                    <button className={styles["eng-button"]}>English Learning</button>
                                    <button className={styles["eng-button"]}>New Language</button>
                                </div>
                                <div className={styles['icons-container']}>
                                    <a href="">
                                        <div className={styles["icons"]}>
                                            <BsBookmarkStarFill />
                                        </div>
                                    </a>

                                </div>
                            </div>
                        </div>
                        <div className={styles["left-div-right"]}>
                            <div className={styles['left-div-right-center']}>
                                <div className={styles['right-image']}> </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReadingList
