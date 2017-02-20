var express = require("express")
var app = express()
const PORT = 3000
app.use(express.static('public'))
app.use('/scripts', express.static(__dirname + '/node_modules/mo-js'));

app.get("/", function(req, res){
	res.sendFile('index.html' , { root : __dirname});
})

module.exports = app;

/*app.listen(PORT, function(){
	app.set('port', process.env.PORT || PORT);
})*/
