import React from 'react'
import { useEffect } from 'react'
import '/src/css/slider.css'
import '@fortawesome/fontawesome-free/css/all.css';

const PrevNext = () => {
    useEffect(() => {
        const next = document.querySelector('.next');
        const prev = document.querySelector('.prev');

        if (next && prev) {
            next.addEventListener('click', () => {
                const items = document.querySelectorAll('.item');
                document.querySelector('.slide')?.appendChild(items[0]);
            });

            prev.addEventListener('click', () => {
                const items = document.querySelectorAll('.item');
                document.querySelector('.slide')?.prepend(items[items.length - 1]);
            });
        }
    }, []);
    return (
        <div className="button">
            <button className="prev"><i className="fa-solid fa-arrow-left"></i></button>
            <button className="next"><i className="fa-solid fa-arrow-right"></i></button>
        </div>
    )
}

export default PrevNext