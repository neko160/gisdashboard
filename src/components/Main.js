import React from 'react';
import Banner from './Banner';

import '../css/style.css';


class Main extends React.Component {
  render() {
    return (

      <div className="grid-container">
        <div className="item1">Header</div>
        <div className="item11">Header2</div>
        <div className="item12">Header3</div>
        <div className="item2">Map</div>
        <div className="item3">Menu</div>
        <div className="item4">Menu2</div>
        <div className="item5">Menu3</div>
        <div className="item6">Menu4</div>
        <div className="item7">Menu5</div>
        <div className="item8">Menu6</div>

      </div>
    );
  }
}

export default Main;

