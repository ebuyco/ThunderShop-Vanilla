 // <link href="/sass/style.scss" rel="stylesheet"/>
module.exports = ({ content }) => {
  return `
    <!DOCTYPE html>
        <html lang="en">
          <head>
              <meta charset="utf-8>
              <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
              <title>Vanilla Shop</title>
             <link href="/dist/style.css" rel="stylesheet"/>
           </head>
          <body>
            <header>
                  <nav class="navbar--navbar-top">
                        <div class="container navbar-container">
                             <div class="container--wrapper-navbar--container">

                                      <div class="phone--wrapper">
                                             <a href="" class="link--name"><span class="icon-phone"></span>+122 233 987 6543</a>
                                      </div>
                                    <div class="phone--email">
                                            <a href="" class="link--name--email"><span class="icon-email"></span>vanillajs#shop.com</a>
                                    </div>

                             </div>
                             <div class="social">
                                <ul class="social--wrapper">
                                    <li><a href=""><span class="facebook--icon"></span></a></li>
                                    <li><a href=""><span class="twitter--icon"></span></a></li>
                                    <li><a href=""><span class="linkeind--icon"></span></a></li>
                                    <li><a href=""><span class="dribble--icon"></span></a></li>
                                    <li><a href=""><span class="google--icon"></span></a></li>
                                </ul>
                              </div>
                            </div>
                      </nav>
                       <nav class="navbar navbar-bottom>
                          <div class="container navbar-bottom>
                              <div class="container navbar-container">
                                    <div class="logo-wrapper">
                                        <a href="/">
                                            <h3 class="title">Vanilla Shop</h3>
                                        </a>
                                    </div>
                                    <div class="navbar-item>
                                          <div class="navbar-buttons">
                                               <div class="navbar-buttons>
                                                    <div class="navbar--item--list">
                                                        <a href="/"><span class="icon--star"></span>Products</a>
                                                    </div>
                                                    <div class="navbar--item--list">
                                                        <a href="/cart"><span class="icon--shopping"></span>Cart</a>
                                                    </div>
                                               </div>
                                          </div>
                                    </div>
                              </div>
                          </div>
                       </nav>
            </header>
              ${content}

          </body>
        </html>

  `;
};
