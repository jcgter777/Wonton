var config = {
	apiKey: "AIzaSyBlcxJyIQ5YfkL9-pgnJpoIOvgrCYAu4_E",
	authDomain: "make-school-great-again.firebaseapp.com",
	databaseURL: "https://make-school-great-again.firebaseio.com",
	projectId: "make-school-great-again",
	storageBucket: "",
	messagingSenderId: "643533486952"
};
firebase.initializeApp(config);

let auth = firebase.auth();
auth.onAuthStateChanged(user => {
	if (user) {
		signedIn();
	}
	else {
		signedOut();
	}
});


function signedIn() {
	document.getElementById('googlesignin').classList = 'hidden';
	document.getElementById('signinsuccess').classList = 'visible';
	document.getElementById("truediv").classList = 'hidden';
}

function signedOut() {
	/* alert("Sign in with Google!");*/
}

document.getElementById('signin-div').addEventListener('click', () => {
	var provider = new firebase.auth.GoogleAuthProvider();
	firebase.auth().signInWithPopup(provider).then(function() {});
});
