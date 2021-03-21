import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import { createContext, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Background from "../src/components/Images/Bg.png";
import "./App.css";
import Contact from "./components/Contact/Contact";
import Destination from "./components/Destination/Destination";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import NotFound from "./components/NotFound/NotFound";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import User from "./components/User/User";

library.add(fab);
export const UserContext = createContext();
function App() {
    const [loggedInUser, setLoggedInUser] = useState({});
    return (
        <div
            style={{ backgroundImage: `url(${Background})` }}
            className="background-img"
        >
            <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
                <Router>
                    <Header></Header>
                    <Switch>
                        <Route path="/home">
                            <Home />
                        </Route>
                        <PrivateRoute path="/destination">
                            <Destination />
                        </PrivateRoute>
                        <PrivateRoute path="/destination/:title">
                            <Destination />
                        </PrivateRoute>
                        <Route path="/contact">
                            <Contact />
                        </Route>
                        <Route path="/login">
                            <Login />
                        </Route>
                        <Route path="/user">
                            <User />
                        </Route>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route path="*">
                            <NotFound />
                        </Route>
                    </Switch>
                </Router>
            </UserContext.Provider>
        </div>
    );
}

export default App;
