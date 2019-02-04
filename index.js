import express from 'express';
import parser from 'body-parser';
import apiRoutes from './routes/api';
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
app.use('/api', apiRoutes);

app.get('/',(req,res) => {
  return res.send('Hello world');
});


app.listen(process.env.PORT || 3000);
