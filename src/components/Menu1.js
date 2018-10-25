import React from 'react';
import { Segment, Statistic } from 'semantic-ui-react'

class Menu1 extends React.Component {
    render() {
        return (
           
            <Statistic className="menu1_symbol" color="yellow" inverted>
              <Statistic.Value>54</Statistic.Value>
              <Statistic.Label>Shut Down</Statistic.Label>
            </Statistic>
            
        );
    }
}

export default Menu1;

