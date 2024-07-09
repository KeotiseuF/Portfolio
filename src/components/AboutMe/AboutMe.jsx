import './AboutMe.css';
import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { ThemeContext } from '../../services/ThemeContext';

function AboutMe() {
    let { t } = useTranslation();
    const { theme } = useContext(ThemeContext);
    const linkOldPortfolio = t('about-me.title') === 'ABOUT ME' ? 'here' : 'ici';
    const h2Class = theme === 'light' ? 'dark-h2' : 'light-h2';
    const textClass = theme === 'light' ? 'dark-text' : 'light-text';
    const linkOldClass = theme === 'light' ? 'link-old-class dark-text' : 'link-old-class light-text';
    const nbParagraph = Object.keys(t('about-me.presentation', {returnObjects: 'true'})); 

    return (
        <div id='AboutMe' className='container_about-me'>
            <h2 className={h2Class}>{t('about-me.title')}</h2>
            <div className='container-presentation'>
                { nbParagraph.map((part, id) => {
                    return (
                        <p className={textClass} key={part}>
                            {t(`about-me.presentation.${part}`)}
                            { id === 0 && <a className={linkOldClass} target='_blanket' href='https://keotiseuf.github.io/Old-portfolio/'>{linkOldPortfolio}</a>}
                            { id === 0 && '.'}
                        </p>
                    )
                })}
            </div>
        </div>
    )
}

export default AboutMe;