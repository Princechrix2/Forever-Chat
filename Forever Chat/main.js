
 // Your web app's Firebase configuration
 const firebaseConfig = {
    apiKey: "AIzaSyAZZAtCjIzceVypLmdtxqqRHDivQ-16zGk",
    authDomain: "btiime.firebaseapp.com",
    databaseURL: "https://btiime-default-rtdb.firebaseio.com",
    projectId: "btiime",
    storageBucket: "btiime.appspot.com",
    messagingSenderId: "731940077859",
    appId: "1:731940077859:web:4b494f9f5672e1f4790c96",
    measurementId: "G-NRJ1MXH4YL"
};

  // Initialize Firebase
firebase.initializeApp(firebaseConfig);


var db = firebase.database();
// var myName = prompt("Enter your Name : ");

function SendMessage() {
    var message = document.getElementById("message").value

    db.ref("messages").push().set({
        "sender" : myName,
        "message" : message
    });
    return false
};

// Listen 

db.ref("messages").on("child_added", function(snapshot) {
    var msg = "";

    msg += "<p class='msg'>";
        msg += "<span class='text-light p-1 SName'>" + snapshot.val().sender + "</span>" + "<span class='spc'></span>"+ "<span class='message'>" + snapshot.val().message; + "</span>";
    msg += "</p>";
document.getElementById("messaage").innerHTML += msg;

    const msgInput = document.getElementById("message")
    msgInput.value = '';

});