const React = require("react");
const Def = require("../default");

function show (data) {
    return (
        <Def>
            <main>
                <img src={data.place.pic} alt={data.place.name} className="place-image"/>
                <p>Located in {data.place.city}, {data.place.state}</p>
                <div className="place-info">
                    <h1 className="place-name">{data.place.name}</h1>
                    <h2 className="ratings-header">Ratings</h2>
                    <p>Not Rated</p>
                    <h2 className="description-header">Description</h2>                 
                    <p>{data.place.showEstablished()}</p>
                    <p>Serving {data.place.cuisines}</p>
                    <div>
                    <a href={`/places/${data.id}/edit`} className="btn btn-warning">Edit <i class="bi bi-pencil-fill"/></a>
                    <form className="d-inline-block mx-1" method="POST" action={`/places/${data.id}?_method=DELETE`}>
                        <button type="submit" className="btn btn-danger">Delete <i class="bi bi-eraser-fill"/></button>
                    </form>
                </div>
                </div>
                <hr/>
                <div>
                    <h2 className="comments-header">Comments</h2>
                    <p>No Comments Yet!</p>
                </div>                
            </main>
        </Def>
    )
}

module.exports = show;