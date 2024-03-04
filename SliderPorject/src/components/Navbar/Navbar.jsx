import React, { useEffect } from 'react'
import '/src/css/navbar.css'


const Navbar = () => {
    useEffect(() => {
        const menuBtn = document.querySelector(".menu-btn");
        const navigation = document.querySelector(".navigation");

        menuBtn.addEventListener("click", () => {
            menuBtn.classList.toggle("active");
            navigation.classList.toggle("active");
        });

        const btns = document.querySelectorAll(".nav-btn");
        const slides = document.querySelectorAll(".video-slide");
        const contents = document.querySelectorAll(".content");

        var sliderNav = function (manuel) {
            btns.forEach((btn) => {
                btn.classList.remove("active");
            });

            slides.forEach((slide) => {
                slide.classList.remove("active");
            });

            contents.forEach((content) => {
                content.classList.remove("active");
            });

            btns[manuel].classList.add("active");
            slides[manuel].classList.add("active");
            contents[manuel].classList.add("active");
        }

        btns.forEach((btn, i) => {
            btn.addEventListener("click", () => {
                sliderNav(i);
            });
        });

        // Event Listener'ları kaldırmak için useEffect içinde bir cleanup fonksiyonu kullanın
        return () => {
            menuBtn.removeEventListener("click", () => {
                menuBtn.classList.toggle("active");
                navigation.classList.toggle("active");
            });

            btns.forEach((btn, i) => {
                btn.removeEventListener("click", () => {
                    sliderNav(i);
                });
            });
        };
    }, []);
    return (

        <div class="main-page">

            <header className='he'>
                <div className="brand"><a href=""><img src="/assets/image/logo-hasc-white.png" alt="logo" /></a></div>
                <div className="menu-btn"></div>
                <div className="navigation">
                    <div className="navigation-items">
                        <a href="#">About</a>
                        <a href="#">Products</a>
                        <a href="#">Catalogs</a>
                        <a href="#">Quality</a>
                        <a href="#">Referances</a>
                        <a href="#">Contacts</a>
                    </div>
                </div>
            </header>

            <section className="home">
                <video className="video-slide active" src="videos/video1 (2).mp4" autoPlay muted loop></video>
                <video className="video-slide" src="videos/video2 (2).mp4" autoPlay muted loop></video>
                <video className="video-slide active" src="videos/video3 (2).mp4" autoPlay muted loop></video>
                <div className="content active">
                    <h1>We're trans world's energy</h1>
                    <p>Hascelik Kablo, who is one of Turkey's largest cable manufacturer in Turkey and  also Europe.<br /> The activities were started in 1989 Kayseri's Hacılar district and moved to its modern facilities invested on 130.000m2 area where consisting of 75.000m2 building, in Kayseri Organized Industrial Zone during the year of 2008.</p>
                    <a href="#">Read More</a>
                </div>
                <div className="content">
                    <h1>We're trans world's energy</h1>
                    <p>Today, the company is Turkey's largest private industrial company, who is operating with <br /> 600 employees and active in 65 countries.</p>
                    <a href="#">Read More</a>
                </div>
                <div class="content">
                    <h1>We're the bast company</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus nobis ex, unde magni magnam ullam numquam sunt? Cum eligendi reprehenderit ratione.</p>
                    <a href="#">Read More</a>
                </div>
                <div className="media-icons">
                    <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                    <a href="#"><i className="fa-brands fa-x-twitter"></i></a>
                    <a href="#"><i className="fa-brands fa-instagram"></i></a>
                    <a href="#"><i className="fa-brands fa-whatsapp"></i></a>
                </div>
            </section>
            <div className="slider-navigation">
                <div className="nav-btn active"></div>
                <div className="nav-btn"></div>
                <div className="nav-btn"></div>
            </div>

            <div className="containe">
                <div className="row">
                    <div className="image">
                        <img src="/assets/image/1.jpg" alt="image" />
                        <div className="details">
                            <h2>0,6-1KV <span>CABLES</span></h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <div className="more">
                                <a href="#" className="read-more">Read <span>More</span></a>
                                <div className="icon-links">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="image">
                        <img src="/assets/image/2.jpg" alt="" />
                        <div className="details">
                            <h2>6-45KV <span>CABLES</span></h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <div className="more">
                                <a href="#" className="read-more">Read <span>More</span></a>
                                <div className="icon-links">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="image">
                        <img src="/assets/image/3.jpg" alt="" />
                        <div className="details">
                            <h2>HALOGEN <span>CABLES</span></h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <div className="more">
                                <a href="#" className="read-more">Read <span>More</span></a>
                                <div className="icon-links">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="image">
                        <img src="/assets/image/4.jpg" alt="image" />
                        <div className="details">
                            <h2>0,3-0,9KV <span>CABLES</span></h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <div className="more">
                                <a href="#" className="read-more">Read <span>More</span></a>
                                <div className="icon-links">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="image">
                        <img src="/assets/image/5.jpg" alt="" />
                        <div className="details">
                            <h2>OPWG <span>Cables</span></h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <div className="more">
                                <a href="#" className="read-more">Read <span>More</span></a>
                                <div className="icon-links">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="image">
                        <img src="/assets/image/6.jpg" alt="" />
                        <div className="details">
                            <h2>OVERHEAD LINE <span>CABLES</span></h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <div className="more">
                                <a href="#" className="read-more">Read <span>More</span></a>
                                <div className="icon-links">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar