import React, { Component } from 'react';
import  "./style.css";
import {Link, IndexLink} from "react-router"
import bookStore from './BookStore'


class App extends Component {
  render() {
    return (
      <div>
        <ul className="header">
          <li><IndexLink activeClassName="active" to="/">Home</IndexLink></li>
          <li><Link activeClassName="active" to="/products">Products</Link></li>
          <li><Link activeClassName="active" to="/company">Company</Link></li>
          <li><Link activeClassName="active" to="/blog">Blog</Link></li>
        </ul>
        <div className="content">
          {this.props.children}
        </div>
          <button onClick={bookStore.addBook(prompt('Enter a Title:','Default Title'),prompt('Enter info:','Default Info'))}>Add Book</button>
      </div>
    );
  }
}

export default App;
