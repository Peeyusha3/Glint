var config = {
         apiKey: "",
    authDomain: "projectforalze.firebaseapp.com",
    databaseURL: "https://projectforalze.firebaseio.com",
    projectId: "projectforalze",
    storageBucket: "projectforalze.appspot.com",
    messagingSenderId: "",
    
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
