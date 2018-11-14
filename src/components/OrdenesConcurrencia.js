import React from 'react';
import { Label, Statistic } from 'semantic-ui-react'

class OrdenesConcurrencia extends React.Component {
    constructor(props) {
        super(props);

        this.onClick = this.onClick.bind(this);
    }

    onClick(e, n) {
        console.log(e, n, "clicked");

    }
    render() {
        return (
           
            <Statistic className="menu1_symbol text_statistics" color="yellow" inverted size="small">
              <Statistic.Value className="number_font">1</Statistic.Value>
              <Statistic.Label>ORDENES VENCIDAS</Statistic.Label>
              <Label id="more_details_button1" as='a' onClick={this.onClick} className="more_details_button" color='black'>Ver +</Label>
     
            </Statistic>
            
        );
    }
}

export default OrdenesConcurrencia;


