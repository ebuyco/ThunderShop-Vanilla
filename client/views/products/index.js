const layout = require('../layout');

module.exports = ({ products }) => {
    const renderedProducts = products
      .map(product => {
           return`
            <div class="column is-products">
                <div class="card product-card">
                    <figure>
                        <img src="data:image/png;base64, ${product.image}"/>
                   </figure>
                    <div class="card-content">
                        <h3 class="subtitle">${product.title}</h3>
                        <h5>$${product.price}</h5>
                    </div>
                    <footer class="card-footer">
                        <form action="/cart/products" method="POST">
                          <input hidden value="${product.id}" name="productId"/>
                          <button class="button has-icon is-inverted">
                              <span class="icon-shopping"></span> Add to Cart
                          </button>
                        </form>
                    </footer>
                </div>
            </div>

           `;
      }).join('\n');
      return layout({
        content: `
          <section class="banner">
              <div class="banner__container">
                  <div class="columns is__centered">
                        <img src="../../../public/images/banner.jpg"/>
                  </div>
              </div>
          </section>
          <section>
              <div class="container__products">
                  <div class="columns__products">
                      <div class="columns__products__wrapper"></div>
                       <div class="column__is__four__fifths">
                             <div class="products__detail">
                                  <h2 class="title__products__center">Featured Item</h2>
                                  <div class="columns__products__inside__wrapper">
                                      ${renderedProducts}
                                  </div>
                             </div>
                       </div>
                       <div class="column__next__product"></div>
                  </div>
              </div>
          </section>

        `
      })
  }
