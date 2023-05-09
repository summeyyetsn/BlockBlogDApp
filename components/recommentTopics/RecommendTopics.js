import React from 'react'
import styles from './RecommendTopics.module.css';

const RecommendTopics = () => {
  return (
    <div>
        <div className={styles['recommendTopics-side-container']}>
            <span className={styles['recommendTopics-title-text']}>Recommend Topics</span>
            <div className={styles['recommendTopics-container']}>
                <span className={styles['recommendTopics-text']}>Blockchain</span>
                <span className={styles['recommendTopics-text']}>Web3 Development</span>
                <span className={styles['recommendTopics-text']}>Solidity</span>
                <span className={styles['recommendTopics-text']}>Decentralize Social Media</span>
                <span className={styles['recommendTopics-text']}>Hardhat</span>
                <span className={styles['recommendTopics-text']}>Smart Contract</span>
                <span className={styles['recommendTopics-text']}>BNB Chain Testnet</span>
                <span className={styles['recommendTopics-text']}>Full Stack Web3 Deveplopment</span>
            </div>
        </div>
    </div>
  )
}

export default RecommendTopics
