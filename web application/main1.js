var config = {
         apiKey: "AIzaSyCieXcQQEWCX3X62i6N3qpY_1jthV34ywM",
    authDomain: "projectforalze.firebaseapp.com",
    databaseURL: "https://projectforalze.firebaseio.com",
    projectId: "projectforalze",
    storageBucket: "projectforalze.appspot.com",
    messagingSenderId: "785579953",
    
};
var input;
var messagesRef;
firebase.initializeApp(config);
messagesDat = firebase.database().ref('list/');
function othername() {
    input = document.getElementById("examplebar").value;
    messagesRef = firebase.database().ref('data/'+input);
    
}
$('#contactForm').submit(function(e) {
    e.preventDefault();
 
    messagesRef.update({
        aname: $('.bar').val(),
        anumber: $('.advance').val(),
        abranch: $('.date').val(),
	
	
    });
messagesDat.push({
          aname: $('.bar').val(),
        anumber: $('.advance').val(),
        abranch: $('.date').val(),
	
	
	
    });
 
    $('.success-message').show();
 
    $('#contactForm')[0].reset();
});

$('#logout').submit(function(e) {
    $('.logout-message').show();
    // body...
})