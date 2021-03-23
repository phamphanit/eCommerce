import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config =
{
        apiKey: "AIzaSyBgfWjd3Y7FVzSFjbsgVP8Sfq4RBWiHXEc",
        authDomain: "crwn-clothing-b8dfc.firebaseapp.com",
        projectId: "crwn-clothing-b8dfc",
        storageBucket: "crwn-clothing-b8dfc.appspot.com",
        messagingSenderId: "893612578899",
        appId: "1:893612578899:web:effe930ffe597ec4034ea6",
        measurementId: "G-BLZSKY9RNB"
};
export const createUserProfileDocument = async (userAuth, additionalData) => {
        if (!userAuth) {
                return;
        }
        const userRef = firestore.doc(`users/${userAuth.uid}`);
        const snapShot = await userRef.get();
        if (!snapShot.exist) {
                const { displayName, email } = userAuth;
                const createdAt = new Date();
                try {
                        await userRef.set(
                                {
                                        displayName,
                                        email,
                                        createdAt,
                                        ...additionalData,
                                }
                        )
                } catch (error) {
                        console.log('error creating user', error.message);
                }
        }
        return userRef;
}
export const convertCollectionsSnapshotToMap = (collections) => {
        const transformCollection = collections.docs.map(doc => {
                const { title, items } = doc.data();

                return {
                        routeName: encodeURI(title.toLowerCase()),
                        id: doc.id,
                        title,
                        items

                }
        });
        return transformCollection.reduce((accomulator, collection) => {
                accomulator[collection.title.toLowerCase()] = collection;
                return accomulator;
        }, {})
}

export const getCurrentUser = () => {
        return new Promise((resolve, reject) => {
                const unsubscribe = auth.onAuthStateChanged(userAuth => {
                        unsubscribe();
                        resolve(userAuth);
                }, reject);
        })
}
export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
        const collectionRef = firestore.collection(collectionKey);
        const batch = firestore.batch();
        objectsToAdd.forEach(obj => {
                const newDocRef = collectionRef.doc();
                batch.set(newDocRef, obj);
        });
        return await batch.commit();
}

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;