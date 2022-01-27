import './App.css';
import React from 'react';
import TopContainer from './components/TopContainer';
import MainContainer from './components/MainContainer';

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

  const listNews = [
    {
      id: 1,
      head: "Rikosepäilyt | ",
      text: "EIT-huijaus: Kuolleeksi väitetyn irakilaismiehen tytär valehteli perheen taustoista jo tuvapaikkahakemuksessa"
    },

    {
      id: 2,
      head: "HS Vantaa | ",
      text: "Vantaalle nousi vankilan näköinen päiväkoti, jota pilkataan nyt surutta verkossa"
    },

    {
      id: 3,
      head: "Päivittyvä seuranta | ",
      text: "STM: Parasetamolia tai deksametasonia sisältävien lääkkeiden myyntiä rajoitetaan - Ministeriö haluaa varmistaa valmisteiden riittävyyden"
    },

    {
      id: 4,
      head: "Nyt.fi | ",
      text: "Harry Styles puki ylleen suomalaisen suunnittelijan neuleen, nyt tätä \"mummon tilkkutäkkiä\" neulovat kymmenet tuhannet ympäri maailman - Soitimme vaatesuunnittelijalle"
    },

    {
      id: 5,
      head: "Rikosepäilyt | ",
      text: "Atte Jääskeläinen sai syytteet liikenneturvallisuuden vaarantamisesta ja vammantuottamuksesta - \"Olen myöntänyt syyllisyyden\""
    },

    {
      id: 6,
      head: "Helsinki | ",
      text: "Työryhmän ehdotus julki: Jättimäisestä hiilivoimalasta halutaan täysin uudenlainen tapahtumapaikka kaupungin asukkaille"
    }
  ]

  const leftContainerNews = [
    {
      head: "Päivittyvä seuranta | ",
      text: "STM: Parasetamolia tai deksametasonia sisältävien lääkeiden myyntiä rajoitetaan"
    },

    {
      head: "Koronaviruksen vaikutukset Suomessa",
      text01: "Tartunnat yhteensä",
      text02: "Tuoreimmat 14 päivää",
      text03: "Edeltävät 14 päivää",
      text04: "Kuolleet",
      text05: "Sairaalahoidossa"
    },

    {
      num01: 7776,
      num02: 293,
      num03: 132
    },

    {
      num01: 334,
      num02: 5,
      num03: 1,
      num04: 5
    }

  ]


  return (
      <div className="App">
        <TopContainer items={topItems}/>
        <MainContainer titles={titles} news={listNews} leftNews={leftContainerNews}/>
      </div>
  );
}
