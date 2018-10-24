import React from 'react';
import { Segment, Statistic } from 'semantic-ui-react'

class Menu3 extends React.Component {
    render() {
        return (
           
            <Statistic  className="centered" color="teal" inverted>
              <Statistic.Value>15805111s</Statistic.Value>
              <Statistic.Label>ONLINE</Statistic.Label>
            </Statistic>
           
        );
    }
}

export default Menu3;

