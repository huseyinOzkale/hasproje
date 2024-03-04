import React, { useEffect, useState } from 'react'
import '/src/css/footer.css'
import { FaRegEnvelope } from 'react-icons/fa';
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import CounUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger'

const Footer = () => {
    const [counterOn, setCounterOn] = useState(false);
    useEffect(() => {
        // Sayfanın yüklenmesi durumunda sayaçları başlat
        setCounterOn(true);

        // Temizlik
        return () => {
            setCounterOn(false); // Sayaçları durdur
        };
    }, []);

    return (
        <div className='b'>
            <section>
                <div className='container-fluid'>
                    <div className='fluid-1'>
                        <div className='fluid'>
                            <div className='company'>
                                <h1>COMPANY IN NUMBERS</h1>
                            </div>
                            <div className='sayac'>
                                <div className='daire'>
                                    <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                                        <p>
                                            {counterOn && <CounUp start={0} end={3820} duration={2} delay={0} className='timer' formattingFn={(value) => Math.floor(value)} />}

                                        </p>
                                    </ScrollTrigger>
                                    <p className='p'>DIFFERENT PRODUCT</p>
                                </div>
                            </div>
                            <div className='sayac'>
                                <div className='daire'>
                                    <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                                        <p>
                                            {counterOn && <CounUp start={0} end={31} duration={2} delay={0} className='timer' formattingFn={(value) => Math.floor(value)} />}
                                        </p>
                                    </ScrollTrigger>
                                    <p className='p'>YEARS OF EXPERIENCE</p>
                                </div>
                            </div>
                            <div className='sayac'>
                                <div className='daire'>
                                    <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                                        <p>
                                            {counterOn && <CounUp start={0} end={76} duration={2} delay={0} className='timer' formattingFn={(value) => Math.floor(value)} />}
                                        </p>
                                    </ScrollTrigger>
                                    <p className='p'>DIFFERENT COUNTRIES</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <footer>
                <div className="row">
                    <div className="col">
                        <img src="/assets/image/logo-hasc-white.png" className='logo' />
                        <p className='location'>Organize Sanayi Bölgesi 18. Cadde No 21
                            Kayseri, TÜRKİYE 38070</p>
                    </div>
                    <div className="col">
                        <h3>Office <div className="underline"><span></span></div></h3>
                        <p className='email-id'>kablo@hascelik.com.tr</p>
                        <p className='email-id'>hascelikkablo@hs01.kep.tr</p>
                        <h4 className='communication'>F: +90 352 321 18 29</h4>
                        <h4 className='communication'>T: +90 352 321 15 55</h4>
                    </div>
                    <div className="col">
                        <h3>Links <div className="underline"><span></span></div></h3>
                        <ul>
                            <li><a href="">Home</a></li>
                            <li><a href="">Services</a></li>
                            <li><a href="">About us</a></li>
                            <li><a href="">Features</a></li>
                            <li><a href="">Contacts</a></li>
                        </ul>
                    </div>
                    <div className="col">
                        <h3>Holding <div className="underline"><span></span></div></h3>
                        <img src="/assets/image/demiryaka-white.png" alt="logo" className='logo' />
                        <div className="social-icons">
                            <a href="#" className='fc'><i><FaFacebookF /></i></a>
                            <a href="#" className='tw'><i><FaXTwitter /></i></a>
                            <a href="#" className='wp'><i ><FaWhatsapp /></i></a>
                            <a href="#" className='in'><i ><FaInstagram /></i></a>
                        </div>
                    </div>
                </div>
                <hr />
                <p className='copyright'>Demiryaka Holding ©2020
                    All rights reserved.</p>
            </footer>
        </div>
    )
}

export default Footer