import './Card.css'
import img from '../images/gardenGenieLogo.PNG'

function Card() {
    return (
        <div>  
            <a className="card" href="https://garden-genie.netlify.app/" target="_blank"rel="noreferrer">
                <header className="cardHeader">Garden Genie</header>
                <div className="cardText">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor at risus viverra adipiscing. Amet volutpat consequat mauris nunc congue nisi vitae. Eu sem integer vitae justo eget magna fermentum iaculis. Tempus quam pellentesque nec nam aliquam sem et tortor. Sed vulputate mi sit amet. Mi bibendum neque egestas congue quisque egestas diam in.</p>
                </div>
                <img className="cardImage" src={img} alt="Garden Genie Logo" />
            </a>
        </div>
    )
}

export default Card