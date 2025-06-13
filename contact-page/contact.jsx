import './contact.css'
import phoneIcon from "/img/phone-icon.png"
function  Contact({name, img, phone, email}){
    return(
        <div className="contacts">
            <article className="contact-card">
            <img src={img} alt="Photo of Mr.Whiskerson"/>
            <h3>{name}</h3>
            <div className="info-group">
                <img src={phoneIcon} alt="phone icon"></img>
                <p>{phone}</p>
            </div>
            <div className="info-group">
                <img src="/img/mail-icon.png" alt="email icon"></img>
                <p>{email}</p>
            </div>
            </article>
        </div>
    )
}

export default Contact