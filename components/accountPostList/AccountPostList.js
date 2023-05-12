import React from 'react'
import styles from './AccountPostList.module.css';

const AccountPostList = () => {
    return (
        <div>
            <div className={styles['account-post-list-container']}>

                <div className={styles['apl-reading-list-container']}>
                    <div className={styles['list-container-left']}>
                        <div className={styles['list-container-left-top']}>
                            <img className={styles['list-container-left-top-ppicture']} src='/images/profil.jpg' />
                            <div className={styles['list-container-left-top-username']}>Jhonny Bravo</div>
                        </div>
                        <div className={styles['list-container-left-middle']}>Reading list</div>
                        <div className={styles['list-container-left-bottom']}>95 stories</div>
                    </div>
                    <div className={styles['list-container-right']}>
                        <img className={styles['lcr-image']}/>
                    </div>
                </div>
                <div className={styles['apl-reading-list-container']}>
                    <div className={styles['list-container-left']}>
                        <div className={styles['list-container-left-top']}>
                            <img className={styles['list-container-left-top-ppicture']} src='/images/profil.jpg' />
                            <div className={styles['list-container-left-top-username']}>Jhonny Bravo</div>
                        </div>
                        <div className={styles['list-container-left-middle']}>Post list</div>
                        <div className={styles['list-container-left-bottom']}>18 stories</div>
                    </div>
                    <div className={styles['list-container-right']}>
                        <img className={styles['lcr-image']}/>
                    </div>
                </div>

                

                <div className={styles['apl-post-list-container']}>

                </div>
            </div>
        </div>
    )
}

export default AccountPostList
