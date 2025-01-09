import React from 'react'

const Home_display = (props) => {
  return (
    <div>
        <div className="row mt-5">
      {
        Top_Demand?.map((row) => (
          <div key={row?.id} className="col-md-4 dd">
        <img className="img-fluid" src={row.image} alt />
        <h5>{row?.name}</h5>
        <p>{row?.description}</p>
        <div className="row div gap-1">
          <div className="col-md-4 ">
            <img src="./img/Icon.png" alt />
            <p className="mt-3">{row?.bedroom}-Bedroom</p>
          </div>
          <div className="col-md-4 ">
            <img src="./img/BACKGROUND_2.png" alt />
            <p className="mt-3">{row?.bathroom}-Bathroom</p>
          </div>
          <div className="col-md-4 ">
            <img src="./img/Icon (1).png" alt />
            <p className="mt-3">Villa</p>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-4">
            <p className>Price</p>
            <p>${row?.price}</p>
          </div>
          <div className="col-md-8">
            
            <Link to={`/product/${props.id}`} className="btn btn-primary" >
              View Property Details
            </Link>
          </div>
        </div>
      </div>
        ))
      }
      
    </div>
    </div>
  )
}

export default Home_display