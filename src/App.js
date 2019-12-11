import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import "./App.css";
import NavbarMovie from "./components/navbarMovie";
import Movies from "./components/movies";
import Customers from "./components/customers";
import Retails from "./components/retails";
import NotFound from "./common/notFound";
import MovieDetails from "./components/movieDetails";
import LoginForm from "./components/login";
import Register from "./components/register";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavbarMovie />
        <div className="content">
          <Switch>
            <Route path="/movies/:id" exact component={MovieDetails} />
            <Route path="/movies" component={Movies} />
            <Route path="/customers" component={Customers} />
            <Route path="/retails" component={Retails} />
            <Route path="/notFound" component={NotFound} />
            <Route path="/login" component={LoginForm} />
            <Route path="/Register" component={Register} />
            <Redirect from="/" exact to="/movies" />
            <Redirect to="/notFound" />
          </Switch>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
