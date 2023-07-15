import './Main.css'
import Card from '../Card/Card.js'

function Main({showPage}) {
    return (
        <main className={`text fade ${showPage ? 'fade-in' : 'fade-out'}`}>
                <h3 className="h3">Here you will find projects I have been involved in!</h3>

                <Card />
        </main>
    )
}

export default Main