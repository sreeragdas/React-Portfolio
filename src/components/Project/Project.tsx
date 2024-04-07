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
              <h3>Medimaze-PACS (Primary Agricultural Credit Societies ) </h3>
              <p>
              Designed a PACS Viewer to transform medical image interpretation and analysis. Leveraging Cornerstone.js, I enhanced image loading speed by 60% and improved user interface responsiveness. Additionally, I integrated OAuth for secure access, introduced DICOM report generation, and enabled TMTV mode for advanced tumor volume analysis, driving a 50% increase in diagnostic precision.
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
              AI accessibility was revitalized through the transformation of Dialogue.ai, unveiling a secure platform tailored for customized file interactions. Spearheading robust UI design led to a 30% increase in user engagement, while integration of frontend functionalities with Django APIs resulted in a 40% performance improvement through seamless teamwork and collaboration. Utilization of React Js, Mobx, and Typescript technologies democratized AI-powered data analysis, catering to users of all technical proficiency levels.
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
              
              </div>
            </header>
            <div className="body">
              <h3>Gym Application</h3>
              <p>
              Designed and developed a gym application featuring personalized workout plans, progress tracking, and nutrition guidance. Employed robust programming languages to ensure seamless functionality across various platforms. Ensured user-friendly interfaces and incorporated feedback-driven updates for continuous improvement.
              </p>
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
              Crafted an immersive Dream Traveller website offering curated travel experiences worldwide. Seamlessly blending captivating visuals, user-friendly navigation, and personalized recommendations to inspire unforgettable journeys. Leveraged innovative technologies for seamless booking and exploration
              </p>
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