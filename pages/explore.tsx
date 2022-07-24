import Head from 'next/head'
import styles from '../styles/explore.module.css'
import Image from 'next/image'
import SearchBar from '../components/search'
import Videos from '../components/videos'
import {Row, Col, Button, Container, Form, FormControl} from 'react-bootstrap'
import NewRoomModal from '../components/newroommodal'
import { useState } from 'react'

function ExplorePage() {
    const [showModal, setShowModal] = useState(false);
    return (
        <div>
           <SearchBar/>
            <Container>
                <Videos/>
                <div id="modal_root"></div>
                <Button onClick={() => setShowModal(true)}>show modal</Button>
                <NewRoomModal show={showModal} onClose={()=>setShowModal(false)}></NewRoomModal>
            </Container>
        </div>
        
    )
}
export default ExplorePage