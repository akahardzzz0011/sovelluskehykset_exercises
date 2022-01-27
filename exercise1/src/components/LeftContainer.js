import React from 'react';
import Img from './newsImage.png'
export default function LeftContainer(props) {
    return (
        <div className="leftContainer">
            <div>
                <header>
                    <h2>
                        Koronavirus
                    </h2>
                </header>
            </div>
            <div>
                <img src={Img} alt="news" className="image01"></img>
            </div>
        </div>
    );
}
