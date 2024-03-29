import React from 'react';
import LeftContainer from './LeftContainer';
import RightContainer from './RightContainer';

export default function Section(props) {
  return (
    <div className="section">
        <LeftContainer news={props.leftNews}/>
        <RightContainer news={props.news}/>
    </div>
  );
}
