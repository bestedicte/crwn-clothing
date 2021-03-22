import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: 'AIzaSyDxVfLm-MkAr6AvNrKqTJKvqE5ufcbZzQs',
	authDomain: 'crwn-clothing-28a4a.firebaseapp.com',
	projectId: 'crwn-clothing-28a4a',
	storageBucket: 'crwn-clothing-28a4a.appspot.com',
	messagingSenderId: '929312945195',
	appId: '1:929312945195:web:f6bcf018414a02590ee66e',
	measurementId: 'G-4CD4CWJ0GK',
};

firebase.initializeApp( config );

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const createUserProfileDocument = async ( userAuth, additionalData ) => {
	if ( ! userAuth ) {
		return;
	}

	const userRef = firestore.doc( `users/${ userAuth.uid }` );

	const snapShot = await userRef.get();

	if ( ! snapShot.exists ) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();
		try {
			await userRef.set( {
				displayName,
				email,
				createdAt,
				...additionalData,
			} );
		} catch ( error ) {
			console.log( 'error creating user', error.message );
		}
	}

	// eslint-disable-next-line consistent-return
	return userRef;
};

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters( { prompt: 'select_account' } );
export const signInWithGoogle = () => auth.signInWithPopup( provider );

