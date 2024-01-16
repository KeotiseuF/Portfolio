import './NavBar.css'
import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { ThemeContext } from '../../services/ThemeContext';

// Images
import pinkHome from '../../assets/pink-home.png';
import pinkProjects from '../../assets/pink-projects.png';
import pinkAboutMe from '../../assets/pink-about_me.png';
import pinkContact from '../../assets/pink-contact.png';
import purpleMain from '../../assets/purple-home.png';
import purpleProjects from '../../assets/purple-projects.png';
import purpleAboutMe from '../../assets/purple-about_me.png';
import purpleContact from '../../assets/purple-contact.png';

function NavBar () {
    let { t } = useTranslation();
    let { theme } = useContext(ThemeContext);

    const addColor = (value, srcImg = []) => {
        const src = theme === 'light' ? srcImg[0] : srcImg[1];
        const textClassLink = theme === 'light' ? 'light-text' : 'dark-text';
        const NavClass = theme === 'light' ? 'dark-background' : 'light-background';

        if(value === 'nav') {
            return NavClass;
        } else if(value === 'img') {
            return src;
        } else {
            return textClassLink;
        }
    }

    return (
        <nav className={addColor('nav')}>
            <ul className='ul_icon'>
                <li><a href="#Main"><img src={addColor('img', [pinkHome, purpleMain])} alt={t('nav-bar.icon-home')} className='icons-nav' /></a></li>
                <li><a href="#Projects"><img src={addColor('img', [pinkProjects, purpleProjects])} alt={t('nav-bar.icon-tasks')} className='icons-nav' /></a></li>
                <li><a href="#AboutMe"><img src={addColor('img', [pinkAboutMe, purpleAboutMe])} alt={t('nav-bar.icon-information')} className='icons-nav' /></a></li>
                <li><a href="#Contact"><img src={addColor('img', [pinkContact, purpleContact])} alt={t('nav-bar.icon-contact')} className='icons-nav' /></a></li>
            </ul>

            <ul className='ul_text'>
                <li><a className={addColor('text')} href="#Main">{t('nav-bar.home')}</a></li>
                <li><a className={addColor('text')} href="#Projects">{t('nav-bar.projects')}</a></li>
                <li><a className={addColor('text')} href="#AboutMe">{t('nav-bar.about-me')}</a></li>
                <li><a className={addColor('text')} href="#Contact">{t('nav-bar.contact')}</a></li>
            </ul>
        </nav>
    )
}

export default NavBar;