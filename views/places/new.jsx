//Dependencies
const React = require('react');
const Def = require('../default');

function new_form() {
    return (
        <Def>
            <main>
                <h1>Add a New Place</h1>
                <form method="POST" action="/places">
                    <div className="form-group">
                        <label htmlFor="name">Place Name</label>
                        <input id="name" name="name" required className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="pic">Picture Link</label>
                        <input id="pic" name="pic" type="url" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="city">City</label>
                        <input id="city" name="city" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="state">State</label>
                        <input id="state" name="state" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="cuisines">Cuisines</label>
                        <input id="cuisines" name="cuisines" required className="form-control"/>
                    </div>
                    <input type="submit" value="Add Place" className="btn btn-primary"/>
                </form>
            </main>
        </Def>
    )
}

//export
module.exports = new_form;