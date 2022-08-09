//dependencies
const React = require("react");
const Def = require("./default");

function home() {
    return (
        <Def>
            <main>
                <h1>HOME</h1>
                <div>
                    <img src="/images/chia-fruit-drink.jpg" alt="Chia Fruit Shake" className="mx-auto d-block"/>
                    <div className="text-center">
                        Photo by <a href="https://unsplash.com/@cravethebenefits">Brenda Godinez</a> on <a href="https://unsplash.com/">Unsplash</a>
                    </div>
                </div>
                <a href="/places">
                    <button className="btn-primary mx-auto d-block">Places Page</button>
                </a>
            </main>
        </Def>
    )
}

//export
module.exports = home;