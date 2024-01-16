import './Main.css';
import Header from '../../common/Header/Header';
import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { ThemeContext } from '../../services/ThemeContext';

// Images
import purpleLandscape from '../../assets/purple-landscape.png';
import miniCurt from '../../assets/mini-curt.png';
import pinkGitHub from '../../assets/pink-full-github.png';
import pinkLinkedin from '../../assets/pink-linkedin.png';
import pinkMail from '../../assets/pink-mail.png';
import purpleGitHub from '../../assets/purple-full-github.png';
import purpleLinkedin from '../../assets/purple-linkedin.png';
import purpleMail from '../../assets/purple-mail.png';

function Main() {
  let { t } = useTranslation();
  let { theme } = useContext(ThemeContext);
  
  const addColor = (value, srcImg = []) => {
    const landscapeClass = theme === 'light' ? 'purple_landscape' : 'purple_landscape dark-purple_landscape';
    const h1Class = theme === 'light' ? 'light-text' : 'dark-text';
    const src = theme === 'light' ? srcImg[0] : srcImg[1];
    const h2Class = theme === 'light' ? 'dark-h2 dark-h2-tablet' : 'light-h2 light-h2-tablet';
    const textClass = theme === 'light' ? 'dark-text' : 'light-text';

    if(value === 'landscape') {
      return landscapeClass;
    } else if(value === 'titleH1') {
      return h1Class;
    } else if(value === 'img') {
      return src;
    } else if(value === 'titleH2') {
      return h2Class;
    } else {
      return textClass;
    }
  }
  
  return (
    <div id="Main" className="main">
      <Header/>
      <div className='container-img'>
        <img className={addColor('landscape')} src={purpleLandscape} alt={t('main.purple-landscape')} />
        <img className="mini_curt" src={miniCurt}  alt="mini curt" />
        <div className='container-title'>
        <h1 className={addColor('titleH1')}>
            FANCHONNA Curtis <br/>
            {t('main.developer')} FULL-STACK
        </h1>
        <div className='container-icons'>      
            <a href='https://github.com/KeotiseuF'>
              <img src={addColor('img', [pinkGitHub, purpleGitHub])} alt={t('main.icon-github')} />
            </a>
            <a href='https://www.linkedin.com/in/f-curtis/'>
              <img src={addColor('img', [pinkLinkedin, purpleLinkedin])} alt={t('main.icon-linkedin')} />
            </a>
            <a href='mailto:f.curtis.dev@gmail.com'>
              <img src={addColor('img', [pinkMail, purpleMail])} alt={t('main.icon-mail')} />
            </a>
        </div>
      </div>
      </div>
      <div className='container_presentation'>
        <h2 className={addColor('titleH2')}> {t('main.title-presentation')} </h2>
        <p className={addColor('texte')}>
          {t('main.presentation')}
        </p>
      </div>
    </div>
  )
}

export default Main;