import React, { useState } from 'react'
import parser from "html-react-parser"
import Writing from './WritingTipTap';
import styles from './WritingTipTap.module.css'

const TipTap = ({ onDescChange }) => {
  const handleDescChange = (newDesc) => {
    onDescChange(newDesc);
  }
  return (
    <div>
      <Writing setDesc={handleDescChange}/>
      {/* <div className='ProseMirror'>
        {parser(desc)}
      </div> */}
    </div>
  )
}

export default TipTap
