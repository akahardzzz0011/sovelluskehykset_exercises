import React from 'react';
import Section from './Section'
import TitleBox from './TitleBox';

export default function MainContainer(props) {
  return (
    <div className="mainContainer">
        <TitleBox title={ props.titles }/>
        <Section news={ props.news } />
    </div>
  );
}
