import './Contact.css';
import { useTranslation } from 'react-i18next';
import React, { useContext, useEffect, useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import purpleCheckmark from "../../assets/purple-coche.png";
import purplebigCheckmark from "../../assets/big-purple-coche.png";
import pinkCheckmark from "../../assets/pink-coche.png";
import pinkBigCheckmark from "../../assets/big-pink-coche.png";
import { ThemeContext } from '../../services/ThemeContext';

function Contact() {
    let { t } = useTranslation();
    const { theme } = useContext(ThemeContext);
    const [state, handleSubmit] = useForm("xzbnzpdj");
    const [checkmarkMobile, setCheckmarkMobile] = useState(Boolean);
    const h2Class = theme === 'light' ? 'dark-h2' : 'light-h2';
    const textClass = theme === 'light' ? 'dark-text' : 'light-text';
    const colorForm = theme === 'light' ? 'light-form' : 'dark-form';
    const cocheSrc = checkmarkMobile && theme === 'light' ? purpleCheckmark : checkmarkMobile && theme !== 'light' ? pinkCheckmark : !checkmarkMobile && theme === 'light' ? purplebigCheckmark : pinkBigCheckmark;
    const buttonClass = theme === 'light' ? 'dark-button' : 'light-button';

    useEffect(() => {
      window.innerWidth < 500 && setCheckmarkMobile(true);
      function handleScroll(e) {
        if(window.innerWidth < 500) {
            setCheckmarkMobile(true);
        } else {
            setCheckmarkMobile(false);
        }
      }
      window.addEventListener('resize', handleScroll);
      return () => window.removeEventListener('resize', handleScroll);
    }, [checkmarkMobile]);

    return (
        <div id='Contact' className='container_contact'>
            <h2 className={h2Class}>{t('contact.title')}</h2>
            { !state.succeeded ? <form className='form' onSubmit={handleSubmit}>
                <label className={textClass} htmlFor="name">
                    {t('contact.name')}
                </label>
                <input
                    id="name"
                    className={colorForm}
                    type="text" 
                    name="name"
                    placeholder={t("contact.enter-name")}
                    required
                />
                <ValidationError 
                    prefix="Name" 
                    field="name"
                    errors={state.errors}
                />
                <label className={textClass} htmlFor="email">
                    {t('contact.email')}
                </label>
                <input
                    id="email"
                    className={colorForm}
                    type="email" 
                    name="email"
                    placeholder={t('contact.enter-email')}
                    required
                />
                <ValidationError 
                    prefix="Email" 
                    field="email"
                    errors={state.errors}
                />
                <label className={textClass} htmlFor="message">
                    {t('contact.text')}
                </label>
                <textarea
                    id="message"
                    className={colorForm}
                    name="message"
                    placeholder={t('contact.enter-text')}
                    required
                />
                <ValidationError 
                    prefix="Message" 
                    field="message"
                    errors={state.errors}
                />
                <button className={buttonClass} type="submit" disabled={state.submitting}>
                    {t('contact.submit')}
                </button>
            </form> :
            <div className='container-checkmark'>
                <img src={ cocheSrc } alt={t('contact.checkmark')} />
                <p className={textClass}>{t('contact.checkmark-message')}</p>
            </div>}
        </div>
    )
}

export default Contact;