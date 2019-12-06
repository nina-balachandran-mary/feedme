import * as React from "react";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import {Search} from "./search";
import {Recipes} from "./recipes";

export class App extends React.Component {
    render() {
        return (
            <Router>
                <ul>
                    <li>
                        <Link to="/search">Search</Link>
                    </li>
                    <li>
                        <Link to="/recipes">Recipes</Link>
                    </li>
                </ul>

                <hr />

                <Switch>
                    <Route exact path="/">
                        <Search />
                    </Route>
                    <Route path="/search">
                        <Search />
                    </Route>
                    <Route path="/recipes">
                        <Recipes />
                    </Route>
                </Switch>
            </Router>
        )
    }
}