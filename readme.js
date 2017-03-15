
var fs = require('fs');
var fsrl = require ('readline');
var rl = fsrl.createInterface( 
    {
        input: fs.createReadStream(__dirname + "/data/zips.json")
    }
);
rl.zips = [];
rl.zipIndx = [];
rl.processLine = function(data){
    rl.zips.push( JSON.parse( data) );
    rl.zipIndx.push (Number(JSON.parse( data)._id))
}
rl.on('line', rl.processLine);
module.exports = rl;


