//dependencies
const React = require('react')

function Def (html) {
    return (
        <html>
            <head>
                <title>Title</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css"/>
                <link rel="stylesheet" href="/css/style.css" />
            </head>
            <body>
                <div className="default-wrapper">
                    {html.children}
                    <div className="push"></div>
                </div>
                <footer className="footer">Made By Antonio Monteiro</footer>
            </body>
        </html>
    )
}

//export
module.exports = Def
