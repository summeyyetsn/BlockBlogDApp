import React, {useState} from 'react'
import WritingNavbar from '../components/Navbar/writingNavbar/WritingNavbar';
import TipTap from '../components/writingtiptap/Tiptap'
import styles from '../styles/Writing.module.css'


const Writing = () => {
  const [desc, setDesc] = useState('');

  const handleDescChange = (newDesc) => {
    setDesc(newDesc);
  }
  return (
    <div>
      <div className={styles['Writing-page-container']}>
        <div className={styles['Writing-page-top']}>
            <WritingNavbar desc={desc}/>
        </div>
        <div className={styles['Writing-page-bottom']}>
            <TipTap onDescChange={handleDescChange}/>
        </div>
      </div>
    </div>
  )
}

export default Writing


