import './App.css';
import 'materialize-css';
import {BrowserRouter, Link, Route, Switch} from "react-router-dom";
import {Auth} from "./components/Auth";
import {About} from "./components/About";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <header className="App-header">
                    <nav>
                        <div className="container">
                            <div className="row">
                                <ul className="col s6">
                                    <li><Link to="/auth">Auth</Link></li>
                                    <li><Link to="/about">About</Link></li>
                                </ul>
                                <div className="col s6 right-align">

                                    <span><strong>MERN</strong></span>
                                </div>
                            </div>
                            <div className="">asdfsf</div>
                        </div>
                    </nav>
                </header>
                <main>
                    <div className="container">
                        <Switch>
                            <Route path="/auth">
                                <Auth/>
                            </Route>
                            <Route path="/about">
                                <About/>
                            </Route>
                        </Switch>
                    </div>
                </main>
            </div>
        </BrowserRouter>
    );
}

export default App;
