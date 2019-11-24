import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import { Component } from 'react';
class App extends Component {
    constructor() {
        super();

      this.tableColumn = [];

      this.state = {
        showdata : this.tableColumn,
        postVal : ""
      }

      this.addcnamectype = this.addcnamectype.bind(this);
      this.mincnamectype = this.mincnamectype.bind(this);

    };

    addcnamectype() {

        this.tableColumn.push(<div className="table-header align-ath">
        <div>
          <input className="align-cname" type="text" placeholder="Column Name" name="cname"/>
        </div>
        <div className="align-ctype">
          <select name="ctype">
              <option value="0">Select Column Type</option>
              <option value="Date">Date</option>
              <option value="Number">Number</option>
              <option value="Multiselect">Multiselect</option>
          </select>
        </div><br/>
      </div>);
        this.setState({
           showdata : this.tableColumn,
           postVal : ""
        });
    }

    mincnamectype() {

        this.tableColumn.pop(<div className="table-header align-ath">
        <div>
          <input className="align-cname" type="text" placeholder="Column Name" name="cname"/>
        </div>
        <div className="align-ctype">
          <select name="ctype">
              <option value="0">Select Column Type</option>
              <option value="Date">Date</option>
              <option value="Number">Number</option>
              <option value="Multiselect">Multiselect</option>
          </select>
        </div><br/>
      </div>);
        this.setState({
           showdata : this.tableColumn,
           postVal : ""
        });
    }

    createTable() {
        alert("welcome")
    }

render() {
    return(
        <div className="">
            <div className="Table-Creation">
                <div className="heading">
                    <h1>Insert Column Name</h1>
                </div>
                <div className="table-header align-ath">
                    <div>
                       <input className="align-cname" type="text" placeholder="Column Name" name="cname" />
                    </div>
                    <div className="align-ctype">
                        <select name="ctype">
                            <option value="0">Select Column Type</option>
                            <option value="Date">Date</option>
                            <option value="Number">Number</option>
                            <option value="Multiselect">Multiselect</option>
                        </select>
                    </div>
                </div>
                <div class="add-header" onClick={this.addcnamectype}>+</div>
                <div class="min-header"  onClick={this.mincnamectype}>-</div><br/>
                <div id="display-table-multiple-Column">
                    {this.tableColumn}
                </div>
                <div className="heading">
                    <div className="req">
                        <p>*Note : Please Fill All the fields as Mandatory</p>
                    </div><br/>
                     <button style={{margin:15}} class="btn btn-default button sub-header" onClick={this.createTable}> Create Table</button>
                </div>
            </div>
        </div>
    );
}

}
ReactDOM.render(<App />, document.getElementById('root'));
