import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
	apiKey: 'AIzaSyBdglB5hIoDE_mAcUIfuVDChyEpwl7iVfM',
	authDomain: 'crwn-db-e8b76.firebaseapp.com',
	databaseURL: 'https://crwn-db-e8b76.firebaseio.com',
	projectId: 'crwn-db-e8b76',
	storageBucket: 'crwn-db-e8b76.appspot.com',
	messagingSenderId: '372089144169',
	appId: '1:372089144169:web:a5727ef86bca29215c73f8'
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return

	const userRef = firestore.doc(`users/${userAuth.uid}`)

	const snapShot = await userRef.get()

	if (!snapShot.exists) {
		const { displayName, email } = userAuth
		const createdAt = new Date()

		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData
			})
		} catch (error) {
			console.log('error creating user', error.message)
		}
	}

	return userRef
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase