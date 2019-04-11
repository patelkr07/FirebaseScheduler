
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyAZJj8GOgv818gjAA9ojI1htDWWEs3pDco",
        authDomain: "project-2-bb0ec.firebaseapp.com",
        databaseURL: "https://project-2-bb0ec.firebaseio.com",
        projectId: "project-2-bb0ec",
        storageBucket: "project-2-bb0ec.appspot.com",
        messagingSenderId: "724959629941"
    };
    firebase.initializeApp(config);

var database = firebase.database();

    $("#add-vessel-btn").on("click", function(event) {
        event.preventDefault();


        var vesselName = $("#vessel-input").val().trim();
        var dest = $("#destination-input").val().trim();
        var freq = $("#frequency-input").val().trim();
        var nextArrival = moment($("#next-arrival-input").val().trim(), "hh:mm a").format("X");
    
    var newVess = {
        vessel: vesselName,
        destination: dest,
        frequency: freq,
        arrival: nextArrival,
    };

    database.ref().push(newVess);

    console.log(newVess.vessel);
    console.log(newVess.destination);
    console.log(newVess.frequency);
    console.log(newVess.arrival);

    alert("You've added a vessel");

    $("#vessel-input").val("");
    $("#destination-input").val("");
    $("#frequency-input").val("");
    $("#next-arrival-input").val("");
    });

    database.ref().on("child_added", function(childSnapshot) {
        console.log(childSnapshot.val());

        var vesselName = childSnapshot.val().vessel;
        var dest = childSnapshot.val().destination;
        var freq = childSnapshot.val().frequency;
        var nextArrival = childSnapshot.val().arrival;

        console.log(vesselName);
        console.log(dest);
        console.log(freq);
        console.log(nextArrival);

        //Prettify step

        //calculate time until next vessel

        var newRow = $("<tr>").append(
            $("<td>").text(vesselName),
            $("<td>").text(dest),
            $("<td>").text(freq),
            $("<td>").text(nextArrival),
        );

        $("#rides-table > tbody").append(newRow);
    });



console.log(config);

console.log(database);

