import './entry.css'

function Entry(props){
    return(
        <article className="journal-entry">
         <div className="main-image-container">
        <img className="main-image" src={props.img.src} alt={props.img.alt}></img>
        </div>
        <div>
        <img id='markerIcon' className='topItem' src="/img/marker.png"></img>
        <span className='topItem'>{props.country}</span>
        <a className='topItem' href={props.googleMapsLink}>View on google maps</a>

        <h2>{props.title}</h2>
        <p>{props.dates}</p>
        <p>{props.text}</p>
        </div>
        </article>
    )
}

export default Entry