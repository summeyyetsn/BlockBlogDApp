import React, { useState, useEffect } from 'react';
import axios from 'axios';

function IPFStoGetIMG({ ipfsUri }) {
  const [imgSrc, setImgSrc] = useState('');

  useEffect(() => {
    axios.get(ipfsUri)
      .then(response => {
        const parser = new DOMParser();
        const htmlDoc = parser.parseFromString(response.data, 'text/html');
        const img = htmlDoc.querySelector('img');
        if (img) {
          setImgSrc(img.src);
        }
      })
      .catch(error => {
        console.log(error);
      });
  }, [ipfsUri]);

  return (
    <>
      {imgSrc && <img src={imgSrc} alt="First Image"
        style={{
            objectPosition: 'center',
            objectFit: 'cover',
            width: '140px',
            height: '140px'
            }}/>}
    </>
  );
}

export default IPFStoGetIMG;
