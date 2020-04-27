import React, {Component} from "react"
import {Router, Route,Switch} from "react-router"

import NotFound from "./components/NotFound";
import PostList from "./containers/post-list";
import PostForm from "./containers/post-form";
import Post from "./containers/post";

var createBrowserHistory = require("history").createBrowserHistory;

//Le exact sur la route est tres important
export default class Routes extends Component {
    render() {


        return (
            <Router basename={'/redux-post'} history={createBrowserHistory()}>
                <Switch>
                    <Route exact path={`${process.env.PUBLIC_URL}`} component={PostList}/>
                    <Route  path={`${process.env.PUBLIC_URL}/create-post`} component={PostForm}/>
                    <Route  path={`${process.env.PUBLIC_URL}/post/:id`} component={Post}/>

                    <Route component={NotFound}/>
                </Switch>
            </Router>
        )
    }
}
