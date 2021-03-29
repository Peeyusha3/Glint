(function() {
  const config = {
     apiKey: "",
    authDomain: "projectforalze.firebaseapp.com",
    databaseURL: "https://projectforalze.firebaseio.com",
    projectId: "projectforalze",
    storageBucket: "projectforalze.appspot.com",
    messagingSenderId: "",
  };

  firebase.initializeApp(config);
  const bigTextEvaluationStudents = document.getElementById('data');
  const dbBigTextEvaluationStudentsRef = firebase.database().ref().child('data');
  dbBigTextEvaluationStudentsRef.on('value', snap => bigTextEvaluationStudents.innerText = snap.val());

  var table = document.querySelector('#table1 tbody');
  const dbEvaluationStudentsRef = firebase.database().ref().child('data');
  dbEvaluationStudentsRef.on('value', snap => {
    while(table.hasChildNodes()) {
		    table.removeChild(table.firstChild);
	  }

    var students = snap.val();
    for(var i in students) {
      var row = table.insertRow(-1);
      for(var j in students[i]) {
				cell = row.insertCell(-1);
				cell.innerHTML = students[i][j];
			}
		}
  });
}());
