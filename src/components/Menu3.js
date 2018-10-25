import React from 'react';
import { Segment, Statistic } from 'semantic-ui-react'

class Menu3 extends React.Component {
    render() {
        return (
           
            <Statistic  className="menu3_symbol" color="pink" inverted>
              <Statistic.Value>540</Statistic.Value>
              <Statistic.Label>Clientes Afectados</Statistic.Label>
            </Statistic>
           
        );
    }
}

export default Menu3;

