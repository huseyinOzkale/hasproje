import React, { useEffect } from 'react'
import '/src/css/navbar.css'

const Bar = () => {
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
        <div className='about'>
            <div class="main-page">
                <header className='he'>
                    <div className="brand"><img src="/assets/image/logo-hasc-white.png" alt="logo" /></div>
                    <div className="menu-btn"></div>
                    <div className="navigation">
                        <div className="navigation-items">
                            <a href="#">Home</a>
                            <a href="#">About</a>
                            <a href="#">Products</a>
                            <a href="#">Referances</a>
                            <a href="#">Contacts</a>
                        </div>
                    </div>
                </header>
                <div className='aboutus'>About Us</div>
            </div>
        </div>
    )
}

export default Bar