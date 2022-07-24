import Head from 'next/head'
import styles from '../styles/explore.module.css'
import Image from 'next/image'
import SearchBar from './search'
import ReactPlayer from 'react-player'

import { firestore } from '../config/firebase'
import {Row, Col, Button, Container, Form, FormControl} from 'react-bootstrap'
import RoomThumbnail from './RoomThumbnail'
import { useEffect, useState } from 'react'
import firebase from 'firebase/compat/app';
import 'firebase/firestore'
import { getFirestore, collection, CollectionReference, DocumentData } from 'firebase/firestore'
import { doc, setDoc } from '@firebase/firestore'


import { useCollection } from "react-firebase-hooks/firestore";



// var db = firebase.firestore()

function Videos() {
    

        // let data = collection(db,'rooms');  

      
    //   const db = firebase.firestore();
    //   db.collection('users').add({room_id: '1234234'});
    const c = collection(firestore, "rooms")
      

      const [room_list, saveList] = useState<any>([])
      

      const Fetchdata = ()=>{
        
        
        // const userCollection = db.collection('users').add({room_id: '1234234'});
        // db.collection("rooms").get().then((querySnapshot:any) => {
             
        //     // Loop through the data and store
        //     // it in array to display
        //     querySnapshot.forEach((element: { data: () => any }) => {
        //         var data = element.data();
        //         console.log(data);
        //         // setInfo((arr: any) => [...arr , data]);
                  
        //     });
        // })
        // const getUsers = async () => {
        //     const userRef = doc(c, 'user_12345');
        //     await setDoc(userRef, {
        //       age: 30,
        //       firstName: 'Jamie',
        //       lastName: 'Curnow'
        //     })
            
        // }
        // getUsers();

        const [users, usersLoading, usersError] = useCollection(
            c,
        {}
      );

      const arr = []

      users?.docs.map((a, i) => {
        saveList((room_list: any) => [...room_list, a.data()])
      })
    }

    useEffect(()=> {
        Fetchdata();
    }, [])

    
    return (
        <div className = "videos">
            <RoomThumbnail name = "Study space" img = "/images/work_jazz.png" description = "Lorem Ipsum" participants = "3" link = ""></RoomThumbnail>
            <RoomThumbnail name = "Study space" img = "/images/work_jazz.png" description = "Lorem Ipsum" participants = "3" link = "http://www.youtube.com"></RoomThumbnail>
            <RoomThumbnail name = "Study space" img = "/images/work_jazz.png" description = "Lorem Ipsum" participants = "3" link = "http://www.youtube.com"></RoomThumbnail>
            <RoomThumbnail name = "Study space" img = "/images/work_jazz.png" description = "Lorem Ipsum" participants = "3" link = "http://www.youtube.com"></RoomThumbnail>   
            <RoomThumbnail name = "Study space" img = "/images/work_jazz.png" description = "Lorem Ipsum" participants = "3" link = "http://www.youtube.com"></RoomThumbnail>
            <RoomThumbnail name = "Study space" img = "/images/work_jazz.png" description = "Lorem Ipsum" participants = "3" link = "http://www.youtube.com"></RoomThumbnail>
        </div>
        
    )
}
export default Videos