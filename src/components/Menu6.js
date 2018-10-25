import React from 'react';
import ReactTable from "react-table";

class Pagination extends React.Component {
    render = () => (
      <div>
        You are on page {this.props.page + 1} of {this.props.pages}.
      </div>
    );
  }


class Menu6 extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          selectedMedidor: null,
          selectedLuminaria: null
        }
  
        this.onClickLuminaria = this.onClickLuminaria.bind(this);
  
    }

    onClickLuminaria(index, info){
       
        this.setState({selectedLuminaria: index});
    }
     
    render() {
        const data = [{
            name: 'Evelyn Hernandez',
            age: 28,
            friend: {
              name: 'Jason Maurer',
              age: 23,
            }
          },{
            name: 'Tanner Linsley',
            age: 26,
            friend: {
              name: 'Jason Maurer',
              age: 23,
            }
          },{
            name: 'Tonner Linsley',
            age: 26,
            friend: {
              name: 'Jason Maurer',
              age: 23,
            }
          },{
            name: 'Tinner Linsley',
            age: 26,
            friend: {
              name: 'Jason Maurer',
              age: 23,
            }
          },{
            name: 'Tunner Linsley',
            age: 26,
            friend: {
              name: 'Jason Maurer',
              age: 23,
            }
          }];
        
          const columns = [{
            Header: 'Name',
            accessor: 'name' // String-based value accessors!
          }, {
            Header: 'Age',
            accessor: 'age',
            Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
          }, {
            id: 'friendName', // Required because our accessor is not a string
            Header: 'Friend Name',
            accessor: d => d.friend.name // Custom value accessors!
          }, {
            Header: props => <span>Friend Age</span>, // Custom header components!
            accessor: 'friend.age'
          }];
        return (
       
        <ReactTable
          data={data}
         
          columns={columns}
          filterable
          defaultPageSize={7}
          showPageSizeOptions={false}
          className="-striped -highlight"
         
          getTdProps={(state,rowInfo,column,instance)=>{
            if(typeof rowInfo !== 'undefined'){
              return {
                  onClick: (e) => {
                      this.onClickLuminaria(rowInfo.index, rowInfo.row)
                  },
                  style: {
                      background: rowInfo.index === this.state.selectedLuminaria ? '#980000' : '',
                      color: rowInfo.index === this.state.selectedLuminaria ? 'white' : ''
                  }
              }
            }else{
              return {
                  onClick: (e) => {
                      this.onClickLuminaria(rowInfo.index, rowInfo.row)
                  }
            }}
          }}
        />
      
      );
        }
}

export default Menu6;

