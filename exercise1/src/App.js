import './App.css';
import React from 'react';
import TopContainer from './components/TopContainer';
import LeftContainer from './components/LeftContainer';
import RightContainer from './components/RightContainer';
import TitleBox from './components/TitleBox';

export default function App() {

  const titles = {
    header01: "PÄIVÄN TIMANTTI: ",
    header02: "PÄIVÄN TIMANTTI: ",
    header03: "MAINOS: ",
    line01: "Tutkija kertoo: Näin sota näkyy meissä edelleen",
    line02: "Harriet Rabb tajusi avioliiton taloudelliset hyödyt ja kosi - Näin hän säästäisi aviopuolisona 19 200 euroa",
    line03: "Faktoilla on nyt suurempi tarve kuin koskaan - tutustu Hesariin 2 viikkoa maksutta!"
  }

  const topItems = {
    line01: "Etusivu",
    line02: "Uutiset",
    line03: "Lehdet",
    line04: "Asiakaspalvelu",
    line05: "Tilaa",
    line06: "Kirjaudu",
    line07: "Valikko"
  }
  return (
      <div className="App">
        <TopContainer items={topItems}/>
        <TitleBox title={titles}/>
      </div>
  );
}
