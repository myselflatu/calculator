const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(request, response){
    response.sendFile(__dirname +"/index.html");
});
app.post("/", function(request, response){
    var num1 = Number(request.body.num1);
    var num2 = Number(request.body.num2);

    var result = num1 + num2;

    response.send("the calculation result is" +  result);
});

app.get("/BMI", function(request, response){
    response.sendFile(__dirname +"/BMI.html");
});
app.post("/BMI", function(request, response){
    var weight = Number(request.body.weight);
    var height = Number(request.body.height);

    var n = weight/(height * height);

    response.send( "Your BMI is " +  n);
});

app.listen(3000, function(){
    console.log("server is running on port:3000");
});
