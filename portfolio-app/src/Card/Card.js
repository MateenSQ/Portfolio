import './Card.css'
import img from '../images/gardenGenieLogo.PNG'

function Card() {
    return (
        <div className="card">  
            <a href="https://garden-genie.netlify.app/" target="_blank"rel="noreferrer" >
            <header>Garden Genie</header>
            <img src={img} alt="Garden Genie Logo" />
            <p>A good app</p>
            </a>
        </div>
    )
}

export default Card