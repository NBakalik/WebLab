import './App.css';
import {Header} from "./components/Header/Header";
import {Home} from "./components/Home/Home";
import {Footer} from "./components/Footer/Footer";
import {BrowserRouter, Switch, Route,} from "react-router-dom";
import {Catalog} from "./components/Catalog/Catalog";
import {Cart} from "./components/Cart/Cart";

function App() {
    return (
        <BrowserRouter>
            <div>
                <Switch>
                    <Route exact path="/">
                        <Header/>
                        <Home/>
                    </Route>
                    <Route path="/catalog">
                        <Catalog/>
                    </Route>
                    <Route path="/cart">
                        <Header/>
                        <Cart/>
                    </Route>
                </Switch>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
