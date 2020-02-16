const layout = require('../layout');
const { getError } = require('../../../utils/helper');


module.exports = ({ errors }) => {
    return layout({
      content: `
      <div class="columns__is__centered">
          <div class="column__is__half">
              <h1 class="subtitle__new__admin">Create a Product</h1>
              <form method="POST" enctype="multipart/form-data">
                <div class="field__new__admin">
                    <label class="label__admin__new">Title</label>
                    <input class="input__new__admin" placeholder="Title" name="title"/>
                    <p class="help__is__danger__admin__new">${getError(errors, 'title')}</p>
                </div>

                <div class="field__new__admin">
                    <label class="label__admin__new">Price</label>
                    <input class="input__new__admin" placeholder="Price" name="price"/>
                    <p class="help__is__danger__admin__new">${getError(errors, 'price')}</p>
                </div>

              <div class="field__new__admin">
                  <label class="label__admin__new">Image</label>
                  <input type="file" name="image"/>
              </div>
              <br/>
              <button class="button__is__primary__admin">Create</button>
              </form>
          </div>

      </div>

      `
    });

};
