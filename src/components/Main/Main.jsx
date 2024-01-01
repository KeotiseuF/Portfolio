import './Main.css';
import purpleLandscape from '../../assets/purple-landscape.png';
import miniCurt from '../../assets/mini-curt.png';
import Header from '../../common/Header/Header';
import { useTranslation } from 'react-i18next';

function Main() {
  let { t } = useTranslation();

  return (
      <div className="Main">
        <Header/>
        <div className='container_main-img'>
          <img className='purple_landscape' src={purpleLandscape} alt="purple landscape" />
          <img className="mini_curt" src={miniCurt}  alt="mini curt" />
      </div>
      <h1>
          FANCHONNA Curtis <br/>
          {t('main.developer')} FULL STACK
      </h1>
    </div>
  );
}

export default Main;