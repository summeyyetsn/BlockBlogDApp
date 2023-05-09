import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { parse } from 'node-html-parser';
import TruncateText from "./TruncateText";

function IPFSTitle({ipfsUri}){
    const [htmlText, setHtmlText] = useState('');
    const [ipfsTitle, setIpfsTitle] = useState('');
    const titleMax = 80;

    useEffect(() => {
        axios.get(ipfsUri)
            .then(response => {
                const images = parse(response.data).querySelectorAll('img');
                images.forEach(img => {
                    img.remove();
                });
                setHtmlText(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, [ipfsUri]);

    useEffect(() => {
        if (htmlText) {
            const doc = parse(htmlText);
            const title =  doc.querySelector('h2').text;
            setIpfsTitle(title);
        }
    }, [htmlText]);


  return (
    <div>
      <TruncateText text={ipfsTitle} maxLength={titleMax} />
    </div>
  )
}

export default IPFSTitle
