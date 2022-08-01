import Head from 'next/head'
import styles from '../styles/explore.module.css'
import Image from 'next/image'
import SearchBar from './search'
import ReactPlayer from 'react-player'

import { firestore } from '../config/firebase'
import {Row, Col, Button, Container, Form, FormControl} from 'react-bootstrap'
import RoomThumbnail from './RoomThumbnail'
import { useEffect, useState } from 'react'
import 'firebase/firestore'
import { getFirestore, collection, CollectionReference, DocumentData } from 'firebase/firestore'
// import { doc, setDoc } from '@firebase/firestore'


import { useCollection } from "react-firebase-hooks/firestore";



// var db = firebase.firestore()

function Videos() {
    

        // let data = collection(db,'rooms');  

      
    //   const db = firebase.firestore();
    //   db.collection('users').add({room_id: '1234234'});
    const c = collection(firestore, "rooms");
      

    const [room_list, saveList] = useState<any>([]);

    const [users, usersLoading, usersError] = useCollection(
        c,
    {}
    );
      

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

        

        

        users?.docs.map((a, i) => {
            let d = a.data();
            console.log(d);
            saveList((room_list: any) => [...room_list, d])
        })
    }

    useEffect(()=> {
        Fetchdata();
    }, [])

    
    return (
        <div className = "videos">
            {/* {
                room_list.map((item: any) => <RoomThumbnail key={item.room_id} name = {item.room_name} description={item.description} link={`/rooms/join?room_id=${item.room_id}`}/>)
            } */}
            <RoomThumbnail name = "MUSIC" img = "/images/workjazz.png" description = "Lorem Ipsum" participants = "3" link = "/rooms/join?room_id=11059d96-f6c9-4133-b877-552722783ae1"></RoomThumbnail>
            <RoomThumbnail name = "Animations✨" img = "/images/sponge.png" description = "Lorem Ipsum" participants = "3" link = "/rooms/join?room_id=c9c6a580-07c5-46c2-8171-f6fb04143185"></RoomThumbnail>
            <RoomThumbnail name = "☕️☕️☕️" img = "/images/coffee.png" description = "Lorem Ipsum" participants = "3" link = "/room/join?room_id=6efc5107-79d2-4497-aaab-a613cbff6e75"></RoomThumbnail>
            <RoomThumbnail name = "Study space" img = "/images/study.png" description = "Lorem Ipsum" participants = "3" link = "/room/join?room_id=b45c1fdc-b809-4625-8ca4-fa722a127e87"></RoomThumbnail>   
            <RoomThumbnail name = "UI Discussion" img = "/images/UI.png" description = "Lorem Ipsum" participants = "3" link = "/room/join?room_id=213a694d-8922-44d5-87b9-bf8ffd47e9e8"></RoomThumbnail>
            <RoomThumbnail name = "Fooooood" img = "/images/donuts.png" description = "Lorem Ipsum" participants = "3" link = "/room/join?room_id=e3365ece-919a-4838-9c35-c1ce84a733c4"></RoomThumbnail>
        </div>
        
    )
}
export default Videos