import React from 'react';
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";



class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentUser: null
        }
    }
    unsubscribeFromAuth = undefined;

    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
            if(user) {
                const userRef = await createUserProfileDocument(user);

                userRef.onSnapshot(snapshot => {
                    this.setState({
                        currentUser: {
                            id: snapshot.id,
                            ...snapshot.data()
                        }
                    });
                });
            } else {
                this.setState({currentUser: user});
            }
        })
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }


    render() {
        return (
            <Router>
                <div>
                    <Header currentUser={this.state.currentUser} />
                    <Switch>
                            <Route exact={true} path="/" component={HomePage}/>
                            <Route path="/shop" component={ShopPage}/>
                            <Route path="/signin" component={SignInAndSignUpPage}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
