import React from 'react';
import Banner from './Banner';
import Menu1 from './Menu1';
import Menu2 from './Menu2';
import Menu3 from './Menu3';
import Menu4 from './Menu4';
import Menu5 from './Menu5';
import Menu6 from './Menu6';
import Mapa from './Map';
import Empresas from './Empresas';
import RedesSociales from './RedesSociales';
import '../css/style.css';


class Main extends React.Component {
  render() {
    return (

      <div className="grid-container">
        <div className="header1"><Banner /></div>
        <div className="header2 header2_wrappers"><Empresas /></div>
        <div className="header3"><RedesSociales /></div>
       

        <div className="menu1 statistics_menu"><Menu1 /></div>
        <div className="mapp"><Mapa /></div>
        
        <div className="menu2 statistics_menu"><Menu2 /></div>
        <div className="menu3 statistics_menu"><Menu3 /></div>
        <div className="menu4 statistics_menu"><Menu4 /></div>
        <div className="menu5 statistics_menu"><Menu5 /></div>
        <div className="menu6 statistics_menu"><Menu6 /></div>
        <div className="menu7 statistics_menu"><Menu5 /></div>
      
      </div>
    );
  }
}

export default Main;

