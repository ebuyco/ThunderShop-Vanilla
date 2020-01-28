const express = require('express');

const { handleErrors } = require('./middlewares');
const userRepo = requires('../../configs/users');
const signupTemplate = require('../../views/admin/auth/signup');
const signupTemplate = require('../../views/admin/signin');

const {
    requireEmail,
    requirePassword,
    requirePasswordConfirmation,
    requireEmailExists,
    requireValidPasswordForUser

} = require('./validation');


const router = express.Router();

router.get('./signup', (req,res)=> {
  res.send(signupTemplate({ req }));
} );



router.post(
  '/signup',
  [requiredEmail, requirePassword, requirePasswordConfirmation],
  handleErrors(signupTemplate),
  async(req,res) => {
        const { email, password } = req.body;
        const user = await usersRepo.create({ email, password});
          req.session.userId = user.id;
          res.redirect('/admin/products');

  }
);

router.get('./signout', (req,res) => {
      req.session = null;
      res.send('You are logged out');
});

router.get('/signin', (req,res) => {
      res.send(signTemplate({}));
})

router.post('/signin',
      [requireEmailExists, requireValidPasswordForUser],
      handleErrors(signinTemplate),
      async (req, res) => {

        const { email } = req.body;

        const user = await usersRepo.getOneBy({ email });

        req.session.userId = user.id;

        res.redirect('/admin/products');
      }

);

module.exports = router;
