var jsonArr = new Array;
function storeData(cName, pName, budget) {
    let jsonObj = {client:cName.value, project:pName.value, budgetVal:budget.value};
    if(sessionStorage.getItem(0) === null) {
        jsonArr.push(jsonObj);
        sessionStorage.setItem(0,JSON.stringify(jsonArr));
    } else {
        let newJSON = sessionStorage.getItem(0);
        // let test = JSON.parse(newJSON);
        // console.log(test);
        // jsonArr = []
        // jsonArr.push(test);
        jsonArr.push(jsonObj);
        sessionStorage.setItem(0,JSON.stringify(jsonArr));
    }
}

function getData() {
    let jsonData = sessionStorage.getItem(0);
    console.log(jsonData)
    let test = JSON.parse(jsonData);
    var table = document.getElementById("myTable");
    for(var i = 0 ; i < test.length ; i++) {
        var row = table.insertRow(1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        cell1.innerHTML = test[i].client;
        cell2.innerHTML = test[i].project;
        cell3.innerHTML = test[i].budgetVal;
    }
}
// Pass a json array into session storage instead of each individual input. In the store data function, pull the array, then edit the array and put the array back into
//session storage and use that in your table instead