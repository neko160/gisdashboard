import React from 'react';
import Banner from './Banner';
import Menu1 from './Menu1';
import Menu2 from './Menu2';
import Menu3 from './Menu3';
import Menu4 from './Menu4';
import Menu5 from './Menu5';
import Menu6 from './Menu6';
import Menu8 from './Menu8';
import Menu9 from './Menu9';
import Menu10 from './Menu10';
import Menu11 from './Menu11';
import BannerFleet from './BannerFleet';
import Mapa from './Map';
import Empresas from './Empresas';
import RedesSociales from './RedesSociales';
import TwitterTimeline from './TwitterTimeline';

//import '../css/style.css';
import '../css/styles2.css';



class Main extends React.Component {
  render() {
    return (

      <div className="grid-container">
        <div className="header1"><Banner /></div>
        <div className="header2"><Empresas /></div>
        <div className="header4"><BannerFleet /></div>
        <div className="header3"><RedesSociales /></div>
        <div className="mapp"><Mapa /></div>
        <div className="menu1"><Menu1 /></div>
        <div className="menu2"><Menu2 /></div>
        <div className="menu3"><Menu3 /></div>
        <div className="menu4"><Menu4 /></div>
        <div className="menu5"><Menu5 /></div>
        <div className="menu6"><Menu6 /></div>
        <div className="menu7"><TwitterTimeline /></div>
        <div className="menu8"><Menu8 /></div>
        <div className="menu9"><Menu9 /></div>
        <div className="menu10"><Menu10 /></div>
        <div className="menu11"><Menu11 /></div>

      </div>
    );
  }
}

export default Main;

