import { useLanguage } from '../../LanguageContext';
import { englishContent, spanishContent } from './content';

// strip 1
import clock from '../../assets/images/clock-tat.jpeg';
import flag from '../../assets/images/flag-tat.jpeg';
import leg from '../../assets/images/leg-tat.jpeg';
import lion from '../../assets/images/lion-tat.jpeg';
import jesus from '../../assets/images/jesus.png';
import tree from '../../assets/images/tree.png';

// strip 2
import calf from '../../assets/images/calf.png';
import dragon from '../../assets/images/dragon.png';
import eagle from '../../assets/images/eagle.png';
import ear from '../../assets/images/ear.png';
import hourglass from '../../assets/images/hourglass.png';
import name from '../../assets/images/name.png';
import './Gallery.css';

export default function Gallery() {
    const { currentLanguage, setCurrentLanguage } = useLanguage();
    const content = currentLanguage === 'english' ? englishContent : spanishContent;

    return (
        <div className='gallery-section'>
            <h2 className='gallery-header'>{content.header}</h2>
            <h3 className='gallery-subheading'>
                {content.subheader}
                <a className='view-more-ig' href='https://www.instagram.com/philink_tattoos/' target='_blank' rel='noopener noreferrer'>
                    instagram
                </a>
            </h3>

            <section className='gallery-1'>
                <div className='slider'>
                    <div className='slide-track'>
                        <div className='img-container slide'>
                            <img className='slide-img' src={clock} alt='Slide Image' />
                        </div>

                        <div className='img-container slide'>
                            <img className='slide-img' src={flag} alt='Slide Image' />
                        </div>

                        <div className='img-container slide'>
                            <img className='slide-img' src={leg} alt='Slide Image' />
                        </div>

                        <div className='img-container slide'>
                            <img className='slide-img' src={lion} alt='Slide Image' />
                        </div>

                        <div className='img-container slide'>
                            <img className='slide-img' src={jesus} alt='Slide Image' />
                        </div>

                        <div className='img-container slide'>
                            <img className='slide-img' src={tree} alt='Slide Image' />
                        </div>

                        <div className='img-container slide'>
                            <img className='slide-img' src={clock} alt='Slide Image' />
                        </div>

                        <div className='img-container slide'>
                            <img className='slide-img' src={flag} alt='Slide Image' />
                        </div>

                        <div className='img-container slide'>
                            <img className='slide-img' src={leg} alt='Slide Image' />
                        </div>

                        <div className='img-container slide'>
                            <img className='slide-img' src={lion} alt='Slide Image' />
                        </div>

                        <div className='img-container slide'>
                            <img className='slide-img' src={jesus} alt='Slide Image' />
                        </div>

                        <div className='img-container slide'>
                            <img className='slide-img' src={tree} alt='Slide Image' />
                        </div>
                    </div>
                </div>
            </section>

            <section className='gallery-2'>
                <div className='slider'>
                    <div className='slide-track'>
                        <div className='img-container slide'>
                            <img className='slide-img' src={calf} alt='Slide Image' />
                        </div>

                        <div className='img-container slide'>
                            <img className='slide-img' src={dragon} alt='Slide Image' />
                        </div>

                        <div className='img-container slide'>
                            <img className='slide-img' src={eagle} alt='Slide Image' />
                        </div>

                        <div className='img-container slide'>
                            <img className='slide-img' src={ear} alt='Slide Image' />
                        </div>

                        <div className='img-container slide'>
                            <img className='slide-img' src={hourglass} alt='Slide Image' />
                        </div>

                        <div className='img-container slide'>
                            <img className='slide-img' src={name} alt='Slide Image' />
                        </div>

                        <div className='img-container slide'>
                            <img className='slide-img' src={calf} alt='Slide Image' />
                        </div>

                        <div className='img-container slide'>
                            <img className='slide-img' src={dragon} alt='Slide Image' />
                        </div>

                        <div className='img-container slide'>
                            <img className='slide-img' src={eagle} alt='Slide Image' />
                        </div>

                        <div className='img-container slide'>
                            <img className='slide-img' src={ear} alt='Slide Image' />
                        </div>

                        <div className='img-container slide'>
                            <img className='slide-img' src={hourglass} alt='Slide Image' />
                        </div>

                        <div className='img-container slide'>
                            <img className='slide-img' src={name} alt='Slide Image' />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}