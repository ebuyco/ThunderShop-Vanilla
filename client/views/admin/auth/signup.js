const layout = require('../layout');
const { getError } = require('../../../utils/helper');

module.exports = ({ req, errors}) => {
    console.log(errors);
    return layout({
      content: `
          <div class="container__sign__up">
                <div class="columns__is__centered__sign__up">
                      <div class="column__is__one__quarter__sign__up">
                          <form method="POST">
                              <h1 class="title__sign__up">Sign Up</h1>
                              <div class="field__sign__up">
                                  <label class="label__sign__up">Email</label>
                                  <input class="input__sign__up" placeholder="Email" name="email"/>
                                  <p class="help__is__danger__sign__up">${getError(errors, 'email')}</p>
                              </div>
                              <div class="field__sign__up">
                                 <label class="label__sign__up">Password</label>
                                 <input class="input__sign__up" placeholder="Password" name="password" type="password"/>
                                <p class="help__is__danger__sign__up">${getError(errors, 'password' )}</p>
                              </div>
                              <div class="field__sign__up">
                                  <label class="label__sign__up">Password Confirmation</label>
                                  <input class="input__sign__up" placeholder="Password Confirmation" name="passwordConfirmation" type="password"/>
                                  <p class="help__is__danger__sign__up">${getError(errors, 'passwordConfirmation')}</p>
                              </div>
                              <button class="button__is__primary__sign__up">Submit</button>
                          </form>
                          <a href="/signin">Have an account? Sign In</a>
                      </div>
                </div>
          </div>
      `
    })
}
