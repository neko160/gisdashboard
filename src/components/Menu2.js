import React from 'react';
import { Segment, Statistic } from 'semantic-ui-react'

class Menu2 extends React.Component {
    render() {
        return (
           
            <Statistic  className="centered" color="teal" inverted>
              <Statistic.Value>22</Statistic.Value>
              <Statistic.Label>out</Statistic.Label>
            </Statistic>
           
        );
    }
}

export default Menu2;

