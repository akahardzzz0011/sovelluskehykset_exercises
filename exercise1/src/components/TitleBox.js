import React from 'react';

export default function TitleBox(props) {
    return (
        <div className="titleBox">
            <div className="title">
                <span className="uppercase whiteText">
                    {props.title.header01}
                </span>
                <span className="whiteText">
                    {props.title.line01}
                </span>
            </div>
            <div className="title">
                <span className="uppercase whiteText">
                    {props.title.header02}
                </span>
                <span className="whiteText">
                    {props.title.line02}
                </span>
            </div>
            <div className="title">
                <span className="uppercase whiteText">
                    {props.title.header03}
                </span>
                <span className="whiteText">
                    {props.title.line03}
                </span>
            </div>
        </div>
);
}
