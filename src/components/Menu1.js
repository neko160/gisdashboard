import React from 'react';
import { Segment, Statistic } from 'semantic-ui-react'

class Menu1 extends React.Component {
    render() {
        return (
           
            <Statistic className="menu1_symbol" color="yellow" inverted>
              <Statistic.Value>3</Statistic.Value>
              <Statistic.Label>Regiones</Statistic.Label>
            </Statistic>
            
        );
    }
}

export default Menu1;

