import { Container } from "./styles";
// import githubIcon from "../../assets/github.svg"
// import DownloadApp from '../../assets/download.png'
import externalLink from "../../assets/external-link.svg"
import ScrollAnimation from "react-animate-on-scroll";


export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">

  

      <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
             
              </div>
            </header>
            <div className="body">
              <h3>PACS-Viewer (Picture Archiving and and Communication System) </h3>
              <p>
              Designed a PACS Viewer with Cornerstone.js, enhancing image loading speed by 60%, improving UI responsiveness, integrating OAuth, enabling DICOM report generation, and TMTV mode, resulting in a 50% increase in diagnostic precision.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React </li>
                <li>Typescript </li>
                <li>Mobx</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                {/* <a href="https://madewithluv.in/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a> */}
              </div>
            </header>
            <div className="body">
              <h3>Dialogue.ai</h3>
              <p>
              Revitalized AI accessibility with Dialogue.ai, creating a secure platform for custom file interactions. Led UI design, increasing user engagement by 30%, and integrated Django APIs, boosting performance by 40%. Utilized React JS, Mobx, and TypeScript to democratize AI-powered data analysis for all user proficiency levels.              </p>
            </div>
            <footer>
              <ul className="tech-list">
              <li>React </li>
                <li>Typescript </li>
                <li>Mobx</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
              
              </div>
            </header>
            <div className="body">
              <h3>Gym Application</h3>
              <p>
              Designed and developed a gym app with personalized workout plans, progress tracking, and nutrition guidance. Ensured cross-platform functionality, user-friendly interfaces, and continuous improvements through feedback-driven updates.              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React</li>
                <li>Typescript</li>
                <li>Node</li>
                <li>Redux</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

     

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
              
              </div>
            </header>
            <div className="body">
              <h3>Dream Traveller - Website</h3>
              <p>

              Crafted the Dream Traveller website with curated global travel experiences, captivating visuals, user-friendly navigation, and personalized recommendations. Leveraged innovative technologies for seamless booking and exploration.              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React</li>
                <li>Typescript</li>
                <li>Node </li>
                <li>Redux</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        


        
       

      </div>
    </Container>
  );
}