import { useLanguage } from '../../LanguageContext';
import { englishContent, spanishContent } from './content';
import { Link } from 'react-router-dom';
import logo from '../../assets/icons/gold-icon.png';
import map_pin from '../../assets/icons/map-pin.svg';
import phone from '../../assets/icons/phone-icon.svg';
// import email from '../../assets/icons/mail-icon.svg';
import instagram from '../../assets/icons/instagram.png';
import facebook from '../../assets/icons/facebook-logo.svg';
import './Footer.css';


{/* <li>
                <button className='nav-button' onClick={() => scrollToSection('services')}>
                    {content.services}
                </button>
            </li> */}
export default function Footer() {
    const { currentLanguage, setCurrentLanguage } = useLanguage();
    const content = currentLanguage === 'english' ? englishContent : spanishContent;

    const scrollToSection = (sectionId) => {
        const sectionElement = document.getElementById(sectionId);
        sectionElement.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className='footer-container' id='footer' >
            <div className='footer-section'>
                <section className='logo-section'>
                    <Link to='/'>
                        <img src={logo} className='big-logo' alt="Big Logo" onClick={() => scrollToTop()} />
                    </Link>
                </section>

                <section className='second-footer-section'>
                    <ul className='footer-options-container'>
                        <li className='footer-heading'>
                            Philink Tattoos
                        </li>
                        <div className='footer-options'>
                            <li>
                                <a href="https://www.google.com/maps/place/Sin+Fronteras/@38.9775203,-76.5394309,17z/data=!3m1!4b1!4m6!3m5!1s0x89b7f6ce8f43a82f:0x43022ee12cca4c62!8m2!3d38.9775162!4d-76.536856!16s%2Fg%2F1tpf80bs?entry=ttu" target='_blank' rel='noopener noreferrer'>
                                    <div className='footer-icon-container'>
                                        <p className='footer-icon-description'>
                                            <span>
                                                <img src={map_pin} className='footer-icon GB-map-icon' alt='Map Pin Icon' />
                                                7574 Ritchie Highway, Glen Burnie, 21061
                                            </span>
                                        </p>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href='tel:+7866307547'>
                                    <div className='footer-icon-container'>
                                        <img src={phone} className='footer-icon' alt='Phone Icon' />
                                        <p className='footer-icon-description'>
                                            (786) 630-7547
                                        </p>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <div className='footer-icon-container'>
                                    <p className='footer-icon-description'>{content.times}
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div className='footer-icon-container'>
                                    <p className='footer-icon-description'>{content.timesSat}
                                    </p>
                                </div>
                            </li>
                        </div>
                    </ul>
                </section>

                <section className='third-footer-section'>
                    <ul className='footer-options-container'>
                        <li className='footer-heading'>
                            {content.socials}
                        </li>

                        <div className='footer-options'>
                            <li>
                                <a href="https://www.instagram.com/philink_tattoos/" target='_blank' rel='noopener noreferrer'>
                                    <div className='footer-icon-container'>
                                        <img src={instagram} className='footer-icon' alt='Facebook Logo' />
                                        <p className='footer-icon-description'>Instagram</p>
                                    </div>
                                </a>
                            </li>

                            {/* <li>
                                <a href="https://www.facebook.com/sinfronterascafe/?ref=page_internal" target='_blank' rel='noopener noreferrer'>
                                    <div className='footer-icon-container'>
                                        <img src={facebook} className='footer-icon' alt='Facebook Logo' />
                                        <p className='footer-icon-description'>Facebook</p>
                                    </div>
                                </a>
                            </li> */}
                        </div>
                    </ul>
                </section>

            </div >
            <div className='credits-container'>
                <p className='credits-created-by'>{content.credits}</p>
                <a href='https://www.isaiahxs.com/' target='_blank' rel='noopener noreferrer' className='isaiah'>
                    Isaiah Sinnathamby
                </a>
            </div>
        </footer >
    )
}
