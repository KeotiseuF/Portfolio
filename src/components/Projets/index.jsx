import DatasProjets from "../../utils/datas/Projets";
import { useEffect, useRef, } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ImgRectangle from "../../images/transformRectangle"
import "../../utils/style/CSS/Cards.css"
import { StyledSection, StyledFrameProjets } from "../../utils/style/JSX/Projets"
import Lenis from '@studio-freight/lenis'
import { Transition } from "../Transitions"

function Projets () {
    const animeProjets = useRef();

    useEffect(() => 
    {    
        for(let i in DatasProjets)
        {
            const frameProjets = document.getElementById("frame_projets") 
            
            const card = document.createElement("div")
            card.className = "card"
            frameProjets.appendChild(card)
                            
            ImgRectangle(i);

            const frameDatasProjets = document.createElement("div")
            frameDatasProjets.className = "frame_datas_projets"
            card.appendChild(frameDatasProjets)

            const frameImg = document.createElement("div")
            frameImg.className = "frame_img"
            frameDatasProjets.appendChild(frameImg)
            
            const imgCard = document.createElement("img")
            imgCard.setAttribute("src", DatasProjets[i].url_image)
            imgCard.setAttribute("alt", DatasProjets[i].alt)
            imgCard.setAttribute("id", "img_" + DatasProjets[i].id)
            frameImg.appendChild(imgCard)

            const container = document.createElement("div")
            container.className = "container"
            frameDatasProjets.appendChild(container)

            const title = document.createElement("h3")
            title.innerHTML = DatasProjets[i].title
            container.appendChild(title)

            const lienDescription = document.createElement("p")
            lienDescription.innerHTML = "Description :"
            container.appendChild(lienDescription)

            const description = document.createElement("a")
            description.setAttribute("href", "#")
            description.innerHTML = " ici"
            description.setAttribute("id", `description_${DatasProjets[i].id}`)
            lienDescription.appendChild(description)

            Transition(i)
            
            const lienGithub = document.createElement("p")
            lienGithub.innerHTML = "Github :"
            container.appendChild(lienGithub)
            
            const github = document.createElement("a")
            github.setAttribute("href", DatasProjets[i].lien_github)
            github.innerHTML = " ici"
            lienGithub.appendChild(github)
            
            const lienProjet = document.createElement("p")
            lienProjet.innerHTML = "Url projet :"
            container.appendChild(lienProjet)

            const projet = document.createElement("a")
            projet.setAttribute("href", DatasProjets[i].lien_site)
            projet.innerHTML = " ici"
            lienProjet.appendChild(projet)
        } 
          
        gsap.registerPlugin(ScrollTrigger);

        const paths = [...document.querySelectorAll('path.path-anim')];
        
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
            direction: 'vertical', // vertical, horizontal
            gestureDirection: 'vertical', // vertical, horizontal, both
            smooth: true,
            mouseMultiplier: 1,
            smoothTouch: false,
            touchMultiplier: 2,
            infinite: false,
          })
          
          function raf(time) {
            lenis.raf(time)
            requestAnimationFrame(raf)
          }
          
          requestAnimationFrame(raf)

          paths.forEach(el => {
            const svgEl = el.closest('svg');
            const pathTo = el.dataset.pathTo;
            
            gsap.timeline({
                scrollTrigger: {
                    trigger: svgEl,
                    start: "bottom bottom", // when the top of the trigger hits the top of the viewport
                    end: "+=300",
                    scrub: true,                    
                }
            })
            .to(".transform_rectangle", {
                ease: 'none',
                attr: { d: pathTo }
            });
        });
    }, [])
  
  
    return(
        <StyledSection id="projets">
            <h2>Projets</h2>
            <StyledFrameProjets className="under_section" id="frame_projets" ref={animeProjets} />
        </StyledSection>
    )
}

export default Projets;