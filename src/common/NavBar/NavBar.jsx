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
            <ul>
                <li><a href="#Main"><img src={iconMain} alt={t('nav-bar.icon-home')} /></a></li>
                <li><a href="#Projects"><img src={iconProjects} alt={t('nav-bar.icon-tasks')} /></a></li>
                <li><a href="#AboutMe"><img src={iconAboutMe} alt={t('nav-bar.icon-information')} /></a></li>
                <li><a href="#Contact"><img src={iconContact} alt={t('nav-bar.icon-contact')} /></a></li>
            </ul>
        </nav>
    )
}

export default NavBar;