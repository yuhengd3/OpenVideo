import type { NextPage } from 'next'
import Image from 'next/image'
import styles from '../styles/LogIn.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons'

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const LogIn: NextPage = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.head}>Login</h2>         
            <Form>
                <div className={styles.inputHeader}>
                    <FontAwesomeIcon icon={faUser} className={styles.icon}/>
                    <h5 className={styles.inputLabel}>Your Name</h5>
                    <Form.Control type="text" placeholder='user name' className={styles.form}/>
                </div>
            
                <div className={styles.inputHeader}>
                    <FontAwesomeIcon icon={faLock} className={styles.icon}/>
                    <h5 className={styles.inputLabel}>Your Password</h5>
                    <Form.Control type="password" placeholder='password' className={styles.form}/> 
                </div>
            </Form>
            <Button className={styles.submitButton}>Login</Button>
        </div>
        
    )
}

export default LogIn;