import React from 'react';

import FormInput from '../FormInput';
import CustomButton from '../CustomButton';

import { auth, signInWithGoogle } from '../../firebase/firebaseUtils';

import './style.scss';

class SignIn extends React.Component {
	constructor( props ) {
		super( props );

		// eslint-disable-next-line react/state-in-constructor
		this.state = {
			email: '',
			password: '',
		};
	}

handleSubmit = async ( event ) => {
	event.preventDefault();

	const { email, password } = this.state;

	try {
		await auth.signInWithEmailAndPassword( email, password );
		this.setState( { email: '', password: '' } );
	} catch ( error ) {
		console.log( error );
	}
};

handleChange = ( event ) => {
	const { value, name } = event.target;

	this.setState( { [ name ]: value } );
};

render() {
	const { email, password } = this.state;
	return (
		<div className="sign-in">
			<h2>I already have an account</h2>
			<span>Sign in with your email and password</span>

			<form onSubmit={ this.handleSubmit }>
				<FormInput
					name="email"
					type="email"
					handleChange={ this.handleChange }
					value={ email }
					label="email"
					required
				/>
				<FormInput
					name="password"
					type="password"
					value={ password }
					handleChange={ this.handleChange }
					label="password"
					required
				/>
				<div className="buttons">
					<CustomButton type="submit"> Sign in </CustomButton>
					<CustomButton onClick={ signInWithGoogle } isGoogleSignIn>
						Sign in with Google
					</CustomButton>
				</div>
			</form>
		</div>
	);
}
}

export default SignIn;