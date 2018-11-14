import React from 'react';
import { Label, Statistic } from 'semantic-ui-react'

class Valparaiso extends React.Component {
    constructor(props) {
        super(props);

        this.onClick = this.onClick.bind(this);
    }

    onClick(e, n) {
        console.log(e, n, "clicked");

    }

    render() {
        return (
           
            <Statistic className="menu1_symbol text_statistics" color="green" inverted size="small">
              <Statistic.Value className="number_font">93%</Statistic.Value>
              <Statistic.Label>Valparaíso</Statistic.Label>
              <Label id="more_details_button2" as='a' onClick={this.onClick} className="more_details_button" color='black'>Ver +</Label>
   
            </Statistic>
            
        );
    }
}

export default Valparaiso;

