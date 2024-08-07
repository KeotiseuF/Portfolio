import './Projects.css';
import { useContext, useState } from 'react';
import { useTranslation } from 'react-i18next';
import DataCards from '../../services/DataCards';
import { ThemeContext } from '../../services/ThemeContext';

// Icons GitHub, link site and circular arrow
import purpleGitHub from '../../assets/purple-github.png';
import purpleIconSite from '../../assets/purple-icon-site.png';
import purpleIconTurn from '../../assets/purple-icon-turn.png';
import pinkGitHub from '../../assets/pink-github.png';
import pinkIconSite from '../../assets/pink-icon-site.png';
import pinkIconTurn from '../../assets/pink-icon-turn.png';

function Projects() {
    let { t } = useTranslation();
    const cards = DataCards;
    const [toTurn, setToTurn] = useState(undefined);
    const { theme } = useContext(ThemeContext)
    const [displayFront, setDisplayFront] = useState(true);

    const addColor = (value, srcImg = []) => {
        const h2Class = theme === 'light' ? 'dark-h2 dark-h2-tablet' : 'light-h2 light-h2-tablet';
        const cardClass = theme === 'light' ? 'card light-card' : 'card dark-card';
        const build = theme === 'light' ? 'dark-in-build' : 'light-in-build';
        const siteClass = theme === 'light' ? 'dark-link-site' : 'light-link-site';
        const containerImg = theme === 'light' ? 'container-img-project dark-container-img' : 'container-img-project light-container-img';
        const h3Class = theme === 'light' ? 'dark-h3' : 'light-h3';
        const src = theme === 'light' ? srcImg[0] : srcImg[1];
        const textClass = theme === 'light' ? 'size-text-card dark-text' : 'size-text-card light-text';

        if(value === 'titleH2') {
            return h2Class;
        } else if(value === 'card') {
            return cardClass;
        } else if(value === 'build') {
            return build;
        } else if(value === 'site') {
            return siteClass;
        } else if(value === 'containerImg') {
            return containerImg;
        } else if(value === 'titleH3') {
            return h3Class;
        } else if(value === 'img') {
            return src;
        } else {
            return textClass;
        }
    }

    // Create Card;
    let projects = cards.map(card => {
        const cardClasses = `${addColor('card')} ${ !displayFront && toTurn === card.id ? 'turned-card' : (displayFront && toTurn === card.id) || toTurn !== card.id ? 'init-card' : ''}`;
        const frontCardClasses = `front-card ${ !displayFront && toTurn === card.id ? 'hide-front-card' : (displayFront && toTurn === card.id) || toTurn !== card.id ? 'init-front-card' : ''}`;
        const backCardClasses = `back-card ${ !displayFront && toTurn === card.id ? 'display-back-card' : (displayFront && toTurn === card.id) || toTurn !== card.id ? 'init-back-card' : ''}`;

        return ( 
            <div key={card.id} className={cardClasses}>
                <div className={frontCardClasses}>
                    <div className={addColor('containerImg')}>
                        <img src={ card.url_image } alt={ card.alt } />
                    </div>
                    <div className='container-details-card'>
                        <h3 className={addColor('titleH3')}>{ card.title }</h3>
                        <div className='container-stack'>
                            { displayStacks(card.stacks) }
                        </div>
                        <div className='container-links'>
                            <div><a href={ card.lien_github } target='_blanket'><img className='icon-card' src={addColor('img', [purpleGitHub, pinkGitHub])} alt="lien github" /></a></div>
                            <div className='isplay-link-site'><a className={addColor('site')} href={ card.lien_site } target='_blanket'><img className='icon-card' src={addColor('img', [purpleIconSite, pinkIconSite])} alt="lien site" /></a></div>
                            <div><button className='turn-button' onClick={() => turnCard(card.id, false)}><img className='icon-card' src={addColor('img', [purpleIconTurn, pinkIconTurn])} alt="circular arrow" /></button></div>
                        </div>
                    </div>
                </div>
                <div className={backCardClasses}>
                    <p className={addColor('text')}>{ t(`projects.cards.${card.description}`) }</p>
                    <div><button className='turn-button' onClick={() => turnCard(card.id, true)}><img className=" icon-card circularArrow" src={addColor('img', [purpleIconTurn, pinkIconTurn])} alt="circular arrow" /></button></div>
                </div>
            </div> 
        )
    })

    function displayStacks(stacks) {
        let listStacks = stacks.map((stack, index) => <img className='icon-card' key={index} src={ stack.icon } alt={ stack.alt } />);
        return listStacks;
    }

    function turnCard(id, checkSide) { 
        setToTurn(id);
        setDisplayFront(checkSide);
    }

    return (
        <div id="Projects" className='container_projects'>
            <h2 className={addColor('titleH2')}>{t('projects.title')}</h2>
            <div className='container-cards'>
                { projects }
            </div>
        </div>
    )
}

export default Projects;