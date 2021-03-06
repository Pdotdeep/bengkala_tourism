import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';
import About from './routers/about'
import Accomodation from './routers/accomodation'
import Admin from './routers/admin'
import Home from './routers/home'
import Attraction from './routers/attraction'
import Contact from './routers/contact'
import Faq from './routers/faq'
import Notfound from './routers/notfound'
import Payment from './routers/payment'
import './index.css';

const routing = (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/accomodation" component={Accomodation} />
        <Route exact path="/admin" component={Admin} />
        <Route exact path="/attraction" component={Attraction} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/faq" component={Faq} />
        <Route exact path="/payment" component={Payment} />
        <Route component={Notfound} />
      </Switch>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
