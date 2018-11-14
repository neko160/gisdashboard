import React from 'react';
import { Header, Icon } from 'semantic-ui-react';

class BannerClientes extends React.Component {
    render() {
        return (
            <Header as='h2' className="banner_wrapper banner_clientes">
                <Icon className="banner_title_icon clientes_icon" name='user' />
                <Header.Content className="banner_title clientes_title">Clientes</Header.Content>
               
            </Header>
        );
    }
}

export default BannerClientes;

