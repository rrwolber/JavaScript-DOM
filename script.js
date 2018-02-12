var globalCounter = 0;
var tbody = document.getElementById('tbody');

for (var i = 0; i < dataSet.length; i++) {
    var tr = "<tr>";
    var th = "<th>"


    /* Must not forget the $ sign */
    tr += "<td>" + dataSet[i].datetime + "</td>" + "<td>" + dataSet[i].city + "</td>" + dataSet[i].state + "</td>" + dataSet[i].country + "</td>" + dataSet[i].shape + "</td>" + dataSet[i].durationMinutes + "</td>" + dataSet[i].comments + "</td></tr>";

    /* We add the table row to the table body */
    tbody.innerHTML += tr;
}