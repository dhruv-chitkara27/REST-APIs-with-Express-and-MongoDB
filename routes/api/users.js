import { Router } from 'express';
import User from '../../models/User';
const router = Router();

router.get('/', (req,res) => {
  User.find({}, function(err, users) {
    if(err) {
      return res.status(500).send({ err });
    }
    return res.send(users);
  });
});

router.post('/',(req,res,next) => {
  const { username } = req.body;
  if (!username) {
    return res.status(400).send({ err: 'Required Fields not found: username'});
  }
  const newUser = new User({
    username: username
  });
  newUser.save(function(err, model) {
    if(err) {
    return res.status(400).send({ err });
  }
    return res.status(201).send(model);
  });
});

export default router;
