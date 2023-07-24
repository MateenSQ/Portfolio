import './Main.css'
import Card from '../Card/Card.js'
import GardenGenieImg from '../images/gardenGenieLogo.PNG'

function Main({showPage}) {

    const gardenGenieText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor at risus viverra adipiscing. Amet volutpat consequat mauris nunc congue nisi vitae. Eu sem integer vitae justo eget magna fermentum iaculis. Tempus quam pellentesque nec nam aliquam sem et tortor. Sed vulputate mi sit amet. Mi bibendum neque egestas congue quisque egestas diam in.'

    return (
        <main className={`text fade ${showPage ? 'fade-in' : 'fade-out'}`}>
                <h3 className="h3">Here you will find projects I have been involved in!</h3>

                 <Card 
                    aHref="https://garden-genie.netlify.app/"
                    header="Garden Genie"
                    desc={gardenGenieText}
                    imgSrc={GardenGenieImg}
                    imgAlt="Garden Genie Logo"
                 />

                 <Card 
                    aHref="https://garden-genie.netlify.app/"
                    header="Garden Genie"
                    desc={gardenGenieText}
                    imgSrc={GardenGenieImg}
                    imgAlt="Garden Genie Logo"
                 />
        </main>
    )
}

export default Main