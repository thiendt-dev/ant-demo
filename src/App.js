import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from './component/Navigation';
import Pagination from './component/PaginationComponent';
import FormBasic from './component/Form/FormBasic';
import FormComment from './component/Form/FormComment';
import ListSimPle from './component/ListSimPle';
import GetDataContainer from './containers/GetDataContainer';

function App() {
    return (
        <Router >
            <Switch>
                <Route path="/navigation"><Navigation /></Route>
                <Route path="/pagination"><Pagination /></Route>
                <Route path="/form" exact><FormBasic /></Route>
                <Route path="/comment" exact><FormComment /></Route>
                <Route path="/list" exact><ListSimPle /></Route>
                <Route path="/get-data" >
                    <GetDataContainer />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
