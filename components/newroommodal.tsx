import Head from 'next/head'
import styles from '../styles/explore.module.css'
import Image from 'next/image'
import {useState, useEffect} from 'react';
import ReactDOM from 'react-dom'
import SearchBar from './search'
import Videos from './videos'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faClose } from '@fortawesome/free-solid-svg-icons'
import {Row, Col, Button, Container, Form, FormControl, Toast} from 'react-bootstrap'
interface ModalProps {
    show: boolean;
    onClose: ()=>void;
}
function NewRoomModal(props: ModalProps) {
    const {show, onClose} = props;
    const [isBrowser, setIsBrowser] = useState(false);
    useEffect(()=>{
        setIsBrowser(true);
    },[]);
    const handleClose = () => {

        onClose();
    }
    const modalContent = show ? (
        <>
            <div className={styles.overlay}>
                <div className={styles.modal}>
                <div className={styles.container}>
                    <Row>
                    <Col className="col-10"></Col>
                    <Col className="col-2">
                        <FontAwesomeIcon icon={faClose} className={styles.icon} onClick={handleClose}/>
                    </Col>
                    </Row>
                    <Form>
                    <div className={styles.inputHeader}>
                        <h5 className={styles.inputLabel}>Room Name</h5>
                        <Form.Control type="text" placeholder='room name' className={styles.form}/>
                    </div>
                
                    <div className={styles.inputHeader}>
                        <h5 className={styles.inputLabel}>Descriptions</h5>
                        <Form.Control as="textarea" rows={3} className={styles.form}/>
                    </div>

                    <div className={styles.inputHeader}>
                        <h5 className={styles.inputLabel}>Upload Cover</h5>
                        <Button className={styles.submitButton}>Select</Button>
                    </div>
                    
                    </Form>
                </div>
                </div>
            </div>
        </>
    ) : null

    if (isBrowser) {
        let temp = document.getElementById('modal_root');
        return temp ? ReactDOM.createPortal(modalContent, temp) : null
    } else {
        return null
    }
}
export default NewRoomModal