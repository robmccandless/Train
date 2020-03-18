// Initialize Firebase
var config = {

    apiKey: "AIzaSyCxlH84fZS_mo4y2DIGmvrTf-fG058RL-c",
    authDomain: "train-59a51.firebaseapp.com",
    databaseURL: "https://train-59a51.firebaseio.com",
    projectId: "train-59a51",
    storageBucket: "train-59a51.appspot.com",
    messagingSenderId: "546179733550",
    appId: "1:546179733550:web:fa59754c7833093f1da7bf"
};

firebase.initializeApp(config);

var dataRef = firebase.database();

// Initial Values
var Train = "";
var Destination = "";
var FirstTrain = "";
var Frequency = "";

// Capture Button Click
$("#add-Train").on("click", function(event) {
    event.preventDefault();

    // Train = $("#name-input").val().trim();
    // Destination = $("#Destination-input").val().trim();
    // FirstTrain = $("#FirstTrain-input").val().trim();
    // Frequency = $("#Frequency-input").val().trim();

    var newTrain = {
            Train: $("#name-input").val().trim(),
            Destination: $("#Destination-input").val().trim(),
            FirstTrain: $("#FirstTrain-input").val().trim(),
            Frequency: $("#Frequency-input").val().trim()
        }
        // Code for the push
    dataRef.ref().push(newTrain);
});

// Firebase watcher + initial loader HINT: This code behaves similarly to .on("value")
dataRef.ref().on("child_added", function(train) {

    // use moment js

    // current time   -  firts train  - how minutes dif -   dif%fr  fre- reminider
    var nextTrain = ""
    var minutesAway = 0

    // calculate next train and minutes away 
    // show the info on the table (build the table)
    var trainrow = `
    <tr>
        <th scope="row">${train.val().Train}</th>
        <td>${train.val().Destination}</td>
        <td>${train.val().Frequency}</td>
        <td>${nextTrain}</td>
        <td>${minutesAway}</td>
    </tr>`

    $("#trainlist").append(trainrow)

});