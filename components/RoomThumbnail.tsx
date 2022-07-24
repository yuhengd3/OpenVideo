import { useRouter } from 'next/router'
import styles from '../styles/room.module.css'

function RoomThumbnail(props:any) {
    const router = useRouter()
    const handleClick = () => {
        router.push(props.link)
    }

    return(
        <div 
        className = {styles.room}
        onClick = {handleClick}>
            <img width = "300px" height = "180px" src = {props.img}></img>
            <p><b>{props.name}</b></p>
            <p>{props.description}</p>  
            <p>Number of participants: {props.participants}</p>

        </div>
    )



}

export default RoomThumbnail