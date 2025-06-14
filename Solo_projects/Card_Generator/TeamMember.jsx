import './card.css'

export default function TeamMember(props){
    return(
        <>
        <h1>{props.name}</h1>
        <p>{props.role}</p>
        <img src={props.profilePic.src} alt={props.profilePic.alt} />
        <p>{props.bio}</p>
        </>
    )
}