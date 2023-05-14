import React, { useState, useEffect } from 'react';
import styles from '../writingtiptap/WritingTipTap.module.css';
import axios from 'axios';

const BlogPostMain = ({ ipfsUri}) => {

  const [ipfsData, setIpfsData] = useState("");

  useEffect(() => {
    axios.get(ipfsUri)
      .then(response => {
        setIpfsData(response.data);
        
      })
      .catch(error => {
        console.log(error);
      });
  }, [{ ipfsUri }]);

  return (
    <div>
      <div className={` ${styles["ProseMirror"]} 
                        ${styles["blog-post-content-container"]}`} 
                        dangerouslySetInnerHTML={{ __html: ipfsData }} />
    </div>
  )
}

export default BlogPostMain
