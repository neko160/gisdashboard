import React from 'react';
import { Header, Icon } from 'semantic-ui-react';

class BannerFleet extends React.Component {
    render() {
        return (
            <Header as='h2' className="bannerFleet_wrapper">
                <Icon className="banner_title" name='car' />
                <Header.Content className="banner_title">Flota Vehicular</Header.Content>
               
            </Header>
        );
    }
}

export default BannerFleet;

