import './Projects.css';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import DataCards from '../../services/DataCards';

// Icons GitHub, link site and circular arrow
import iconGitHub from '../../assets/icon-github-purple.png';
import iconSite from '../../assets/icon-site.png';
import iconTurn from '../../assets/icon-turn.png';

function Projects() {
    let { t } = useTranslation();
    const data = DataCards;
    const [toTurn, setToTurn] = useState(undefined);
    const [checkClick, setCheckClick] = useState('');

    let projects = data.map(card => {
        const cardClasses = `card ${ checkClick === 'goBack' && toTurn === card.id ? 'turned-card' : (checkClick === 'goFront' && toTurn === card.id) || toTurn !== card.id ? 'init-card' : '' }`;
        const frontCardClasses = `front-card ${ checkClick === 'goBack' && toTurn === card.id ? 'hide-front-card' : (checkClick === 'goFront' && toTurn === card.id) || toTurn !== card.id ? 'init-front-card' : ''}`;
        const backCardClasses = `back-card ${ checkClick === 'goBack' && toTurn === card.id ? 'display-back-card' : (checkClick === 'goFront' && toTurn === card.id) || toTurn !== card.id ? 'init-back-card' : ''}`;
        const inBuild = card.id === 2 ? 'in-build' : 'display-link-site';

        return ( 
            <div key={card.id} className={cardClasses}>
                <div className={frontCardClasses}>
                    <div className='container-img-project'>
                        <img src={ card.url_image } alt={ card.alt } />
                    </div>
                    <div className='container-details-card'>
                        <h3>{ card.title }</h3>
                        <div className='container-stack'>
                            { displayStacks(card.stacks) }
                        </div>
                        <div className='container-links'>
                            <div><a href={ card.lien_github }><img className='icon-card' src={iconGitHub} alt="lien github" /></a></div>
                            <div className={inBuild}><a href={ card.lien_site }><img className='icon-card' src={iconSite} alt="lien site" /></a></div>
                            <div><button onClick={() => turnCard(card.id, setCheckClick('goBack'))}><img className='icon-card' src={iconTurn} alt="circular arrow" /></button></div>
                        </div>
                    </div>
                </div>
                <div className={backCardClasses}>
                    <p className='text-card'>{ t(`projects.cards.${card.description}`) }</p>
                    <div><button onClick={() => turnCard(card.id, setCheckClick('goFront'))}><img className=" icon-card circularArrow" src={iconTurn} alt="circular arrow" /></button></div>
                </div>
            </div> 
        )
    })

    function displayStacks(stacks) {
        let listStacks = stacks.map((stack, index) => <img className='icon-card' key={index} src={ stack.icon } alt={ stack.alt } />);
        return listStacks;
    }

    function turnCard(id) {
        setToTurn(id);
    };

    return (
        <div id="Projects" className='container_projects'>
            <h2>{t('projects.title')}</h2>
            <div className='container-cards'>
                { projects }
            </div>
        </div>
    )
}

export default Projects;