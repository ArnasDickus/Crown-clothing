import React from 'react';
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import CheckoutPage from "./pages/checkout/checkout.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import './App.scss';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions'
import { selectCurrentUser } from "./redux/user/user.selector";
import { createStructuredSelector } from "reselect";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentUser: null
        }
    }
    unsubscribeFromAuth = undefined;

    componentDidMount() {
        const { setCurrentUser } = this.props;

        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth);

                userRef.onSnapshot(snapShot => {
                    this.props.setCurrentUser({
                        id: snapShot.id,
                        ...snapShot.data()
                    })
                });
            }
            setCurrentUser(userAuth);
        });
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }


    render() {
        return (
            <Router>
                <div>
                    <Header />
                    <Switch>
                            <Route exact={true} path="/" component={HomePage}/>
                            <Route path="/shop" component={ShopPage}/>
                            <Route exact path="/signin"
                                   render={() => this.props.currentUser ? (<Redirect to="/" />) : (<SignInAndSignUpPage />)}  />
                           <Route exact path="/checkout" component={CheckoutPage} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
})

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
