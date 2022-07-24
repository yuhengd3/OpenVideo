import type { NextPage } from 'next'
import Image from 'next/image'
import styles from '../styles/ProfileDropDown.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faCircleQuestion, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'

import Button from 'react-bootstrap/Button';
import { Console } from 'console'

import React, { useState } from 'react';

import profileImage from '../public/profile.jpg';


const ProfileDropDown: NextPage = () => {

    const [isVisible, setIsVisible] = useState(false);

    console.log('init',isVisible);

    return (
        <div className={styles.profilePicture} 
            onClick = {
                () => {
                    console.log("clicked, isvisible: ", isVisible);
                    
                    isVisible ? setIsVisible(false) : setIsVisible(true);
                }
            }
            >
            {isVisible ? 
                <div className={styles.dropDown}>
                    <div>
                        <div className={styles.imageContainer}>
                            <Image 
                                src={profileImage}
                                width={90}
                                height={90}
                            />
                        </div>
                        <h5 className={styles.userInfo}>Users Name</h5>
                    </div>

                    <div className={styles.manageContainer}>
                        <div className={styles.manageLine}>
                            <FontAwesomeIcon icon={faUser} className={styles.icon}/>
                            <h6 className={styles.content}>Manage Profile</h6>
                        </div>
                        <div className={styles.manageLine}>
                            <FontAwesomeIcon icon={faCircleQuestion} className={styles.icon}/>
                            <h6 className={styles.content}>Help</h6>
                        </div>
                    </div>
                    
                    <div className={styles.logout}>
                        <div className={styles.manageLine}>
                            <FontAwesomeIcon icon={faArrowRightFromBracket} className={styles.icon}/>
                            <h6 className={styles.content}>Log Out</h6>
                        </div>
                    </div>
                </div> 
            : null}
            
        </div>          
    )
}

export default ProfileDropDown;