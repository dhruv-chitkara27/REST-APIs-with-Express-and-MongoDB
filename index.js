import express from 'express';
import parser from 'body-parser';

const app = new express();
app.use(parser.urlencoded({
  extended: false
}));

app.get('/',(req,res) => {
  return res.send('Hello world');
});

app.post('/',(req,res) => {
  return res.send(req.body);
})

app.listen(process.env.PORT || 3000);
