import Header from './components/Header/Header'
import HomeContainer from './components/Home/Home'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import {connect, Provider} from 'react-redux';
import {store} from "./components/App.store";
import Home from "./components/Home/Home";
import {getProduct} from "./components/App.action";
import {useEffect} from "react";

function About() {
    return <h2>About</h2>;
}

const App = () => {
    return (
        <div className="container">
            <Provider store={store}>
                <Router>
                    <Header/>
                    <Switch>
                        <Route exact path='/'>
                            <HomeContainer/>
                        </Route>
                        <Route path='/feature'>
                            <About/>
                        </Route>
                    </Switch>
                </Router>
            </Provider>
        </div>
    )
}

export default App;