var jsonArr = new Array;
function storeData(cName, pName, budget) {
    let jsonObj = {client:cName.value, project:pName.value, budgetVal:budget.value};
    if(sessionStorage.getItem(0) === null) {
        jsonArr.push(jsonObj);
        sessionStorage.setItem(0,JSON.stringify(jsonArr));
    } else {
        let newJSON = sessionStorage.getItem(0);
        let parsedJSON = JSON.parse(newJSON);
        jsonArr = [];
        for(var i = 0 ; i < parsedJSON.length ; i++) {
            jsonArr[i] = parsedJSON[i];
        }
        jsonArr.push(jsonObj);
        sessionStorage.setItem(0,JSON.stringify(jsonArr));
    }
}

function getData() {
    let jsonData = sessionStorage.getItem(0);
    let parsedJSON = JSON.parse(jsonData);
    var table = document.getElementById("myTable");
    let total = 0;
    for(var i = 0 ; i < parsedJSON.length ; i++) {
        var row = table.insertRow(1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        cell1.innerHTML = parsedJSON[i].client;
        cell2.innerHTML = parsedJSON[i].project;
        cell3.innerHTML = "$" + parsedJSON[i].budgetVal;
        total += parseInt(parsedJSON[i].budgetVal,10);
    }
    document.write("Total Budget: " + total);
}
