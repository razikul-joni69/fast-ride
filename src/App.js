import "bootstrap/dist/css/bootstrap.min.css";
import { createContext, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Contact from "./components/Contact/Contact";
import Destination from "./components/Destination/Destination";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import NotFound from "./components/NotFound/NotFound";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

export const UserContext = createContext();
function App() {
    const [loggedInUser, setLoggedInUser] = useState({})
    return (
        <div >
            <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
            <Router>
                <Header></Header>
                <h1>email: {loggedInUser.email}</h1>
                <Switch>
                    <Route path="/home">
                        <Home />
                    </Route>
                    <PrivateRoute path="/destination">
                        <Destination/>
                    </PrivateRoute>
                    <PrivateRoute  path="/destination/:vehicleType">
                        <Destination/>
                    </PrivateRoute>
                    <Route path="/contact">
                        <Contact/>
                    </Route>
                    <Route path="/login">
                        <Login/>
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
