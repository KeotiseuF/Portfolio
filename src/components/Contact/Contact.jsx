import './Contact.css';
import { useTranslation } from 'react-i18next';
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import checkmark from "../../assets/icon-coche.png";

function Contact() {
    let { t } = useTranslation();
    const [state, handleSubmit] = useForm("xzbnzpdj");

    return (
        <div id='Contact' className='container_contact'>
            <h2>{t('contact.title')}</h2>
            { !state.succeeded ? <form className='form' onSubmit={handleSubmit}>
                <label htmlFor="name">
                    {t('contact.name')}
                </label>
                <input
                    id="name"
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
                <label htmlFor="email">
                    {t('contact.email')}
                </label>
                <input
                    id="email"
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
                <label htmlFor="message">
                    {t('contact.text')}
                </label>
                <textarea
                    id="message"
                    name="message"
                    placeholder={t('contact.enter-text')}
                    required
                />
                <ValidationError 
                    prefix="Message" 
                    field="message"
                    errors={state.errors}
                />
                <button type="submit" disabled={state.submitting}>
                    {t('contact.submit')}
                </button>
            </form> :
            <div className='container-checkmark'>
                <img src={checkmark} alt={t('contact.checkmark')} />
                <p>{t('contact.checkmark-message')}</p>
            </div>}
        </div>
    )
}

export default Contact;