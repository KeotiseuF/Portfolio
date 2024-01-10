import './AboutMe.css';
import { useTranslation } from 'react-i18next';

function AboutMe() {
    let { t } = useTranslation();
    const linkOldPortfolio = t('about-me.title') === 'ABOUT ME' ? 'here' : 'ici';

    return (
        <div id='AboutMe' className='container_about-me'>
            <h2>{t('about-me.title')}</h2>
            <div className='container-presentation'>
                <p>{t('about-me.presentation.part1')}<a target='_blanket' href='https://keotiseuf.github.io/Old-portfolio/'>{linkOldPortfolio}.</a></p>
                <p>{t('about-me.presentation.part2')}</p>
                <p>{t('about-me.presentation.part3')}</p>
            </div>
        </div>
    )
}

export default AboutMe;