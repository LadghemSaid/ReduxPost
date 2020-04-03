import React, {Component} from "react"
import {Router, Route, Link, IndexRoute,Switch} from "react-router"
import {BrowserRouter } from "react-router-dom"

import NotFound from "./components/NotFound";
import PostList from "./containers/post-list";
import PostForm from "./containers/post-form";
import Post from "./containers/post";

var createBrowserHistory = require("history").createBrowserHistory;

//Le exact sur la route est tres important
export default class Routes extends Component {
    render() {
        return (
            <Router history={createBrowserHistory()}>
                <Switch>
                    <Route exact path="/" component={PostList}/>
                    <Route path="/create-post" component={PostForm}/>
                    <Route path="/post/:id" component={Post}/>

                    <Route component={NotFound}/>
                </Switch>
            </Router>
        )
    }
}