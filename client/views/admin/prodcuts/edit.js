const layout = require('../layout');
const { getError } = require('../../../utils/helper');

module.exports = ({ product, errors }) => {
    return layout({
      content:`
          <div class="columns__edit__is__centered">
              <div class="column__is__half__edit__products">
                  <h1 class="products__edit">Edit a Product</h1>
                  <form method="POST" enctype="multipart/form-data">
                      <div class="field__edit__products">
                            <label class="label__product__edit">Title</label>
                            <input value="${product.title}"
                            class="input"
                            placeholder="Title"
                            name="title">
                         <p class="help__is__danger">${getError(errors, 'title')}</p>
                      </div>
                      <div class="field__edit__admin">
                            <label class="label__edit__admin">Price</label>
                            <input value="${product.price}"
                            class="input__edit__admin"
                            placeholder="Price"
                            name="price"
                            />
                            <p class="help__is__danger__admin">${getError(errors, 'price')}</p>
                      </div>
                      <div class="field__edit__admin">
                          <label class="label">Image</label>
                          <input type="file" name="image"/>
                      </div>
                      <br/>
                      <button class="button__admin__is__primary>Edit</button>
                  </form>
              </div>
          </div>
      `
    });
}

