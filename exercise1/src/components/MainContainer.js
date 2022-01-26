import React from 'react';
import LeftContainer from './LeftContainer';
import RightContainer from './RightContainer';
import TitleBox from './TitleBox';

export default function MainContainer(props) {
  return (
    <div className="mainContainer">
        <TitleBox title={props.titles}/>
        <LeftContainer />
        <RightContainer />
    </div>
  );
}
