const React = require('react')
const Def = require('../default')

function show(data){
    return(
        <Def>
            <main>
                <div style={{display: "flex"}}>
                    <div className='col-sm-6'>
                    <img src={data.place.pic} alt = "coffe cat" style={{padding:"10px"}}/>
                    <h3 style={{textAlign:"center", fontSize:"15px", marginLeft:"4em"}}>Located in {data.place.city}, {data.place.state} and serving {data.place.cuisines}</h3>
                    </div>
                    <div style={{display:"flex", flexDirection:"column"}}>
                    <h1 style={{marginLeft:"2em"}}>{data.place.name}</h1>
                    <h2 style={{color:"lightblue",textAlign:"center",marginLeft:"2em"}}>Rating</h2>
                    <h3 style={{textAlign:"center", fontSize:"15px", marginLeft:"4em"}}>Not Rated</h3>
                    <h2 style={{color:"lightblue",textAlign:"center",marginLeft:"2em"}}>Description</h2>
                    <h3>{data.place.showEstablished()}</h3>
                    <h4>Serving {data.place.cuisines}</h4>
                    </div>   
                </div>
                <h2 style={{color:"lightblue",textAlign:"center",padding:"1em"}}>Comments</h2>
                <h3 style={{textAlign:"center", fontSize:"15px",padding:"3em",marginTop:"-3em"}}>No comment yet!</h3>
                <a href={`/places/${data.id}/edit`} className='btn btn-warning'>
                    Edit
                </a>
                <form method="POST" action={`/places/${data.id}?_method=DELETE`}>
                    <button type="submit" className="btn btn-danger">
                        Delete
                    </button>
                </form>
            </main>
        </Def>
    )
}

module.exports = show