import React from 'react';
import Img from './hslogo.png'

export default function TopContainer(props) {
  return (
    <div className="topContainer">
      <div className="image01">
        <img src={Img}></img>
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
        <span>
          {props.items.line07}
        </span>
      </div>
    </div>
  );
}
