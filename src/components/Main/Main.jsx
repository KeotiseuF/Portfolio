import './Main.css';
import Header from '../../common/Header/Header';
import { useTranslation } from 'react-i18next';

// Images
import purpleLandscape from '../../assets/purple-landscape.png';
import miniCurt from '../../assets/mini-curt.png';
import iconGitHub from '../../assets/icon-github.png';
import iconLinkedin from '../../assets/icon-linkedin.png';
import iconMail from '../../assets/icon-mail.png';

function Main() {
  let { t } = useTranslation();

  return (
    <div id="Main">
      <Header/>
      <div className='container-img'>
        <img className='purple_landscape' src={purpleLandscape} alt={t('main.purple-landscape')} />
        <img className="mini_curt" src={miniCurt}  alt="mini curt" />
      </div>
      <div className='container-title'>
        <h1>
            FANCHONNA Curtis <br/>
            {t('main.developer')} FULL-STACK
        </h1>
        <div className='container-icons'>      
            <a href='https://github.com/KeotiseuF'>
              <img src={iconGitHub} alt={t('main.icon-github')} />
            </a>
            <a href='https://www.linkedin.com/in/f-curtis/'>
              <img src={iconLinkedin} alt={t('main.icon-linkedin')} />
            </a>
            <a href='mailto:f.curtis.dev@gmail.com'>
              <img src={iconMail} alt={t('main.icon-mail')} />
            </a>
        </div>
      </div>
      <div className='container_presentation'>
        <h2>{t('main.title-presentation')}</h2>
        <p>
          {t('main.presentation')}
        </p>
      </div>
    </div>
  );
}

export default Main;