import React from 'react';
import { Segment, Statistic } from 'semantic-ui-react'

class Menu9 extends React.Component {
    render() {
        return (
           
            <Statistic size='tiny'  className="menu8_symbol" color="red" inverted>
              <Statistic.Value>10/25/2018 14:00:55</Statistic.Value>
              <Statistic.Label>Último ETR</Statistic.Label>
            </Statistic>
           
        );
    }
}

export default Menu9;

