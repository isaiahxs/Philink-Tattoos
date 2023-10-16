import { useLanguage } from '../../LanguageContext';
import { englishContent, spanishContent } from './content';
import './Services.css';

export default function Services() {
    const { currentLanguage, setCurrentLanguage } = useLanguage();
    const content = currentLanguage === 'english' ? englishContent : spanishContent;

    return (
        <div className="tattoo-piercing-section">
            <div className="header-container">
                <h2 className="header">{content.tattooHeader}</h2>
                {/* <p className="description services-description">{content.tattooDescription}</p> */}
                <ul className="services-list">
                    {content.tattooServices.map((service, index) => (
                        <li key={index}>{service}</li>
                    ))}
                </ul>
            </div>

            <div className="header-container">
                <h2 className="header">{content.piercingHeader}</h2>
                {/* <p className="description services-description">{content.piercingDescription}</p> */}
                <ul className="services-list">
                    {content.piercingServices.map((service, index) => (
                        <li key={index}>{service}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}