import './Card.css'


function Card({aHref, header, desc, imgSrc, imgAlt}) {
    return (
        <div className="card">  
            <header className="cardHeader">{header}</header>
        <div className="text-ImgBox">
            <div className="cardText">
                <p>{desc}</p>
            </div>
            <a className="cardImages" href={aHref} target="_blank"rel="noreferrer">
                <img src={imgSrc} alt={imgAlt} />
            </a>
            </div>
        </div>
    )
}

export default Card