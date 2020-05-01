import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../../firebase.config";

firebase.initializeApp(firebaseConfig);


const Auth = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    const signInWithGoogle = () => {
        firebase.auth().signInWithPopup(provider)
        .then(response => {
            console.log(response);
            return response.user;
            // This gives you a Google Access Token. You can use it to access the Google API.
            // var token = result.credential.accessToken;
            // // The signed-in user info.
            // var user = result.user;
            // ...
          }).catch(function(error) {
              console.log(error);
              return error.message;
            // Handle Errors here.
            // var errorCode = error.code;
            // var errorMessage = error.message;
            // // The email of the user's account used.
            // var email = error.email;
            // // The firebase.auth.AuthCredential type that was used.
            // var credential = error.credential;
            // ...
          });    
    }

    return {
        signInWithGoogle
    }

}

export default Auth;