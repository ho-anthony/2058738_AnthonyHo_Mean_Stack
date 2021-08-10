var jsonArr = new Array;
function addCart(name, val) {
    var currCount = parseInt(document.getElementById("cartValue").innerHTML);
    currCount++;
    document.getElementById("cartValue").innerHTML = "" + currCount;
    var jsonObj = { item: name, price: val };
    if (sessionStorage.getItem("0") === null) {
        jsonArr.push(jsonObj);
        sessionStorage.setItem("0", JSON.stringify(jsonArr));
    }
    else {
        var newJSON = sessionStorage.getItem("0");
        var parsedJSON = JSON.parse(newJSON);
        jsonArr = [];
        for (var i = 0; i < parsedJSON.length; i++) {
            jsonArr[i] = parsedJSON[i];
        }
        jsonArr.push(jsonObj);
        sessionStorage.setItem("0", JSON.stringify(jsonArr));
    }
    var test = sessionStorage.getItem("0");
    console.log(JSON.parse(test));
}
