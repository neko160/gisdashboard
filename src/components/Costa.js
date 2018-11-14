import React from 'react';
import { Label, Statistic } from 'semantic-ui-react'

class Costa extends React.Component {
    constructor(props) {
        super(props);

        this.onClick = this.onClick.bind(this);
    }

    onClick(e, n) {
        console.log(e, n, "clicked");

    }

    render() {
        return (
           
            <Statistic className="menu1_symbol text_statistics" color="blue" inverted size="small">
              <Statistic.Value className="number_font">3%</Statistic.Value>
              <Statistic.Label>Costa</Statistic.Label>
              <Label id="more_details_button4" as='a' onClick={this.onClick} className="more_details_button" color='black'>Ver +</Label>
   
            </Statistic>
            
        );
    }
}

export default Costa;

