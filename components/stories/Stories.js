import React from 'react'
import styles from './Stories.module.css';
import toolTipStyles from '@/components/common/toolTip/ToolTipStories.module.css';

const Stories = () => {
    return (
        <div>

            <div className={styles['banner-container']}>
                <div className={styles['banner-title']}>Your Stories</div>
            </div>

            <div className={styles['stories-container']}>
                <div className={styles['stories-title']}>Seinfeld kendisine “daha iyi komedyen olmak isteyenlere ne önerirsin?” </div>
                <div className={styles['stories-content']}>Seinfeld kendisine "daha iyi komedyen olmak isteyenlere ne önerirsin?" diye sorulduğunda bunu söylemiş. Daha iyi bir komedyen olmak için daha iyi espriler yazması gerektiğini fark etmiş ve bunun için de her gün yazmaya karar vermiş. Kendini motive etmek için kullandığı bu zincir metaforu işe yaramış. Onu işine sıkı sıkı bağlamış.Kendini motive etmek için kullandığı bu zincir metaforu işe yaramış. Onu işine sıkı sıkı bağlamış. </div>
                <div className={styles['stories-button-container']}>

                    <div className={toolTipStyles.tooltip}>
                        <img src='/images/edit.png' className={styles['stories-button-deleteEdit']} />
                        <span className={toolTipStyles['tooltiptext']}>Edit</span>
                    </div>

                    <div className={toolTipStyles.tooltip}>
                        <img src='/images/delete.png' className={styles['stories-button-deleteEdit']} />
                        <span className={toolTipStyles['tooltiptext']}>Delete</span>
                    </div>

                    <div className={toolTipStyles.tooltip}>
                        <img src='/images/active.png' className={styles['stories-button-activePassive']} />
                        <span className={toolTipStyles['tooltiptext']}>Public</span>
                    </div>

                    <div className={toolTipStyles.tooltip}>
                        < img src='/images/passive.png' className={styles['stories-button-activePassive']} />
                        <span className={toolTipStyles['tooltiptext']}>Private</span>
                    </div>

                </div>
            </div>
            <div className={styles['stories-container']}>
                <div className={styles['stories-title']}>Seinfeld kendisine “daha iyi komedyen olmak isteyenlere ne önerirsin?” </div>
                <div className={styles['stories-content']}>Seinfeld kendisine "daha iyi komedyen olmak isteyenlere ne önerirsin?" diye sorulduğunda bunu söylemiş. Daha iyi bir komedyen olmak için daha iyi espriler yazması gerektiğini fark etmiş ve bunun için de her gün yazmaya karar vermiş. Kendini motive etmek için kullandığı bu zincir metaforu işe yaramış. Onu işine sıkı sıkı bağlamış.Kendini motive etmek için kullandığı bu zincir metaforu işe yaramış. Onu işine sıkı sıkı bağlamış. </div>
                <div className={styles['stories-button-container']}>

                    <div className={toolTipStyles.tooltip}>
                        <img src='/images/edit.png' className={styles['stories-button-deleteEdit']} />
                        <span className={toolTipStyles['tooltiptext']}>Edit</span>
                    </div>

                    <div className={toolTipStyles.tooltip}>
                        <img src='/images/delete.png' className={styles['stories-button-deleteEdit']} />
                        <span className={toolTipStyles['tooltiptext']}>Delete</span>
                    </div>

                    <div className={toolTipStyles.tooltip}>
                        <img src='/images/active.png' className={styles['stories-button-activePassive']} />
                        <span className={toolTipStyles['tooltiptext']}>Public</span>
                    </div>

                    <div className={toolTipStyles.tooltip}>
                        < img src='/images/passive.png' className={styles['stories-button-activePassive']} />
                        <span className={toolTipStyles['tooltiptext']}>Private</span>
                    </div>

                </div>
            </div>
        </div >
    )
}

export default Stories
