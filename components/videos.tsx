import Head from 'next/head'
import styles from '../styles/explore.module.css'
import Image from 'next/image'
import SearchBar from './search'
import ReactPlayer from 'react-player'
import {Row, Col, Button, Container, Form, FormControl} from 'react-bootstrap'
import RoomThumbnail from './RoomThumbnail'
import { useState } from 'react'
import 'firebase/firestore'


import {collection} from 'firebase/firestore/';

import * as firebase from "firebase/app"

import {getRooms} from "../config/firebase"
import {useEffect} from "react"

// var db = firebase.firestore()

function Videos() {
    

        // let data = collection(db,'rooms');  

        // db.collection("rooms").get().then((querySnapshot:any) => {
             
        //     // Loop through the data and store
        //     // it in array to display
        //     querySnapshot.forEach(element => {
        //         var data = element.data();
        //         setInfo(arr => [...arr , data]);
                  
        //     });
        // })

    
    
    return (
        <div className = "videos">
            <RoomThumbnail name = "Study space" img = "/images/work_jazz.png" description = "Lorem Ipsum" participants = "3" link = "http://www.youtube.com"></RoomThumbnail>
            <RoomThumbnail name = "Study space" img = "/images/work_jazz.png" description = "Lorem Ipsum" participants = "3" link = "http://www.youtube.com"></RoomThumbnail>
            <RoomThumbnail name = "Study space" img = "/images/work_jazz.png" description = "Lorem Ipsum" participants = "3" link = "http://www.youtube.com"></RoomThumbnail>
            <RoomThumbnail name = "Study space" img = "/images/work_jazz.png" description = "Lorem Ipsum" participants = "3" link = "http://www.youtube.com"></RoomThumbnail>   
            <RoomThumbnail name = "Study space" img = "/images/work_jazz.png" description = "Lorem Ipsum" participants = "3" link = "http://www.youtube.com"></RoomThumbnail>
            <RoomThumbnail name = "Study space" img = "/images/work_jazz.png" description = "Lorem Ipsum" participants = "3" link = "http://www.youtube.com"></RoomThumbnail>
        </div>
        
    )
}
export default Videos