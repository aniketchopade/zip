var express = require('express');

var rl = require('./readme');

var app = express();
app.listen(2001);

var doRestoftheThings = function () {    
    app.get("/all", function(req,res) {
        res.send(rl.zips);
    });

    app.get("/zip/:zip", function(req,res) {
        if (rl.zipIndx.indexOf(Number(req.params.zip))> 0 ) 
        {
            res.send ( rl.zips [ rl.zipIndx.indexOf(Number(req.params.zip)) ] );
        }
        else
        {
            res.send("not found");
        }
    });
}

rl.on('close', doRestoftheThings);


