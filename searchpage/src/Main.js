import React, { Component } from "react";
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import Login from"./Login";
import Search from"./Search";
import Manager from"./Manager";
import './App.css';

class Main extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <h1>근태관리시스템</h1>
                    <ul className="header">
                        <li><NavLink to="/">Login</NavLink></li>
                        <li><NavLink to="/search">Search</NavLink></li>
                        <li><NavLink to="/manager">관리자</NavLink></li>
                    </ul>
                    <div className="content">
                        <Route exact path="/" component={Login}/>
                        <Route path="/search" component={Search}/>
                        <Route path="/manager" component={Manager}/>
                    </div>
                </div>
            </HashRouter>
        );
    }
}

export default Main;