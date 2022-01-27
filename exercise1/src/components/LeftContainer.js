import React from 'react';
import Img from './newsImage.png'
export default function LeftContainer(props) {
    return (
        <div className="leftContainer">
            <div>
                <header>
                    <h1>
                        Koronavirus
                    </h1>
                </header>
            </div>
            <div>
                <img src={Img} alt="news" className="image01"></img>
            </div>
            <div>
                <header>
                    <h3 className="header02">
                        HS Seuraa        
                    </h3>
                </header>
            </div>
            <div>
                <span className="header03">{props.news[0].head}</span>
                <span className="text01">{props.news[0].text}</span>
            </div>
            <div className="text02">
                <span>{props.news[1].head}</span>
            </div>
            <div className="text03">
                <span className="spantext01">{props.news[1].text01}</span>
                <span className="spantext02">{props.news[1].text02}</span>
                <span className="spantext03">{props.news[1].text03}</span>
            </div>
            <div className="text03">
                <span className="boldNum">{props.news[2].num01}</span>
                <span className="boldNum spantext02">{props.news[2].num02}</span>
                <span className="boldNum spantext03">{props.news[2].num03}</span>
            </div>
            <div>
                <span className="spantext01">{props.news[1].text04}</span>
            </div>
            <div className="text03">
                <span className="boldNum">{props.news[3].num01}</span>
                <span className="boldNum spantext02">{props.news[3].num02}</span>
                <span className="boldNum spantext03">{props.news[3].num03}</span>
            </div>
        </div>
    );
}
