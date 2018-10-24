import React from 'react';
import { Segment, Statistic } from 'semantic-ui-react'

class Menu3 extends React.Component {
    render() {
        return (
           
            <Statistic  className="centered" color="brown" inverted>
              <Statistic.Value>5</Statistic.Value>
              <Statistic.Label>REGION</Statistic.Label>
            </Statistic>
           
        );
    }
}

export default Menu3;

