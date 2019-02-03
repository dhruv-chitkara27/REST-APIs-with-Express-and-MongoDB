import express from 'express';
import parser from 'body-parser';
import mongoose, {Schema} from 'mongoose';
mongoose.connect('mongodb://user:chitkara27@ds221155.mlab.com:21155/node-express-jwt-test');
const userSchema = new Schema({
  username: {type: String, required: true, index: { unique: true }}
});

const User = mongoose.model('user', userSchema);

const app = new express();
app.use(parser.urlencoded({
  extended: false
}));

app.get('/',(req,res) => {
  return res.send('Hello world');
});

app.get('/users', (req,res) => {
  User.find({}, function(err, users) {
    return res.send(users);
  });
});

app.post('/',(req,res) => {
  const { username } = req.body;
  const newUser = new User({
    username: username
  });
  return newUser.save(function(err, model) {
    return res.send(model);
  });
});

app.listen(process.env.PORT || 3000);
