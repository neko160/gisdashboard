import React from 'react';
import { Header, Icon } from 'semantic-ui-react';

class BannerComunas extends React.Component {
    render() {
        return (
            <Header as='h2' className="banner_wrapper banner_comunas">
                <Icon className="banner_title_icon comunas_icon" name='percent' />
                <Header.Content className="banner_title comunas_title">Comunas</Header.Content>
               
            </Header>
        );
    }
}

export default BannerComunas;

