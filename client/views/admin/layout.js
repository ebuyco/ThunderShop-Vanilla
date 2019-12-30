 // <link href="../../../public/sass/style.scss" rel="stylesheet"/>
module.exports = ({ content }) => {
    return `
      <!DOCTYPE html>
      <html lang="en">
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <title>Vanilla Shop AdminPanel</title>
           <link href="/dist/style.css" rel="stylesheet"/>
          </head>
          <body class="admin">
              <header class="admin__header__panel">
                  <nav class="navbar__navbar__bottom__admin">
                  <div class="admin__container__admin">
                  <div class="navbar__bottom__admin__wrapper">
                      <a href="/admin/products">
                          <h3 class="title__admin__panel">Admin Panel</h3>
                      </a>
                 </div>
              <div class="navbar__item__admin>
                  <div class="navbar__buttons__admin">
                        <div class="navbar__items__admin">
                            <a href="/admin/products"><span class="icon__fa__star"></span>Products</a>
                        </div>
                  </div>
              </div>
             </div>
             </nav>
              </header>
                <div class="container__admin__content">
                    ${content}
                </div>
          </body>
      </html>
    `;
}
