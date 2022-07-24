import Head from 'next/head'
import styles from '../styles/explore.module.css'
import Image from 'next/image'
import SearchBar from '../components/search'
import Videos from '../components/videos'
import {Row, Col, Button, Container, Form, FormControl} from 'react-bootstrap'

function ExplorePage() {
    return (
        <div>
            <SearchBar/>
            <Container>
                <Videos/>
            </Container>
        </div>
        
    )
}
export default ExplorePage