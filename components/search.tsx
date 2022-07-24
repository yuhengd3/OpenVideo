import Head from 'next/head'
import styles from '../styles/explore.module.css'
import Image from 'next/image'
import {Toast, Row, Col, Button, Container, Form, FormControl} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons'
import NewRoomModal from './newroommodal'
import {useState} from 'react'
import ProfileDropDown from './profile-dropdown'
function SearchBar() {
    const [showModal, setShowModal] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const handleClick = () => {
        console.log("handle click");

    }
    return (
        <div>
        <Head>
            <script src="https://kit.fontawesome.com/de35c48656.js" crossOrigin="anonymous"></script>
        </Head>
        <main>
        <Container fluid  className={styles.layer}>
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
                            <button className="btn border-0" type="button">
                                <i className={`fa-solid fa-magnifying-glass fa-lg ${styles.icon}`}></i>
                            </button>
                        </span>
                    </div>
                </Col>
                <Col className="col-1 mt-3">
                    <i className={`fa-solid fa-circle-plus fa-xl ${styles.icon}`} onClick={() => setShowModal(true)}></i>
                    <div className={styles.image_wrapper} >
                    <img
                        onClick={() => setIsVisible(true)}
                        className="avatar"
                        src="/images/profile.jpg" // Route of the image file
                        height={30} // Desired size with correct aspect ratio
                        width={30} // Desired size with correct aspect ratio
                        alt="Your Name"
                    />
                    </div>
                    <ProfileDropDown visible={isVisible} onClose={()=>setIsVisible(false)}></ProfileDropDown>
                   
                    <style jsx global>{`
                        .avatar {
                        border-radius: 30%;
                        }
                    `}</style>
                    {/*<Button className={styles.ourButton}>test</Button>>*/}
                </Col>
               
            
            </Row>
            <NewRoomModal show={showModal} onClose={()=>setShowModal(false)}></NewRoomModal>
        </Container>
        </main>
        </div>
        
    )
}
export default SearchBar