import './Card.css'


function Card({aHref, header, desc, imgSrc, imgAlt}) {
    return (
        <div className="card">  
            <header className="cardHeader">{header}</header>
        <div className="text-ImgBox">
            <p className="cardText">{desc}</p>
            <a className="" href={aHref} target="_blank"rel="noreferrer">
                <img className="cardImage" src={imgSrc} alt={imgAlt} />
            </a>
            </div>
        </div>
    )
}

export default Card