//Dependencies
const React = require('react');
const Def = require('../default');

function Comment({ place }) {
    return (
        <Def>
            <main>
                <h1>Add a New Comment</h1>
                <form method="POST" action={`/places/${place.id}/comment`}>
                    <div className="form-group">
                        <label htmlFor="author">Your Name</label>
                        <input id="author" name="author" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="rant">Rant?</label>
                        <input type="checkbox" id="rant"  className='form-control' name='rant'/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="stars">Rating</label>
                        <input id="stars" name="stars" className="form-control" type="number" min="0" max="5" step="0.5"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="content">Comment</label>
                        <textarea id="content" name="content" rows="4" cols="50"/>
                    </div>
                
                    <input type="submit" value="Add Comment" className='btn btn-primary'/>
                </form>
            </main>
        </Def>
    )
}

module.exports = Comment;