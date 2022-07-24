import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useAuth } from '../context/authContext'

import type { NextPage } from 'next'
import Image from 'next/image'
import styles from '../styles/LogIn.module.css'
import Link from 'next/link'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons'



const Login = () => {
    const {user,login} = useAuth()

  const router = useRouter()
  const [data, setData] = useState({
    email: '',
    password: '',
  })

  const handleLogin = async (e: any) => {
    e.preventDefault()

    console.log(user)
    try {
      await login(data.email, data.password)
      router.push('/dashboard')
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className = {styles.container}>
      <h2 className={styles.head}>Login</h2>    
      <Form onSubmit={handleLogin}>
        <div className={styles.inputHeader}>
        <FontAwesomeIcon icon={faUser} className={styles.icon}/>
          <Form.Group className="mb-3" controlId="formBasicEmail">
          <h5 className={styles.inputLabel}>Email address</h5>
            <Form.Control
              onChange={(e: any) =>
                setData({
                  ...data,
                  email: e.target.value,
                })
              }
            value={data.email}
            required
            type="email"
            placeholder="Enter email"
          />
        </Form.Group>
      </div>
      <div className={styles.inputHeader}>
      <FontAwesomeIcon icon={faLock} className={styles.icon}/>
        <Form.Group className="mb-3" controlId="formBasicPassword">
        <h5 className={styles.inputLabel}>Your Password</h5>
          <Form.Control
            onChange={(e: any) =>
              setData({
                ...data,
                password: e.target.value,
              })
            }
            value={data.password}
            required
            type="password"
            placeholder="Password"
          />
        </Form.Group>
      </div>
        <Button className={styles.submitButton} variant="primary" type="submit">
          Login
        </Button>
      </Form>
      <div className={styles.inputHeader}>
          <h5 className={styles.newAccount}>New to ______?</h5>
          <Link href="/signup">
            <h5 className = {styles.link}><a>Create a new account</a></h5>
          </Link>
          
      </div>  

    </div>
  )
}

export default Login