const config = {
      apiKey: "",
    authDomain: "projectforalze.firebaseapp.com",
    databaseURL: "https://projectforalze.firebaseio.com",
    projectId: "projectforalze",
    storageBucket: "projectforalze.appspot.com",
    messagingSenderId: "",
  };
  var input;

  firebase.initializeApp(config);
  const bigTextEvaluationStudents = document.getElementById('data');
  const dbBigTextEvaluationStudentsRef = firebase.database().ref().child('data');
  function del() {
  input = document.getElementById("tasknum").value;
  var adaRef= firebase.database().ref('/data/'+input);
  adaRef.remove().then(function() {
    console.log("Removed successfully.")
  })
  .catch(function(error) {
    console.log("Remove failed: "+error.message)
  });
}
