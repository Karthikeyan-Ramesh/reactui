import React from 'react';
import './App.css';

function App() {
  return (
    <div className="">
      <div className="App">
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
        <div class="add-header">+</div>
        <div class="min-header">-</div>
        <button  class="btn btn-default button sub-header">Add</button>
      </div>
    </div>
  );
}

export default App;
