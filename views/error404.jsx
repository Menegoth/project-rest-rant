//dependencies
const React = require("react");
const Def = require("./default");

function error404() {
    return (
        <main>
            <h1>404: PAGE NOT FOUND</h1>
            <p>Oopsm sorry, we can't find this page!</p>
        </main>
    )
}

//exports
module.exports = error404;