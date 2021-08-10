var jsonArr = new Array;
function addCart(name:String, val:number) : void{
    let currCount:number = parseInt(document.getElementById("cartValue").innerHTML);
    currCount++;
    document.getElementById("cartValue").innerHTML = ""+currCount;

    let jsonObj = {item:name , price:val};
    if(sessionStorage.getItem("0") === null) {
        jsonArr.push(jsonObj);
        sessionStorage.setItem("0",JSON.stringify(jsonArr));
    }  else {
        let newJSON = sessionStorage.getItem("0");
        let parsedJSON = JSON.parse(newJSON);
        jsonArr = [];
        for(let i = 0 ; i < parsedJSON.length ; i++) {
            jsonArr[i] = parsedJSON[i];
        }
        jsonArr.push(jsonObj);
        sessionStorage.setItem("0",JSON.stringify(jsonArr));
    }
}