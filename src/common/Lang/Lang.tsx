import './Lang.css';
import React, { useState } from "react";
import { useTranslation } from 'react-i18next';
import { Language } from '../../services/Language.ts';
 
const Lang = ({theme}) => {
    const { i18n } = useTranslation();
    const [lang, setLang] = useState<Language>(i18n.language as Language);
    const [displayLanguages, setDisplayLanguages] = useState(false);
    const [langSelect, setLangSelect] = useState(lang as String);
    const classButton = theme === 'light' ? 'light-button-header' : 'dark-button-header';

    window.addEventListener('click', (event: Event) => {
        const target = event.target as HTMLButtonElement;
        if(target.id !== 'button-languages') setDisplayLanguages(false);
    })

    function displayLang() { 
        setDisplayLanguages(!displayLanguages);
    }

    function changeLanguage (language: string) {
        switch (language) {
            case Language.EN:
                setLang(Language.EN);
                i18n.changeLanguage(Language.EN);
                break;
            case Language.FR:
            default:
                setLang(Language.FR);
                i18n.changeLanguage(Language.FR);
                break;
        }
        setLangSelect(language);
    }
    
    return (
        <div>
            <div>
                <button id="button-languages" className={classButton} onClick={displayLang}>
                    { lang.toUpperCase() }
                    { displayLanguages && 
                    <ul>
                        { langSelect !== 'fr' && <li onClick={() => changeLanguage(Language.FR)}>FR</li> }
                        { langSelect !== 'en' && <li onClick={() => changeLanguage(Language.EN)}>EN</li> }
                    </ul> }
                </button>
            </div>
        </div>
    )
}
 
export default Lang;