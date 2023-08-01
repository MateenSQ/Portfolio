import './Main.css'
import Card from '../Card/Card.js'
import GardenGenieImg from '../images/gardenGenieLogo.PNG'
import HandbookImg from '../images/handbookLogo.PNG'
function Main({showPage}) {

    const gardenGenieDesc = "Garden Genie by the team M.A.S.H.E.D. This was our final, 5 week long project at the School of Code. Using everything we've learnt during the boot camp AND more, we put it all in a project again - in the School of Code way - in random teams! Find a more detailed description and view things we did along the project like our FigJam and prototype on the GitHub repository's README.md"
    const onlineHandbookDesc = "Online Student Handbook - our first ever project at the School of Code. Given only a week, we were tasked with creating an app that solves a problem faced by fellow students. Given only a week to gather ideas, plan, create and present our app, it was great learning experience. Find out more about the process on the GitHub repository's README.md"

    return (
        <main className={`text fade ${showPage ? 'fade-in' : 'fade-out'}`}>
                <h3 className="h3">Here you will find projects I have been involved in!</h3>

                 <Card 
                    aHref="https://garden-genie.netlify.app/"
                    header="Garden Genie"
                    desc={gardenGenieDesc}
                    repoLink='https://github.com/MateenSQ/M.A.S.H.E.D_Garden_Genie'
                    imgSrc={GardenGenieImg}
                    imgAlt="Garden Genie Logo"
                 />

                 <Card 
                    aHref="https://student-handbook-bice.vercel.app/"
                    header="Online Student Handbook"
                    desc={onlineHandbookDesc}
                    repoLink='https://github.com/MateenSQ/bc14_w7_project-frontend-hackstreet-boys-Dan-Jo-Jordan-Mateen-Qasim'
                    imgSrc={HandbookImg}
                    imgAlt="Online Student Handbook intro"
                 />
        </main>
    )
}

export default Main