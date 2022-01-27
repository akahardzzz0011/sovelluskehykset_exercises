import React from 'react';

export default function ListItems(props) {
    return (
        <div className="listItems">
            <div className="listNum">
                {props.news.id}
            </div>
            <div className="listElement">
                <div>
                    <span className="fontBolding">{props.news.head}</span>
                    <span>{props.news.text}</span>
                </div>
            </div>
            
        </div>
    );
}