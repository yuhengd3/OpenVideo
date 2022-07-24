import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useAuth } from '../context/authContext'
import { useRouter } from 'next/router'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faLock, faEnvelope, faE } from '@fortawesome/free-solid-svg-icons'
import styles from '../styles/LogIn.module.css'


import { Link } from 'react-router-dom';


const Signup = () => {
    const router = useRouter()
    const {user, signup} = useAuth()
    console.log(user)

  const [data, setData] = useState({
    email: '',
    password: '',
  })

  const handleSignup = async (e: any) => {
    e.preventDefault()
    try {
      await signup(data.email, data.password)
      router.push('/dashboard')
    } catch (err) {
      console.log(err)
    }

    console.log(data)
  }

  return (
      <div className={styles.container}>
      <h2 className={styles.head}>Sign Up</h2>        
      <Form onSubmit={handleSignup}>
        <div className={styles.inputHeader}>
          <FontAwesomeIcon icon={faUser} className={styles.icon}/>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <h5 className={styles.inputLabel}>Your Name</h5>
          <Form.Control
            type="email"
            placeholder="Enter email"
            required
            onChange={(e: any) =>
              setData({
                ...data,
                email: e.target.value,
              })
            }
            value={data.email}
          />
        </Form.Group>
        </div>
        <div className={styles.inputHeader}>
        <FontAwesomeIcon icon={faEnvelope} className={styles.icon}/>
        <Form.Group className="mb-3" controlId="formBasicPassword">
        <h5 className={styles.inputLabel}>Your Password</h5>
          <Form.Control
            type="password"
            placeholder="Password"
            required
            onChange={(e: any) =>
              setData({
                ...data,
                password: e.target.value,
              })
            }
            value={data.password}
          />
        </Form.Group>
        </div>

        <Button className={styles.submitButton} variant="primary" type="submit">
          Signup
        </Button>
      </Form>
    </div>
  )
}

export default Signup