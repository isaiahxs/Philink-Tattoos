import React, { useState } from 'react';
import { useLanguage } from '../../LanguageContext';
import { englishContent, spanishContent } from './content';
// import Navigation from '../../Shared/Navigation';
// import Footer from '../../Shared/Footer';
// import salon_picture from '../../../assets/images/wide-shot-empty.jpg';
import philip from '../../assets/images/philip.png';
import { Link } from 'react-router-dom';
import map_pin from '../../assets/icons/map-pin.svg';
import phone from '../../assets/icons/phone-icon.svg';
import facebook from '../../assets/icons/facebook-logo.svg';
import instagram from '../../assets/icons/instagram.png';
import './Hero.css';

export default function GBHero() {
    const { currentLanguage, setCurrentLanguage } = useLanguage();

    const toggleLanguage = () => {
        setCurrentLanguage(currentLanguage === 'english' ? 'spanish' : 'english');
    };

    const content = currentLanguage === 'english' ? englishContent : spanishContent;

    // const scrollToSection = (sectionId) => {
    //     const sectionElement = document.getElementById(sectionId);
    //     const yOffset = -20;
    //     const topOffset = sectionElement.getBoundingClientRect().top + window.scrollY + yOffset;
    //     window.scrollTo({ top: topOffset, behavior: 'smooth' });
    //     sectionElement.scrollIntoView({ behavior: 'smooth' });
    // };

    const scrollToSection = (sectionId) => {
        const sectionElement = document.getElementById(sectionId);
        const yOffset = -100;
        const topOffset = sectionElement.getBoundingClientRect().top + window.scrollY + yOffset;
        window.scrollTo({ top: topOffset, behavior: 'smooth' });
    };

    return (
        <header className='header-container'>
            <div className='hero-section'>
                <div className='hero-information'>
                    {/* <button className='language-toggle-button' onClick={toggleLanguage}>
                        {currentLanguage === 'english' ? 'Español' : 'English'}
                    </button> */}
                    <h1 className='title fade1'>{content.title}</h1>
                    <h2 className='location fade1'>{content.location}</h2>
                    <button className='hero-language-toggle-button fade1' onClick={toggleLanguage}>
                        {currentLanguage === 'english' ? 'Español' : 'English'}
                    </button>
                    {/* <h3 className='description'>Experience the beauty and elegance of our salon.</h3> */}

                    <div className='hero-descriptions-container fade2'>
                        <h3 className='description'>
                            {content.description}
                        </h3>

                        <h3 className='description description-2'>
                            {content.description2}
                        </h3>

                        <h3 className='description description-hours'>
                            {content.hours}
                        </h3>

                        <h3 className='description description-hours description-hours-bottom'>
                            {content.hoursSat}
                        </h3>
                    </div>

                    {/*Walk-ins are welcome, but appointments are preferred. We look forward to seeing you soon!*/}

                    <div className='hero-buttons-container fade2'>
                        <button className='view-gallery-hero' onClick={() => scrollToSection('gallery')}>
                            {content.viewWork}
                        </button>

                        <button className='view-services-hero' onClick={() => scrollToSection('services')}>
                            {content.viewPrices}
                        </button>

                        {/* <button className='view-reviews-hero' onClick={() => scrollToSection('reviews')}>
                            {content.viewReviews}
                        </button> */}

                        {/* <a href="https://www.google.com/search?q=Isaula%27s+Beauty+Salon+LLC&sca_esv=560578390&ei=IBrsZPm8Ja-u5NoPyOmv-Aw&ved=0ahUKEwj5zLCNuv6AAxUvF1kFHcj0C88Q4dUDCBA&uact=5&oq=Isaula%27s+Beauty+Salon+LLC&gs_lp=Egxnd3Mtd2l6LXNlcnAiGUlzYXVsYSdzIEJlYXV0eSBTYWxvbiBMTEMyCxAuGIAEGMcBGK8BMgIQJjIIEAAYigUYhgMyCBAAGIoFGIYDMggQABiKBRiGAzIaEC4YgAQYxwEYrwEYlwUY3AQY3gQY4ATYAQFI32FQpgxYuV9wAngAkAEAmAFMoAHaBqoBAjEzuAEDyAEA-AEBwgIOEC4YgAQYxwEYrwEYsAPCAgsQABiKBRiGAxiwA8ICBRAAGKIEwgIKECEYoAEYwwQYCsICDRAuGA0YgAQYxwEYrwHCAhwQLhgNGIAEGMcBGK8BGJcFGNwEGN4EGOAE2AEBwgIIEAAYFhgeGAriAwQYASBBiAYBkAYDugYGCAEQARgU&sclient=gws-wiz-serp#lrd=0x89b7fcdd79a6aeed:0xa55be85257c1581f,3,,,," target='_blank' rel='noopener noreferrer'>
                            <button className='leave-review-hero'>{content.leaveReview}
                            </button>
                        </a> */}
                    </div>
                </div>

                <div className='hero-image-and-contact fade3'>
                    <div className='hero-image-container'>
                        <img src={philip} className='hero-image' alt="Isaula's Salon" />
                        <div className="gradient-overlay">
                            <div className='contact-container'>
                                <div className='contact-heading-container'>
                                    <h3 className='contact-heading-text'>{content.contactHeading}</h3>
                                </div>

                                <a href="https://www.google.com/maps/place/Isaula's+Beauty+Salon+LLC/@39.1592102,-76.6207809,15z/data=!4m6!3m5!1s0x89b7fcdd79a6aeed:0xa55be85257c1581f!8m2!3d39.1592102!4d-76.6207809!16s%2Fg%2F1v8l0hr7?entry=ttu"
                                    target='_blank' rel='noopener noreferrer'>
                                    <div className='footer-icon-container'>
                                        <p className='footer-icon-description'>
                                            <span>
                                                <img src={map_pin} className='footer-icon GB-map-icon' alt='Map Pin Icon' />
                                                7574 Ritchie Hwy, Glen Burnie, MD 21061
                                            </span>
                                        </p>
                                    </div>
                                </a>

                                <a href='tel:+7866307547'>
                                    <div className='footer-icon-container'>
                                        <img src={phone} className='footer-icon' alt='Phone Icon' />
                                        <p className='footer-icon-description'>
                                            (786) 630-7547
                                        </p>
                                    </div>
                                </a>

                                {/* <a href="https://www.facebook.com/IsaulasBeautySalonII" target='_blank' rel='noopener noreferrer'>
                                    <div className='footer-icon-container'>
                                        <img src={facebook} className='footer-icon' alt='Facebook Logo' />
                                        <p className='footer-icon-description'>Facebook</p>
                                    </div>
                                </a> */}

                                <a href='https://www.instagram.com/philink_tattoos/' target='_blank' rel='noopener noreferrer'>
                                    <div className='footer-icon-container'>
                                        <img src={instagram} className='footer-icon' alt='Instagram Logo' />
                                        <p className='footer-icon-description'>Instagram</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
