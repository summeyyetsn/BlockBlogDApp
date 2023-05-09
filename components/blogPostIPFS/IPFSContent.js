import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { parse } from 'node-html-parser';
import TruncateText from "./TruncateText";

function IPFSContent({ ipfsUri}) {
    const [htmlText, setHtmlText] = useState('');
    const [ipfsContent, setIpfsContent] = useState('');
    const contentMax = 330;

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
            const content = doc.querySelectorAll('p:not(:first-child)').map(p => p.text).join('\n');
            setIpfsContent(content);
        }
    }, [htmlText]);

    return (
        <div>
            <TruncateText text={ipfsContent} maxLength={contentMax} />
        </div>
    );
}

export default IPFSContent;
