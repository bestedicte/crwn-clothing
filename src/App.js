import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';

import HomePage from './pages/HomePage';
import Shop from './pages/Shop';
import SignInSignUp from './pages/SignInSignUp';
import Header from './components/Header';
import { auth, createUserProfileDocument } from './firebase/firebaseUtils';
import { setCurrentUser } from './redux/user/userActions';

class App extends Component {
unsubscribeFromAuth = null;

componentDidMount() {
	const { setCurrentUser } = this.props;

	this.unsubscribeFromAuth = auth.onAuthStateChanged( async ( userAuth ) => {
		if ( userAuth ) {
			const userRef = await createUserProfileDocument( userAuth );

			userRef.onSnapshot( ( snapShot ) => {
				setCurrentUser( {
					id: snapShot.id,
					...snapShot.data(),
				} );
			} );
		}

		setCurrentUser( userAuth );
	} );
}

componentWillUnmount() {
	// noinspection JSValidateTypes
	this.unsubscribeFromAuth();
}

render() {
	const { currentUser } = this.props;
	return (
		<div>
			<Header />
			<Switch>
				<Route exact path="/" component={ HomePage } />
				<Route path="/shop" component={ Shop } />
				<Route
					exact
					path="/signin"
					render={ () => currentUser ? ( <Redirect to="/" /> ) : ( <SignInSignUp /> ) }
				/>
			</Switch>
		</div>
	);
}
}

// eslint-disable-next-line no-unused-vars
const mapStateToProps = ( { user } ) => ( {
	currentUser: user.currentUser,
} );

const mapDispatchToProps = ( dispatch ) => ( {
	setCurrentUser: ( user ) => dispatch( setCurrentUser( user ) ),
} );

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)( App );

