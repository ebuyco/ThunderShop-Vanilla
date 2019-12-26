const layout = require('../layout');
const { getError } = require('../../../utils');

module.exports = ({errors}) => {
    return layout({
          content: `
              <div class="container__sig__in">
                  <div class="columns__is__one__centered__sign__in">
                          <div class="column__is__one__quarter__sign__in">
                                <form method="POST">
                                    <h1 class="title">Sign In</h1>
                                    <div class="field__sign__in">
                                        <label class="label__sign__in">Email</label>
                                        <input required class="input__sign__in" placeholder="Email" name="email"/>
                                        <p class="help__is__danger__sign__in">${getError(errors, 'email')}</p>
                                    </div>
                                    <div class="field__sign__in">
                                        <label class="label__sign__in">Password</label>
                                        <input required class="input__sign__in" placeholder="Password" name="password" type="password"/>
                                        <p class="help__is__danger__sign__in>${getError(errors, 'password')}</p>
                                    </div>
                                    <button class="button__is__primary__sign__in">Submit</button>
                                </form>
                                <a href="/signup">Need an account? Sign Up</a>
                          </div>
                  </div>
              </div>
          `
    });
};
