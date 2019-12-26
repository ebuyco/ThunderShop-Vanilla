const layout = require('../layout');

module.exports = ({ products }) => {
      const renderProducts = products.map(product => {
            return`
              <tr>
                <td>${product.title}</td>
                <td>${product.price}</td>
                <td>
                    <a href="/admin/products/${product.id}/edit">
                        <button class="button__admin__is__link">
                          Edit
                        </button>
                     </a>
                  </td>
                 <td>
                    <form method="POST" action="/admin/products/${product.id}/delete">
                          <button class="button__is__danger__admin">Delete</button>
                    </form>
                 </td>
                  </tr>
            `
      }).join('');
      return layout({
            content:`
                <div class="control__admin__index">
                      <h1 class="subtitle__index">Products</h1>
                      <a href="/admin/products/new" class="button__is__primary">New Product</a>
                </div>
                <table class="table__index__admin">
                      <thead>
                            <tr>
                                <th>Title</th>
                                <th>Price</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                      </thead>
                      <tbody>
                              ${renderedProducts}
                      </tbody>
                </table>
            `
      });
}
