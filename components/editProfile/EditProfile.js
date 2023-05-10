import React, { useRef, useState } from 'react';
import styles from './EditProfile.module.css';
import axios from 'axios';

const EditProfile = () => {
    const [name, setName] = useState('');
    const [bio, setBio] = useState('');
    const [facebook, setFacebook] = useState('');
    const [twitter, setTwitter] = useState('');
    const [youtube, setYoutube] = useState('');
    const [linkedin, setLinkedin] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = { name, bio, facebook, twitter, youtube, linkedin };
        const jsonData = JSON.stringify(formData);
        console.log(jsonData);
        if (jsonData) {
            const blob = new Blob([jsonData], { type: 'text/html' });

            const reader = new FileReader();
            reader.readAsDataURL(blob);
            reader.onload = async () => {
                const base64 = reader.result;
                const uploadObj = [
                    {
                        path: 'profilInfo.txt',
                        content: base64,
                    },
                ];

                try {
                    const response = await axios({
                        method: 'POST',
                        url: '/api/upload/blogpost',
                        data: uploadObj,
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    });

                    console.log(response.data[0].path);
                } catch (error) {
                    console.log(error);
                }
            };
        }
    };
    return (
        <form onSubmit={handleSubmit} >
            <div className={styles['edit-profile-container']}>
                <div className={styles['edit-profile-title']}>Profile Information</div>

                <div className={styles['edit-profile-photo-side']}>

                </div>

                <div className={styles['edit-profile-name-side']}>
                    <div className={styles['edit-profile-name-title']}>Name*</div>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} className={styles['edit-profile-name-area']} />
                    <div className={styles['edit-profile-name-exp']}>Appears on your Profile page</div>
                </div>

                <div className={styles['edit-profile-bio-side']}>
                    <div className={styles['edit-profile-bio-title']}>Bio*</div>
                    <input type="text" value={bio} onChange={(e) => setBio(e.target.value)} className={styles['edit-profile-bio-area']} />
                    <div className={styles['edit-profile-bio-exp']}>Appears on your Profile page</div>
                </div>

                <div className={styles['edit-profile-social-side']}>
                    <div className={styles['edit-profile-social-title-title']}>Social Media*</div>

                    {/* Facebook */}
                    <div claclassName={styles['edit-profile-social-facebook-side']}>
                        <div className={styles['edit-profile-social-title']}>Facebook</div>
                        <input type="text" value={facebook} onChange={(e) => setFacebook(e.target.value)} className={styles['edit-profile-social-area']} />
                    </div>

                    {/* Twitter */}
                    <div claclassName={styles['edit-profile-social-twitter-side']}>
                        <div className={styles['edit-profile-social-title']}>Twitter</div>
                        <input type="text" value={twitter} onChange={(e) => setTwitter(e.target.value)} className={styles['edit-profile-social-area']} />
                    </div>

                    {/* Youtube */}
                    <div claclassName={styles['edit-profile-social-youtube-side']}>
                        <div className={styles['edit-profile-social-title']}>Youtube</div>
                        <input type="text" value={youtube} onChange={(e) => setYoutube(e.target.value)} className={styles['edit-profile-social-area']} />
                    </div>

                    {/* Linkedin */}
                    <div claclassName={styles['edit-profile-social-youtube-side']}>
                        <div className={styles['edit-profile-social-title']}>Linkedin</div>
                        <input type="text" value={linkedin} onChange={(e) => setLinkedin(e.target.value)} className={styles['edit-profile-social-area']} />
                    </div>

                </div>

                <div className={styles['edit-profile-button-side']}>
                    <button type='submit' className={styles['edit-profile-button-save']}>Save</button>
                </div>
            </div>
        </form>
    );
}



export default EditProfile;
