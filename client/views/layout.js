module.exports = ({ content }) => {
  return `
    <!DOCTYPE html>
        <html lang="en">
          <head>
              <meta charset="utf-8>
              <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
              <title>Vanilla Shop</title>
              <link href="/public/sass/style.scss" rel="stylesheet"/>
          </head>
          <body>
            <header>
                  <nav class="navbar navbar-top">
                        <div class="container navbar-container">
                              

                        </div>
                  </nav>

            </header>
              ${content}
          </body>
        </html>

  `
}
