import React from 'react'
import Button from '../Button/Button'
import '/src/css/slider.css'
import '@fortawesome/fontawesome-free/css/all.css';

interface SliderProps {
    imageUrl: string;
    title: string;
    content: string;
}

const SliderPage: React.FC<SliderProps> = ({ imageUrl, title, content }) => {
    
    return (
        <div className="item" style={{ backgroundImage: `url(${imageUrl})` }}>
            <div className="content">
                <div className="name">{title}</div>
                <div className="des">{content}</div>
                <Button />
            </div>
        </div>
    )
}

export default SliderPage