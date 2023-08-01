import './Card.css'


function Card({aHref, header, desc, repoLink, imgSrc, imgAlt}) {
    return (
        <div className="card">  
            <header className="cardHeader">{header}</header>
        <div className="text-ImgBox">
            <div className="cardText">
                <p>{desc}</p>
                <a href=
                {repoLink}>GitHub Repostiory</a>
            </div>
            <a href={aHref} target="_blank" rel="noreferrer">
                <img className="cardImages" src={imgSrc} alt={imgAlt} />
            </a>
            </div>
        </div>
    )
}

export default Card