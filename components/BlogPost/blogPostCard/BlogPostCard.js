import styles from './BlogPostCard.module.css';
import React,{ useState} from 'react';
import {BsBookmarkStar,BsBookmarkStarFill,BsThreeDots,BsFillHeartFill,BsHeart} from 'react-icons/bs';
import {HiStar} from 'react-icons/hi';
import {BsDot} from 'react-icons/bs';
import toolTipStyles from '../../common/toolTip/ToolTip.module.css';


const BlogPostCard = () => {
  
  const [hovered1, setHovered1] = useState(false);
  const [hovered2, setHovered2] = useState(false);
  const handleIcon1Hover = () => {setHovered1(true);};
  const handleIcon1Leave = () => {setHovered1(false);};
  const handleIcon2Hover = () => {setHovered2(true);};
  const handleIcon2Leave = () => {setHovered2(false);};

  return (
    <div >
      <div className={styles['blog-card-frame']}>
        <div className={styles["blogCardContainer"]}>
          <div className={styles["left-div-left"]}>
              <div className={styles['blog-card-top']}>
                  <div className={styles['profile-photo']}></div>
                  <div className={styles['blog-card-top-center']}>
                    <span className={styles['user-name']}>Jhonny Bravo</span>
                    <span className={styles['dot']}><BsDot/></span>
                    <span className={styles["date"]}> Mar 14 </span>
                  </div>
                  <span className={styles["date-right"]}><HiStar className={styles['member-star']}/>Member-only</span>
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
                              <div className={styles["icons"]} onMouseOver={handleIcon1Hover} onMouseLeave={handleIcon1Leave} >
                                <div className={toolTipStyles['tooltip']}>
                                {hovered1 ? <BsFillHeartFill/> : <BsHeart/>}
                                <span className={toolTipStyles['tooltiptext']}>Like</span>
                              </div>
                          </div>
                        </a>

                        <a href="">
                            <div className={styles["icons" ]}onMouseOver={handleIcon2Hover} onMouseLeave={handleIcon2Leave} >
                              <div className={toolTipStyles['tooltip']}>
                              {hovered2 ? <BsBookmarkStarFill /> : <BsBookmarkStar />}
                              <span className={toolTipStyles['tooltiptext']}>Add List</span>
                            </div>
                          </div>
                        </a>
                        <a href="">
                          <div className={styles['icons']}><BsThreeDots/></div>
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
    
    
  )
}

export default BlogPostCard
