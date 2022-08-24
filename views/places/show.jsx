const React = require("react");
const Def = require("../default");

function show (data) {
    let comments = (
        <h3 className="inactive">
            No comments yet!
        </h3>
    )
    let rating = (
        <h3 className="inactive">
            Not yet rated
        </h3>
    )
    if (data.place.comments.length) {
        let sumRatings = data.place.comments.reduce((tot, c) => {
            return tot + c.stars
        }, 0)
        let averageRating = Math.round(sumRatings / data.place.comments.length)
        let stars = ""
        for (let i = 0; i < averageRating; i++) {
            stars += "⭐"
        }
        rating = (
            <h3>
                {stars} stars
            </h3>
        )
    }
    if (data.place.comments.length) {
        comments = data.place.comments.map(c => {
            return (
                <div className="border" key={c.id}>
                    <h2 className="rant">{c.rant ? "Rant! 😡" : "Rave! 😻"}</h2>
                    <h4>{c.content}</h4>
                    <h3>
                        <strong>- {c.author}</strong>
                    </h3>
                    <h4>Rating: {c.stars}</h4>
                </div>
            )
        })
    }

    return (
        <Def>
            <main>
                <div className="image-div">
                <img src={data.place.pic} alt={data.place.name} className="place-image"/>
                <p>Located in {data.place.city}, {data.place.state}</p>
                </div>
                <div className="place-info">
                    <h1 className="place-name">{data.place.name}</h1>
                    <h2 className="ratings-header">Ratings</h2>
                    {rating}
                    <h2 className="description-header">Description</h2>                 
                    <p>{data.place.showEstablished()}</p>
                    <p>Serving {data.place.cuisines}</p>
                    <div>
                    <a href={`/places/${data.place.id}/edit`} className="btn btn-warning">Edit <i className="bi bi-pencil-fill"/></a>
                    <form className="d-inline-block mx-1" method="POST" action={`/places/${data.place.id}?_method=DELETE`}>
                        <button type="submit" className="btn btn-danger">Delete <i className="bi bi-eraser-fill"/></button>
                    </form>
                </div>
                </div>
                <hr/>
                <div>
                    <h2 className="comments-header">Comments</h2>
                    <a href={`/places/${data.place.id}/comment`} className="btn btn-success">Add A Comment</a>
                    {comments}
                </div>                
            </main>
        </Def>
    )
}

module.exports = show;