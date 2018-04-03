var table = document.querySelector("tbody");
var dataset = dataSet;

table.innerHTML = "";

for (var i = 0; i < dataSet.length; i++) {
    
    var data = dataset[i];
    var headers = Object.keys(data);
    var row = table.insertRow(i);


    for (var j = 0; j < headers.length; j++) {

        var header = headers[j];
        var cell = row.insertCell(j);
        
        cell.innerText = data[header];
    }
}