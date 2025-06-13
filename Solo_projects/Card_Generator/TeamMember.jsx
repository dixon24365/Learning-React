import './card.css'
import Team from './Team'

export default function TeamMember(props){
    return(
        <>
        <h1>{props.name}</h1>
        <p>Role</p>
        <img src={props.img} alt="Profile picture" />
        <p>Bio</p>
        </>
    )
}