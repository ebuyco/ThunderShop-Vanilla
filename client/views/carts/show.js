const layout = require('../layout');

module.exports = ({ items }) => {
        const totalPrice = items.reduce((prev, item) => {
            return prev + item.quantity * item.product.price;
        }, 0);

      const renderedItems = items.map(item =>{
          return`
              <div class="cart__item message">
                  <h3 class="subtitle>${item.product.title}</h3>
                    <div class="cart__right">
                        <div class="cart__right__wrapper">
                            $${item.product.price} X ${item.quantity} =
                        </div>
                        <div class="price__is__size__4">
                            $${item.product.price * item.quantity}
                        </div>
                        <div class="remove__deleted">
                              <form method="POST" action="/cart/products/delete">
                                  <input hidden value="${item.id}" name="itemId"/>
                                  <button class="button__is__danger">
                                      <span class="icon__is__small">
                                             <span class="icon__fa__times"></span>
                                      </span>
                                  </button>
                              </form>
                        </div>
                    </div>
              </div>

          `;
      }).join('');
      return layout({
          content:`
            <div id="cart" class="container">
                <div class="columns__show__index">
                      <div class="columns__show__index__wrapper"></div>
                      <div class="column__is__four__fifths">
                          <h3 class="subtitle><b>Shopping Cart</b></h3>
                          <div class="show__rendered__items">
                              ${renderedItems}
                          </div>
                          <div class="total__message__is__info">
                              <div class="message__header">
                                  Total
                              </div>
                              <h1 class="show__title">$${totalPrice}</h1>
                              <button class="show__button__is__primary">Buy</button>
                          </div>
                      </div>
                      <div class="column__show__index"></div>
                </div>
            </div>
          `
      });
}
