var express = require("express")
var app = express()
const PORT = 3000
app.use(express.static('public'))

app.get("/", function(req, res){
	res.sendFile('index.html' , { root : __dirname});
})

app.listen(PORT, function(){
	console.log("app starting on port " + PORT)
})
