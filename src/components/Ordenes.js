import React from 'react';
import { Segment, Statistic, Label, Image, Icon, Grid } from 'semantic-ui-react'

class Ordenes extends React.Component {
    constructor(props) {
        super(props);

        this.onClick = this.onClick.bind(this);
    }

    onClick(e, n) {
        console.log(e, n, "clicked");

    }
    render() {

        return (
            <Statistic id="statistics_ordenes" className="menu1_symbol text_statistics" color="yellow" inverted size="small">
                <Statistic.Value className="number_font">999</Statistic.Value>
                <Statistic.Label>Ordenes Totales</Statistic.Label>
                <Label id="more_details_button1" as='a' onClick={this.onClick} className="more_details_button" color='black'>Ver +</Label>
            </Statistic>






        );
    }
}

export default Ordenes;

