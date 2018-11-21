import React, { Component } from 'react';
import './App.css';
import './index.css';
import Sidebar from "./components/Sidebar";
import SearchImages from "./components/SearchImages";
import ReactDOM from "react-dom";

class Info extends Component {
    render() {
        return (
            <div>
                <Sidebar/>
            </div>
        );
    }
}

ReactDOM.render(<Info />, document.getElementById('sidebar'));

class App extends Component {
  render() {
    return (
        <div>
            <SearchImages/>
        </div>
    );
  }
}

export default App;
