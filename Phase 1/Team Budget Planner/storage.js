var jsonArr = new Array;
function storeData(cName, pName, budget) {
    let jsonObj = {client:cName.value, project:pName.value, budgetVal:budget.value};
    if(sessionStorage.getItem(0) === null) {
        jsonArr.push(jsonObj);
        sessionStorage.setItem(0,JSON.stringify(jsonArr));
    } else {
        let newJSON = sessionStorage.getItem(0);
        jsonArr.push(jsonObj);
        sessionStorage.setItem(0,JSON.stringify(jsonArr));
    }
}

function getData() {
    let jsonData = sessionStorage.getItem(0);
    let test = JSON.parse(jsonData);
    // var table = document.getElementById("myTable");
    for(var i = 0 ; i < test.length ; i++) {
        // var row = table.insertRow(0);
        console.log(test[i].client);
        console.log(test[i].project)
        console.log(test[i].budgetVal)
        // //console.log(JSON.stringify(test[i]));
        //  console.log(currRow.client.value)
        //  console.log(blah.project)
        //  console.log(blah.budgetVal)
    }
}
// Pass a json array into session storage instead of each individual input. In the store data function, pull the array, then edit the array and put the array back into
//session storage and use that in your table instead