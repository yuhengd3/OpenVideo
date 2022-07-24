import { useRouter } from 'next/router'
import { useEffect } from 'react'
import React from 'react'
import { useAuth } from '../context/authContext'

const Dashboard = ({children}: {children: React.ReactNode}) => {

    const {user} = useAuth()
    const router = useRouter()

    useEffect(() => {
        if(!user)
        {
            router.push('/login')
        }
    
         
    }, [router,user])


  return (
      <>
        children
      </>
      
  )
}

export default Dashboard    