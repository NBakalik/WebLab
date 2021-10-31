import './App.css';
import {Header} from "./components/Header/Header";
import {Home} from "./components/Home/Home";
import {Footer} from "./components/Footer/Footer";
import {Filter} from "./components/Filter/Filter";
import {BrowserRouter, Switch, Route,} from "react-router-dom";
import {Catalog} from "./components/Catalog/Catalog";

function App() {
    return (
        <BrowserRouter>
            <div>
                <Switch>
                    <Route exact path="/">
                        <Header isHomePage={true}/>
                        <Home/>
                    </Route>
                    <Route path="/catalog">
                        <Header isHomePage={false}/>
                        <Filter/>
                        <Catalog/>
                    </Route>
                    <Route path="/cart">
                        <Header isHomePage={true}/>
                    </Route>
                </Switch>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
