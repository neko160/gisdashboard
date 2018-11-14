import React from 'react';
import Banner from './Banner';
import Estado from './Estado';
import Fecha from './Fecha';

import Ordenes from './Ordenes';
import OrdenesConcurrencia from './OrdenesConcurrencia';
import OrdenesInterrumpidas from './OrdenesInterrumpidas';
import OrdenesETRVencido from './OrdenesETRVencido';

import Valparaiso from './Valparaiso';
import Tabla from './Tabla';
import Costa from './Costa';
import MargaMarga from './MargaMarga';
import Quillota from './Quillota';
import LosAndes from './LosAndes';

import Electrodependientes from './Electrodependientes';
import GrandesClientes from './GrandesClientes';
import AguaPotableRural from './AguaPotableRural';
import ClientesCriticos from './ClientesCriticos';
import Autoridades from './Autoridades';
import BannerClientes from './BannerClientes';

import MovilesEnTurno from './MovilesEnTurno';
import BannerComunas from './BannerComunas';
import Mapa from './Map';
import Empresas from './Empresas';

import IncidenciasOSF from './IncidenciasOSF';

import LineasUsadasOSF from './LineasUsadasOSF';
import MencionesTwitter from './MencionesTwitter';

import '../css/styles3.css';



class Main extends React.Component {
  render() {
    return (

      <div className="grid-container">
     
        <div className="header1"><Banner /> </div>
        <div className="header2"><Estado /></div>
        <div className="header3"><Fecha /></div>
        <div className="header4"><Empresas /></div>
      
      
        <div className="menu1"> {<Ordenes />}</div>
        <div className="menu2">{<OrdenesConcurrencia />}</div>
        <div className="menu3">{<OrdenesInterrumpidas />}</div>
        <div className="menu4">{<OrdenesETRVencido />}</div>
        <div className="mapp">{<Mapa />}</div>
        <div className="menu7">{<Tabla />}</div>
        
        <div className="menu17">{<BannerComunas />}</div>
        <div className="menu6">{<Valparaiso />}</div>
        <div className="menu8">{<Costa />}</div>
        <div className="menu9">{<MargaMarga />}</div>
        <div className="menu10">{<Quillota />}</div>
        <div className="menu11">{<LosAndes />}</div>

        <div className="menu16">{<MovilesEnTurno />}</div>
        <div className="menu12">{<GrandesClientes />}</div>
        <div className="menu14">{<ClientesCriticos />}</div>
       
        <div className="menu5">{<Electrodependientes />}</div>
        <div className="menu13">{<AguaPotableRural />}</div>
        <div className="menu15">{<Autoridades />}</div>
        
        <div className="menu18">{<BannerClientes />}</div>

        <div className="menu19">{<IncidenciasOSF />}</div>
        <div className="menu20">{<LineasUsadasOSF />}</div>
        <div className="menu21">{<MencionesTwitter />}</div>
     
      </div>
    );
  }
}

export default Main;

