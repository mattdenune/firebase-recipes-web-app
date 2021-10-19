import firebase from './FirebaseConfig';

const auth = firebase.auth();

const registerUser = (email, password) => {
    return auth.createUserWithEmailAndPassword(email, password);
};

const loginUser = (email, password) => {
    return auth.signInWithEmailAndPassword(email, password);
};

const logOutUser = () => {
    return auth.signOut();
};

const sendPasswordResetEmail = (email) => {
    return auth.sendPasswordResetEmail(email);
};

const logInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();

    return auth.signInWithPopup(provider);
};

const subscribeToAuthChanges = (handleAuthChange) => {
    auth.onAuthStateChanged((user) => {
        handleAuthChange(user);
    }); 
};

const FirebaseAuthService = {
    registerUser,
    loginUser,
    logOutUser,
    sendPasswordResetEmail,
    logInWithGoogle,
    subscribeToAuthChanges
};

export default FirebaseAuthService;
