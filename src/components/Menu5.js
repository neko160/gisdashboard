import React from 'react';

import { Header, Icon } from 'semantic-ui-react';
import { List } from 'semantic-ui-react';

class Menu5 extends React.Component {
    render() {
        return (
                <div className="menu5_wrapper">
                   <Header as='h2' inverted color='yellow' className="menu5_header">
                    <Icon name='info' />
                    <Header.Content >
                         Información
                    <Header.Subheader>Ver información acerca de lo que se ha seleccionado del mapa.</Header.Subheader>
                    </Header.Content>


                </Header>
                <div className="menu5_element_clicked">
                    <List inverted relaxed className="menu5_list">
                        <List.Item>SSEE: {400}</List.Item>
                        <List.Item>Nombre: {"The name"}</List.Item>
                        <List.Item>Clientes: {500}</List.Item>
                    </List>
                </div>
                </div>
               
           
           
           
        );
    }
}

export default Menu5;

