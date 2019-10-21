import React, { Component } from 'react';
import Row from '../row/Row'
import Inputbox from '../input/Input'
import Box from '../box/Box'
import 'bootstrap/dist/css/bootstrap.css';
import './Grid.scss';


class Grid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rowsCount: 0,
      rows: [],
      columns: [],
      columnsString: ''
    }
  }

  handleRows = (number) => {
    const rows = [];
    for (let i=1; i<=number; i++){
      rows.push({});
    }
    this.setState({rows});
  }

  handleColumns = (number) => {
    let data = number.split(',');
    data = data.filter(function (el) {
      return el !== '';
    });
    this.setState({columns:data});
  }

  handleRowSpace = (rowspace) => {
    let rowClasses = document.getElementsByClassName('row');
    rowspace=rowspace!==''?rowspace:0
    for (let i = 0; i < rowClasses.length; i++) {
      rowClasses[i].style.marginTop = rowspace+'px'
    }
  }

  handleBoxSpace = (colSpace) => {
    let colClasses = document.getElementsByClassName('box');
    colSpace=colSpace!==''?colSpace:0
    for (let i = 0; i < colClasses.length; i++) {
      colClasses[i].style.marginRight = colSpace+'px'
    }
  }

  render() {
    const {rows, columns} = this.state;
    return (
      <div className="grid">
        <center>
            <h2 className="mb-2">Zen3 React Grid System</h2>
        </center>
        <div className="gridContainer">
          <div className="gridDivison">
            <div>
              <Inputbox placeholder='No. of Rows' inputOnChange={this.handleRows}/>
              <Inputbox placeholder='No. of Columns' inputOnChange={this.handleColumns}/>
            </div>
            <div>
              <Inputbox placeholder='Space between rows' inputOnChange={this.handleRowSpace}/>
              <Inputbox placeholder='Space between boxes' inputOnChange={this.handleBoxSpace}/>
            </div>
            {
              rows && rows.length > 0 ? rows.map((row, index) => {
                const noofcolumns = parseInt(columns[index])
                if(noofcolumns) {
                  const arr = [];
                  for (let i = 0; i < noofcolumns; i++) {
                    arr.push(<Box columnsCount={noofcolumns} />)
                  }
                  return <Row>{[...arr]}</Row>;
                }
                else {
                    return <p>Please enter number of columns for row {index+1}.</p>
                }
              }) : null
            }
          </div>
        </div>
      </div>
    );
  }  
}
export default Grid;