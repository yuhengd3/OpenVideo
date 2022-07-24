import Head from 'next/head'
import styles from '../styles/explore.module.css'
import Image from 'next/image'
import {Toast, Row, Col, Button, Container, Form, FormControl} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons'
import { useRouter } from 'next/router'
import { useAuth } from '../context/authContext'
function SearchBar() {

    const {user,logout} = useAuth()
    const router = useRouter()
    const handleClick = () => {
        console.log("handle click");
        return (
            <>
                <Toast>
                    <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
                </Toast>
            </>
        )
    }


    return (
        <div>
        <Head>
            <script src="https://kit.fontawesome.com/de35c48656.js" crossOrigin="anonymous"></script>
        </Head>
        <main>
        <Container fluid>
            <Row className="mt-3 mx-auto">
                <Col className={`col-2 mt-3 `}>
                    <div className={styles.right} >
                    <img
                        src="/images/logo.png" // Route of the image file
                        height={50/2} // Desired size with correct aspect ratio
                        width={76/2} // Desired size with correct aspect ratio
                        alt="Your Name"
                    />
                    </div>
                </Col>
                <Col className={`col-8 mt-1 ${styles.search}`}>
                    <div className="input-group shadow p-1 mb-5 bg-white rounded">
                        <input className="form-control border-0" type="text" placeholder="Search" id="example-search-input"/>
                        <span className="input-group-append">
                            <button className="btn bg-white border-0 ms-n3" type="button">
                                <i className={`fa-solid fa-magnifying-glass fa-lg ${styles.icon}`}></i>
                            </button>
                        </span>
                    </div>
                </Col>
                <Col className="col-1 mt-3">
                    <i className={`fa-solid fa-circle-plus fa-xl ${styles.icon}`}></i>
                    <div className={styles.image_wrapper} >
                    <img
                        onClick={handleClick}
                        className="avatar"
                        src="/images/profile.jpg" // Route of the image file
                        height={30} // Desired size with correct aspect ratio
                        width={30} // Desired size with correct aspect ratio
                        alt="Your Name"
                    />
                    </div>
                    <style jsx global>{`
                        .avatar {
                        border-radius: 30%;
                        }
                    `}</style>
                    <Button 
                    onClick = {()=> {
                        logout()
                        router.push('/login')
                    }}
                    className={styles.ourButton}>Logout</Button>
                </Col>
               
            
            </Row>
        </Container>
        </main>
        </div>
        
    )
}
export default SearchBar