import React from 'react';
import ListItems from './ListItems'

export default function RightContainer(props) {
    return (
        <div className="rightContainer">
            <header className="header01">
                <h2>Luetuimmat</h2>
            </header>
            <ol>
                <ListItems news={props.news[0]}/>
                <ListItems news={props.news[1]}/>
                <ListItems news={props.news[2]}/>
                <ListItems news={props.news[3]}/>
                <ListItems news={props.news[4]}/>
                <ListItems news={props.news[5]}/>
            </ol>
        </div> 
    );
}
