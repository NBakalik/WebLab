import './App.css';
import {Header} from "./components/Header/Header";
import {Home} from "./components/Home/Home";
import {Footer} from "./components/Footer/Footer";
import {BrowserRouter, Switch, Route,} from "react-router-dom";
import {Catalog} from "./components/Catalog/Catalog";
import {Cart} from "./components/Cart/Cart";
import {SighUp} from "./components/SignUp/SighUp";
import {useState} from "react";


function App() {
    const [isLogged, update] = useState(false);

    function checkLogin() {
        if (localStorage.getItem("isLogged") != null) {
            update(true);
        }
    }

    if (isLogged || localStorage.getItem('isLogged') != null) {
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
    } else {
        return <SighUp func={checkLogin}/>
    }

}

export default App;
