import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

const colorsA = [
    {
        empresa: 'Chilquinta',
        color: 'red'
    },{
        empresa: 'Casablanca',
        color: 'violet'
    }];


const colorsB = ['blue', 'violet', 'purple', 'pink', 'brown', 'grey']

export default class Empresas extends Component {
  state = { activeA : 'Chilquinta', activeA2 : 'Current'}

  handleAClick = (e, { name }) => {
      this.setState({ activeA: name })
      console.log(name);
  }

  handleAClick2 = (e, { name }) => {
    this.setState({ activeA2: name })
    console.log(name);
}

  render() {
    const { activeA } = this.state

    return (
      <div className="header2_wrapper">
        <Menu className="header2_menu" inverted>
         
            <Menu.Item
              key='Chilquinta'
              name='Chilquinta'
              active={activeA === 'Chilquinta'}
              color='red'
              onClick={this.handleAClick}
              className="header2_menuitem"
            />
            
            <Menu.Item
              key='Casablanca'
              name='Casablanca'
              active={activeA === 'Casablanca'}
              color='brown'
              onClick={this.handleAClick}
              className="header2_menuitem"
            />

            <Menu.Item
              key='Litoral'
              name='Litoral'
              active={activeA === 'Litoral'}
              color='yellow'
              onClick={this.handleAClick}
              className="header2_menuitem"
            />

            <Menu.Item
              key='Linares'
              name='Linares'
              active={activeA === 'Linares'}
              color='blue'
              onClick={this.handleAClick}
              className="header2_menuitem"
            />

            <Menu.Item
              key='Parral'
              name='Parral'
              active={activeA === 'Parral'}
              color='teal'
              onClick={this.handleAClick}
              className="header2_menuitem" 
            />
         
        </Menu>

        

      </div>
    )
  }
}
