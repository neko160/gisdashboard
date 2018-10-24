import React from 'react';
import { Segment, Statistic } from 'semantic-ui-react'

class Menu4 extends React.Component {
    render() {
        return (
           
            <Statistic  className="centered" color="red" inverted>
              <Statistic.Value>33</Statistic.Value>
              <Statistic.Label>CARS</Statistic.Label>
            </Statistic>
           
        );
    }
}

export default Menu4;

