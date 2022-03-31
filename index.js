const port = process.env.PORT || 3001;
//for webserver to be created
const express = require('express');

//create a webserver using express
const app = express();

app.set('view engine', 'ejs');

app.get('/calc', function(req, res) {  
  let parameters = req.query;
  let op = parameters.operation;
  let num1 = 0;
  let num2 = 0;
  try {
    num1 = parseInt(parameters.numberone);
    num2 = parseInt(parameters.numbertwo);
    if ((typeof(op)=== 'string') && typeof(num1)==='number' && typeof(num2)==='number'){
        if ((op === 'add') || (op === 'sub') || (op === 'div') || (op === 'mul')){
        let result = calc(op, num1, num2);
        result = result || null;
        res.status(result._error ? 500 : 200);
        res.json(result);
        } else {
            res.status(400);
            res.json(null);
        }
      } else {
          res.status(400);
          res.json(null);
      }
  } catch (error) {
    res.status(500);
    res.json(null);
  }  
});
  
  app.get('/', function(req, res) {  
    res.status(404);
    res.json(null);
  });

  app.get('*', function(req, res) {  
    res.status(404);
    res.json(null);
  });

  //start the webserver on port X
app.listen(port);

function calc(op, num1, num2){
    let result = 0;
    switch (op) {
        case 'add':
            result = num1 + num2;
            break;
        case 'sub':
            result = num1 - num2;
            break;
        case 'div':
            result = num1 / num2;
            break;
        case 'mul':
            result = num1 * num2;
            break;
    }
    return result;
}   