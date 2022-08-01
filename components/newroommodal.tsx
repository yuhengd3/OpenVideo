import Head from 'next/head'
import styles from '../styles/explore.module.css'
import Image from 'next/image'
import {useState, useEffect, FormEvent} from 'react';
import ReactDOM from 'react-dom'
import SearchBar from './search'
import Videos from './videos'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faClose } from '@fortawesome/free-solid-svg-icons'
import {Row, Col, Button, Container, Form, FormControl, Toast} from 'react-bootstrap'
import {API_KEY} from "../pages/_app"
import { useRouter } from 'next/router'
interface ModalProps {
    show: boolean;
    onClose: ()=>void;
}





function NewRoomModal(props: ModalProps) {
    const {show, onClose} = props;
    const router = useRouter();
    const [isBrowser, setIsBrowser] = useState(false);

    const [roomName, setRoomName] = useState("");
    const [description, setDescription] = useState("");
    const [coverPath, setCoverPath] = useState("");

    //handle submit
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        //prevent refresh
        event.preventDefault(); 

        console.log(roomName);

        fetch("https://api.telnyx.com/v2/rooms", {
        body: `{"enable_recording":false, "max_participants":10,"unique_name":"${roomName}"}`,
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${API_KEY}`,
        },
        method: "POST"
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            router.push(`rooms/join?room_id=${data.data.id}`)
        });

        handleClose();

        // router.push(`rooms/join/room_id=${data.id}`)

    }

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
                    <Form onSubmit={handleSubmit}>
                    <div className={styles.inputHeader}>
                        <h5 className={styles.inputLabel}>Room Name</h5>
                        <Form.Control type="text" placeholder='room name' className={styles.form} onChange={(event) => setRoomName(event.target.value)}/>
                    </div>
                
                    <div className={styles.inputHeader}>
                        <h5 className={styles.inputLabel}>Descriptions</h5>
                        <Form.Control as="textarea" rows={3} className={styles.form} onChange={(event) => setDescription(event.target.value)}/>
                    </div>

                    <div className={styles.inputHeader}>
                        <h5 className={styles.inputLabel}>Choose Cover</h5>
                        <Button className={styles.selectButton}>Upload</Button>
                    </div>
                    <Button className={styles.submitButton} type={'submit'}>Submit</Button>
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