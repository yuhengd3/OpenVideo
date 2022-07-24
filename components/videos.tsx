import Head from 'next/head'
import styles from '../styles/explore.module.css'
import Image from 'next/image'
import SearchBar from '../components/search'
// import ReactPlayer from 'react-player'
import {Row, Col, Button, Container, Form, FormControl} from 'react-bootstrap'

function Videos() {
    return (
        <div>
            <Row>
                <Col>
                    <Image
                        src="/images/work_jazz.png" // Route of the image file
                        height={233} // Desired size with correct aspect ratio
                        width={322} // Desired size with correct aspect ratio
                        alt="Your Name"
                    />
                
                </Col>
                <Col>
                    <Image
                        src="/images/work_jazz.png" // Route of the image file
                        height={233} // Desired size with correct aspect ratio
                        width={322} // Desired size with correct aspect ratio
                        alt="Your Name"
                    />
                </Col>
                <Col>
                    <Image
                        src="/images/work_jazz.png" // Route of the image file
                        height={233} // Desired size with correct aspect ratio
                        width={322} // Desired size with correct aspect ratio
                        alt="Your Name"
                    />
                </Col>
                <Col>
                    <Image
                        src="/images/work_jazz.png" // Route of the image file
                        height={233} // Desired size with correct aspect ratio
                        width={322} // Desired size with correct aspect ratio
                        alt="Your Name"
                    />
                </Col>
            </Row>
            <Row className='mt-3'>
            <Col>
                    <Image
                        src="/images/work_jazz.png" // Route of the image file
                        height={233} // Desired size with correct aspect ratio
                        width={322} // Desired size with correct aspect ratio
                        alt="Your Name"
                    />
                
                </Col>
                <Col>
                    <Image
                        src="/images/work_jazz.png" // Route of the image file
                        height={233} // Desired size with correct aspect ratio
                        width={322} // Desired size with correct aspect ratio
                        alt="Your Name"
                    />
                </Col>
                <Col>
                    <Image
                        src="/images/work_jazz.png" // Route of the image file
                        height={233} // Desired size with correct aspect ratio
                        width={322} // Desired size with correct aspect ratio
                        alt="Your Name"
                    />
                </Col>
                <Col>
                    <Image
                        src="/images/work_jazz.png" // Route of the image file
                        height={233} // Desired size with correct aspect ratio
                        width={322} // Desired size with correct aspect ratio
                        alt="Your Name"
                    />
                </Col>
            </Row>
        </div>
        
    )
}
export default Videos