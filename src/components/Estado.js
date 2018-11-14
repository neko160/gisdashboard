import React from 'react'
import { Item } from 'semantic-ui-react'
import green from '../css/images/estados/green.png';

class Estado extends React.Component {
    render() {
      
        return (
            <div className="wrapper_estado">

                <Item.Group className="item_group_estado" >
                    <Item className="estado_fit">
                        <Item.Content verticalAlign='middle' className="estado_content">
                            <Item.Header as='h4' className="estado_header">ESTADO ALERTA</Item.Header>
                        </Item.Content>
                        <Item.Image size='tiny' className="estado_color_green"/>
                    </Item>
                </Item.Group>
            </div>


        );
    }
}

export default Estado;
