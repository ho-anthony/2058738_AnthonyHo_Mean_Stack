let mongoose = require("mongoose");
let express = require("express");
let bodyParser = require("body-parser");

let app = express();
let url = "mongodb://localhost:27017/tcsmean";
mongoose.pluralize(null);   
mongoose.connect(url).then(res=>console.log("connected")).catch(err=>console.log(err));
let courseSchema = mongoose.Schema({
    _id:String,
    cname:String,
    cdesc:String,
    amt:Number
});
let courseModel = mongoose.model("Courses", courseSchema);
mongoose.disconnect();

function callDB(fields,func) {
    mongoose.connect(url).then(res=>console.log("connected")).catch(err=>console.log(err));
    let db = mongoose.connection;
        if(func=="add") {
            db.once("open",() => {
                let newCourse = new courseModel({_id:fields.id, cname:fields.cName, cdesc:fields.desc, amt:fields.amt});
                newCourse.save((err,result)=> {
                    if(!err){
                        console.log(result)
                    } else {
                        console.log(err);
                    }
                    mongoose.disconnect();  
                })
            })
        } else if( func=="delete") {
            db.once("open",() => {
                courseModel.deleteOne({_id:fields.id},(err,result)=> {
                    if(!err){
                        console.log(result)
                    } else {
                        console.log(err);
                    }
                    mongoose.disconnect();  
                })
            })
        } else if( func=="update") {
            db.once("open",() => {
                courseModel.updateOne({_id:fields.id},{$set:{amt:fields.amt}},(err,result)=> {
                    if(!err){
                        console.log(result)
                    } else {
                        console.log(err);
                    }
                    mongoose.disconnect();  
                })
            })
        }
}

app.get("/",(request,response)=> {
    response.sendFile(__dirname+"\\index.html");
})
app.get("/addCourse",(request,response)=> {
    response.sendFile(__dirname+"\\addCourse.html");
    if(request.query.id != undefined) {
        callDB(request.query,"add");
    }
})
app.get("/updateCourse",(request,response)=> {
    response.sendFile(__dirname+"\\updateCourse.html");
    callDB(request.query,"update");
})
app.get("/deleteCourse",(request,response)=> {
    response.sendFile(__dirname+"\\deleteCourse.html");
    callDB(request.query,"delete");
})
app.get("/fetchCourse",(request,response)=> {
    let htmlPage = `<div style="text-align:center;">
                        <h3>List of courses</h3>
                    </div>
                    <div>
                        <table border = 1 cellpadding = 15 align="center">
                            <thead> 
                                <tr>
                                    <th> ID </th>
                                    <th> Name </th>
                                    <th> Description </th>
                                    <th> Amount </th>
                                </tr>
                            </thead>
                            <tbody>
                    `
    mongoose.connect(url).then(res=>console.log("connected")).catch(err=>console.log(err));
    let db = mongoose.connection;

    db.once("open",()=> {
        courseModel.find({},(err,doc)=> {
            if(!err){
                    doc.forEach(rec=> {
                        htmlPage +=`<tr>
                                        <td>` + rec._id + `</td>
                                        <td>` + rec.cname + `</td>
                                        <td>` + rec.cdesc + `</td>
                                        <td>` + rec.amt + `</td>
                                    </tr>
                        `
                        console.log(htmlPage);
                    })
            }else {
                console.log(err);
            }
            mongoose.disconnect();
            htmlPage += `</tbody>
                        </table>
                        </div>`
            response.send(htmlPage);
        })
    })

})

app.listen(9090,()=>console.log("Server running on port number 9090"))