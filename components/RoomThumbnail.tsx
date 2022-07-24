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
            <img width = "300px" height = "200px" src = {props.img}></img>
            <p>{props.name}</p>
            <p>{props.description}</p>  
            <p>Number of participants: {props.participants}</p>

        </div>
    )



}

export default RoomThumbnail