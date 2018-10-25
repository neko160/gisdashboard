import React from 'react';
import { Segment, Statistic } from 'semantic-ui-react'

class Menu4 extends React.Component {
    render() {
        return (
           
            <Statistic  className="menu4_symbol" color="red" inverted>
              <Statistic.Value>158050</Statistic.Value>
              <Statistic.Label>Customers online</Statistic.Label>
            </Statistic>
           
        );
    }
}

export default Menu4;

