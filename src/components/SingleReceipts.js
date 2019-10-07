import React from 'react'
class SingleRecepie extends React.Component{

   render() {
       console.log(this.props.data);
       let i = {
           title: this.props.data.strMeal,
           country: this.props.data.strArea,
           preperation: this.props.data.strInstructions.substring(0,100)+"...",
           category: this.props.data.strCategory,
           thumbnail: this.props.data.strMealThumb,
           video: this.props.data.strYoutube,
           originalSource: this.props.data.strSource
       };
       console.log(i);
       return(
           <div className="col-md-3">
               <div className="card-content">
                   <div className="card-img">
                       <img src={i.thumbnail} alt="" />
                       <span><h4>Origin Country: {i.country}</h4></span>
                   </div>
                   <div className="card-desc">
                       <h3>{i.title}</h3>
                       <p>{i.preperation}</p>
                       <a href="#" className="btn-card">Read More</a>
                   </div>
               </div>
           </div>
       )
   }
}

export default SingleRecepie
