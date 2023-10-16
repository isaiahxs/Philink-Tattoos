import React, { useEffect, useRef } from 'react';
import Navigation from '../Navigation';
import Hero from '../Hero';
import Gallery from '../Gallery';
import Services from '../Services';
import Footer from '../Footer';
import './HomePage.css'

export default function HomePage() {

    // useEffect(() => {
    //     let scrollPos = 0;
    //     let targetScrollPos = 0;
    //     const easingFactor = 0.9;

    //     const smoothScroll = () => {
    //         scrollPos += (targetScrollPos - scrollPos) * easingFactor;
    //         window.scrollTo(0, scrollPos);
    //         requestAnimationFrame(smoothScroll);
    //     };

    //     const updateScrollPos = () => {
    //         targetScrollPos = window.scrollY;
    //     };

    //     window.addEventListener('scroll', updateScrollPos);
    //     smoothScroll();

    //     return () => {
    //         // Cleanup
    //         window.removeEventListener('scroll', updateScrollPos);
    //     };
    // }, []);

    const galleryRef = useRef(null);
    const servicesRef = useRef(null);
    const footerRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries, observer) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('show');
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.1,
            }
        );

        if (galleryRef.current) {
            observer.observe(galleryRef.current);
        }

        if (servicesRef.current) {
            observer.observe(servicesRef.current);
        }

        if (footerRef.current) {
            observer.observe(footerRef.current);
        }

        return () => {
            if (galleryRef.current) {
                observer.unobserve(galleryRef.current);
            }

            if (servicesRef.current) {
                observer.unobserve(servicesRef.current);
            }

            if (footerRef.current) {
                observer.unobserve(footerRef.current);
            }
        };
    }, []);

    return (
        <div>

            <Navigation />

            <Hero />

            <div ref={galleryRef} className='body-fade-in'>
                <Gallery />
            </div>
            <div ref={servicesRef} className='body-fade-in' id='services'>
                <Services />
            </div>

            {/* <CombinedMenu /> */}

            {/* <Reviews /> */}

            <div ref={footerRef} className='body-fade-in'>
                <Footer />
            </div>

        </div>
    )
}