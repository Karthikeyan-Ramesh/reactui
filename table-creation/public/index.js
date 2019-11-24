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

        this.tableColumn.unshift(<div className="table-header align-ath">
        <div>
          <input className="align-cname" type="text" placeholder="Column Name" name="cname"/>
        </div>
        <div className="align-ctype">
          <select name="ctype">
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
render() {
    return(
        <div className="">
        <div className="heading">
          <h1>Add Table Column</h1>
        </div>
        <div className="table-header align-ath">
          <div>
            <input className="align-cname" type="text" placeholder="Column Name" name="cname"/>
          </div>
          <div className="align-ctype">
            <select name="ctype">
                <option value="Date">Date</option>
                <option value="Number">Number</option>
                <option value="Multiselect">Multiselect</option>
            </select>
          </div>
        </div>
        <div class="add-header" onClick={this.addcnamectype}>+</div>
        <div class="min-header hidden" style={{display: 'none'}} onClick={this.mincnamectype}>-</div><br/>
        <div id="display-table-multiple-Column">
             {this.tableColumn}
        </div>
        <div className="heading">
        <button  class="btn btn-default button sub-header"> Create Table</button>
        </div>
      </div>
    );
}

}
ReactDOM.render(<App />, document.getElementById('root'));
