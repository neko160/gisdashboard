import React from 'react';
import { Header, Icon } from 'semantic-ui-react';

class Banner extends React.Component {
    render() {
        return (
            <Header as='h2' className="banner_wrapper">
                <Icon name='plug' />
                <Header.Content>DASHBOARD</Header.Content>
            </Header>
        );
    }
}

export default Banner;

