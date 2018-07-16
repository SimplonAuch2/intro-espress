var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.listen(3300, function(){
  console.log('listen on port 3300');
});

app.use('/static', express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));

var user={
  login: 'oceane',
  mdp: "mdp"
}



app.post('/', function (req, res){
  console.log(req.body);
  if (user.login === req.body.login && user.mdp === req.body.password) {
    console.log(req.body.login);
    console.log(req.body.password);
    res.send('success')
  }
  res.send('error');


});
