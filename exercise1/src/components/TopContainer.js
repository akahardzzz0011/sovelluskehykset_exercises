import React from 'react';
import Img from './hslogo.png'

export default function TopContainer(props) {
  return (
    <div className="topContainer">
      <div className="image00">
        <img src={Img} alt="this is logo"></img>
      </div>
      <div className="midItems">
        <p>
          {props.items.line01}
        </p>
        <p>
          {props.items.line02}
        </p>
        <p>
          {props.items.line03}
        </p>
        <p>
          {props.items.line04}
        </p>
      </div>
      <div className="rightItems">
        <span className="topButton">
          {props.items.line05}
        </span>
        <span>
          {props.items.line06}
        </span>
        <span className="topButton02">
          {props.items.line07}
        </span>
      </div>
    </div>
  );
}
