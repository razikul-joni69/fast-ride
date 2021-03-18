import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Background } from "./components/Images/Bg.png";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";

function App() {
    return (
        <div >
            <Router>
                <Header></Header>
                <Switch>
                    <Route path="/home">
                        <Home />
                    </Route>
                    <Route path="/destination">
                        <Home />
                    </Route>
                    <Route path="/login">
                        <Home />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                    <Route path="*">
                        <NotFound />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
