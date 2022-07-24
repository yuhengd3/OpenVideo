import Head from 'next/head'
import styles from '../styles/explore.module.css'
import Image from 'next/image'
import SearchBar from './search'
import ReactPlayer from 'react-player'
import {Row, Col, Button, Container, Form, FormControl} from 'react-bootstrap'
import RoomThumbnail from './RoomThumbnail'
import { useEffect, useState } from 'react'
import 'firebase/firestore'
import { getFirestore, collection, CollectionReference, DocumentData } from 'firebase/firestore'
import { doc, setDoc } from '@firebase/firestore'
import 'firebase/firestore';
import { firestore } from '../config/firebase'

<<<<<<< HEAD
// import db from '../config/firebase'
=======

import {collection} from 'firebase/firestore/';
>>>>>>> elen



// import * as firebase from "firebase/app"

import {getRooms} from "../config/firebase"
import {useEffect} from "react"

// var db = firebase.firestore()

function Videos() {
    

        // let data = collection(db,'rooms');  

<<<<<<< HEAD
      // db.collection('users').add({room_id: '1234234'});

      const Fetchdata = ()=>{
        const c = collection(firestore, "rooms")
        
        // const userCollection = db.collection('users').add({room_id: '1234234'});
=======
>>>>>>> elen
        // db.collection("rooms").get().then((querySnapshot:any) => {
             
        //     // Loop through the data and store
        //     // it in array to display
        //     querySnapshot.forEach(element => {
        //         var data = element.data();
        //         setInfo(arr => [...arr , data]);
                  
        //     });
        // })
<<<<<<< HEAD
        const getUsers = async () => {
            const userRef = doc(c, 'user_12345');
            await setDoc(userRef, {
              age: 30,
              firstName: 'Jamie',
              lastName: 'Curnow'
            })
            
        }
        getUsers();
    }

    useEffect(()=> {
        Fetchdata();
    })
=======

    
>>>>>>> elen
    
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