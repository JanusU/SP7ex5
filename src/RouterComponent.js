import React from "react";
import App from "./App";
import Details from "./Details";

import {hashHistory,Link, IndexRoute,Router, Route} from "react-router"

const Home = () => (
  <div>
    <h2>Home View</h2>
    <p>Info about this site</p>
  </div>
)

const Company = () => {
  return (
    <div>
      <h2>About Us</h2>
      <p>Our about page</p>
    </div>
  )
}
const Blog = () => <h2>Our Company Blog</h2>



const Product = (props) => (
  <div>
    <h2>Our Products</h2>
    <h4>All our great books </h4>
    <ul>
      {props.route.books.map((book, index) => <li key={index}>
        {book.title} <Link to={`products/details/${index}`}>(details)</Link></li>)}
    </ul>
  </div>
)


class RouterComponent extends React.Component {
 
  render() {
    var books = this.props.bookStore.books;
    console.log(this.props.msg);
    return (
      <div>
        <Router history={hashHistory}>
          <Route path="/" component={App}>
            <IndexRoute component={Home}></IndexRoute>
            <Route path="products" component={Product}
              books={books} />
            <Route path="products/details/:id" component={Details}
              books={books} />
            <Route path="company" component={Company} />
            <Route path="blog" component={Blog} />
          </Route>
        </Router>
      </div>
    );
  }
}

export default RouterComponent;