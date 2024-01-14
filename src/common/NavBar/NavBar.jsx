import './NavBar.css'
import { useTranslation } from 'react-i18next';

// Images
import iconMain from '../../assets/icon-main.png';
import iconProjects from '../../assets/icon-projects.png';
import iconAboutMe from '../../assets/icon-about_me.png';
import iconContact from '../../assets/icon-contact.png';

function NavBar () {
    let { t } = useTranslation();

    return (
        <nav>
            <ul className='ul_icon'>
                <li><a href="#Main"><img src={iconMain} alt={t('nav-bar.icon-home')} className='icons-nav' /></a></li>
                <li><a href="#Projects"><img src={iconProjects} alt={t('nav-bar.icon-tasks')} className='icons-nav' /></a></li>
                <li><a href="#AboutMe"><img src={iconAboutMe} alt={t('nav-bar.icon-information')} className='icons-nav' /></a></li>
                <li><a href="#Contact"><img src={iconContact} alt={t('nav-bar.icon-contact')} className='icons-nav' /></a></li>
            </ul>
            
            <ul className='ul_text'>
                <li><a href="#Main">{t('nav-bar.home')}</a></li>
                <li><a href="#Projects">{t('nav-bar.projects')}</a></li>
                <li><a href="#AboutMe">{t('nav-bar.about-me')}</a></li>
                <li><a href="#Contact">{t('nav-bar.contact')}</a></li>
            </ul>
        </nav>
    )
}

export default NavBar;