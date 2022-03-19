
import React from 'react';

class Listing extends React.Component {
 render () {
  const style = {
   "disp": {
    "borderLeft": this.props.job.featured && "5px solid #5ba4a4"
   },

   "displayNew": {"display": !this.props.job.new && "none"},
   "displayFeatured": {"display": !this.props.job.featured && "none"}
  }

  const jobLanguages = this.props.job.languages.map(lang => 
  <button 
  key={lang} 
  onClick={this.props.handleClick}>{lang}
  </button>)
  const jobTools = this.props.job.tools.map(tools => 
  <button 
  key={tools} 
  onClick={this.props.handleClick}>{tools}
 </button>)

  return (
   <div className="listing" style={style.disp}>
    <div className="details">
      <img className="logo" src={this.props.job.logo} alt="" />
     <div>     
      <div className="info">
       <p className="company">{this.props.job.company}</p>
       <p className="new" style={style.displayNew}>{this.props.job.new && "New!"}</p>
       <p className="featured" style={style.displayFeatured}>{this.props.job.featured && "Featured"}</p>
      </div>
      <h2 className="position">{this.props.job.position}</h2>
      <div className="post-info">
       <p className="postedAt">{this.props.job.postedAt} </p><div className="bullet"></div> 
       <p className="contract">{this.props.job.contract}</p><div className="bullet"></div>
       <p className="location">{this.props.job.location} </p>
      </div>
     </div>
    </div>
    <div className="job-tags">
     <button onClick={this.props.handleClick}>{this.props.job.role}</button>
     <button onClick={this.props.handleClick}>{this.props.job.level}</button>
     {jobLanguages}
     {jobTools}
    </div>
   </div>  
  )
 }
}

export default Listing
