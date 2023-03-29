import React, { Component } from 'react'

export default class NewsItem extends Component {

    render() {
        let {title,description,imageUrl,newsUrl,author,date,source} = this.props;
        return (
                <div className='container-box' id='cbox' >
                <div className="card" style={{border:'4px solid black'}} >
                <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left: '90%', zIndex:'1',marginTop:'0px'}}> {source}
  </span> 
   {/* we made 90% because it was coming to much outside in the right side. so we brought it to left side. zIndex we kept 1 because the news source was going below the next news. so to bring it up we made it.  */}
  <img src={imageUrl} className="card-img-top"  alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title} ...</h5>
    <p className="card-text">{description}...</p>
    <p className="card-text"><small className="text-muted">By {!author?"Unknown": author} on {new Date(date).toGMTString()}</small></p>
     {/* in above code if author is not given then it should show unknown.  */}
    <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-primary">Read Now</a>
  </div>
</div>
                </div>
             )
    }
}
