import type { NextPage } from 'next'
import Image from 'next/image'
import styles from '../styles/LogIn.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faLock, faEnvelope, faE } from '@fortawesome/free-solid-svg-icons'

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { Link } from 'react-router-dom';

const SignUp: NextPage = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.head}>Sign Up</h2>         
            <Form>
                <div className={styles.inputHeader}>
                    <FontAwesomeIcon icon={faUser} className={styles.icon}/>
                    <h5 className={styles.inputLabel}>Your Name</h5>
                    <Form.Control type="text" placeholder='user name' className={styles.form}/>
                </div>

                <div className={styles.inputHeader}>
                    <FontAwesomeIcon icon={faEnvelope} className={styles.icon}/>
                    <h5 className={styles.inputLabel}>Your Email</h5>
                    <Form.Control type="text" placeholder='my@email.com' className={styles.form}/>
                </div>
            
                <div className={styles.inputHeader}>
                    <FontAwesomeIcon icon={faLock} className={styles.icon}/>
                    <h5 className={styles.inputLabel}>Your Password</h5>
                    <Form.Control type="password" placeholder='password' className={styles.form}/> 
                </div>

                <div className={styles.inputHeader}>
                    <FontAwesomeIcon icon={faLock} className={styles.icon}/>
                    <h5 className={styles.inputLabel}>Confirm Your Password</h5>
                    <Form.Control type="password" placeholder='password' className={styles.form}/> 
                </div>
            </Form>
            <Button className={styles.submitButton}>Sign Up</Button>
            <br/><br/><br/>
        </div>
        
    )
}

export default SignUp;