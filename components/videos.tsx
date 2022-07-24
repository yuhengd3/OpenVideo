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



// var db = firebase.firestore()

function Videos() {
    

        // let data = collection(db,'rooms');  

      // db.collection('users').add({room_id: '1234234'});

      const Fetchdata = ()=>{
        const c = collection(firestore, "rooms")
        
        // const userCollection = db.collection('users').add({room_id: '1234234'});
        // db.collection("rooms").get().then((querySnapshot:any) => {
             
        //     // Loop through the data and store
        //     // it in array to display
        //     querySnapshot.forEach(element => {
        //         var data = element.data();
        //         setInfo(arr => [...arr , data]);
                  
        //     });
        // })
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

    
    return (
        <div className = "videos">
            <RoomThumbnail name = "MUSIC" img = "/images/workjazz.png" description = "Lorem Ipsum" participants = "3" link = "http://www.youtube.com"></RoomThumbnail>
            <RoomThumbnail name = "Animations✨" img = "/images/sponge.png" description = "Lorem Ipsum" participants = "3" link = "http://www.youtube.com"></RoomThumbnail>
            <RoomThumbnail name = "☕️☕️☕️" img = "/images/coffee.png" description = "Lorem Ipsum" participants = "3" link = "http://www.youtube.com"></RoomThumbnail>
            <RoomThumbnail name = "Study space" img = "/images/study.png" description = "Lorem Ipsum" participants = "3" link = "http://www.youtube.com"></RoomThumbnail>   
            <RoomThumbnail name = "UI Discussion" img = "/images/UI.png" description = "Lorem Ipsum" participants = "3" link = "http://www.youtube.com"></RoomThumbnail>
            <RoomThumbnail name = "Fooooood" img = "/images/donuts.png" description = "Lorem Ipsum" participants = "3" link = "http://www.youtube.com"></RoomThumbnail>
        </div>
        
    )
}
export default Videos