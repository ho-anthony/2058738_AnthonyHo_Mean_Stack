// function storeData(cName, pName, budget) {
//     let jsonObj = {client:cName.value, project:pName.value, budgetVal:budget.value};
//     sessionStorage.setItem(cName.value,JSON.stringify(jsonObj));
//     // let newObj = sessionStorage.getItem(cName.value);
//     // let test = JSON.parse(newObj); 
//     // console.log(test.project);
// }

// function getData() {
//     let result = new Array();
//     for(var i = 0 ; i < sessionStorage.length ; i++) {
//         let curr = sessionStorage.getItem(sessionStorage.key(i));
//         let currJSON = JSON.parse(curr);
//        result[i] = currJSON;
//     }
//     console.log(result);
// }

function storeData(cName, pName, budget) {
    let jsonObj = {client:cName.value, project:pName.value, budgetVal:budget.value};
    if(sessionStorage.getItem(0) === null) {
        sessionStorage.setItem(0,JSON.stringify(jsonObj));
        let newObj = sessionStorage.getItem(0);
        let test = JSON.parse(newObj);
        console.log(newObj);
    } else {
        let jsonArr = new Array;
        let newJSON = sessionStorage.getItem(0);
        jsonArr.push(JSON.parse(newJSON));
        jsonArr.push(jsonObj);
        sessionStorage.setItem(0,JSON.stringify(jsonArr));

        // let testJSON = sessionStorage.getItem(0);
        // console.log(testJSON);
    }

}
// Pass a json array into session storage instead of each individual input. In the store data function, pull the array, then edit the array and put the array back into
//session storage and use that in your table instead