const React = require("react");
const Def = require("../default");

function show (data) {
    return (
        <Def>
            <main>
                <img src={data.place.pic} alt={data.place.name} className="place-image"/>
                <div className="place-info">
                    <h1 className="place-name">{data.place.name}</h1>
                    <h2 className="ratings-header">Ratings</h2>
                    <p>Not Rated</p>
                    <h2 className="description-header">Description</h2>                 
                    <p>Located in {data.place.city}, {data.place.state} and serving {data.place.cuisines}</p>
                </div>
                <hr/>
                <div>
                    <h2 className="comments-header">Comments</h2>
                    <p>No Comments Yet!</p>
                </div>
                <div>
                    <a href={`/places/${data.id}/edit`} className="btn btn-warning">Edit</a>
                    <form className="d-inline-block mx-1" method="POST" action={`/places/${data.id}?_method=DELETE`}>
                        <button type="submit" className="btn btn-danger">Delete</button>
                    </form>
                </div>
            </main>
        </Def>
    )
}

module.exports = show;