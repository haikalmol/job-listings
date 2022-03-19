import React from 'react';
import Listing from './Listing';
import jobsData from '../data.json';

class ListSection extends React.Component {
 constructor() {
  super();
  this.handleClick = this.handleClick.bind(this);

  this.state = {
   tags: new Set(),
   display: false,
   jobs: jobsData
  }
 }

 handleClick(e) {
  const {target} = e;

  if(e.target.id === "clear") {
    this.setState({
      tags: new Set(),
      display: false,
      jobs: jobsData
    })
  } 
  else if(e.target.id === "close") {
    const item = e.target.dataset.close;
    this.setState(prevState => {
      prevState.tags.delete(item);
      const jobs = jobsData.filter(job => {
        return [...prevState.tags].every(tag => {
          return job.role === tag || job.level === tag || job.languages.includes(tag) || job.tools.includes(tag)
        })
      });
      if (prevState.tags.size === 0) {
        prevState.display = false;
        prevState.jobs = jobsData;
        console.log(item)
      }
      return {jobs}
    }) 
  } else {
    this.setState(prevState =>{
     const tags = prevState.tags.add(target.textContent);
     const display = true;
     const jobs = jobsData.filter(job => {
      return [...prevState.tags].every(tag => {
        return job.role === tag || job.level === tag || job.languages.includes(tag) || job.tools.includes(tag)
      })
    });

     return {tags, display, jobs};
    })
  }
 }

 render() {
  console.log(this.state)
  const jobsComponent = this.state.jobs.map(job => <Listing 
   key={job.id} 
   job={job}
   handleClick={this.handleClick}
   state={this.state}
   />)  

   const filterComponent = [...this.state.tags].map(tag => <button  
    key={tag}
    className="tag"
    onClick={this.handleClick}
    >{tag}<img className="close" id="close" data-close={tag} src="./images/icon-remove.svg" alt=""/>
    </button>)

    const style = {
     display: {
       opacity: this.state.display && 1,
       "zIndex": !this.state.display && -1
    }
    }

   return (
    <section className="listings"> 
    <div className="filter" style={style.display}>
     <div className="buttons">
     {filterComponent}
     </div>
     <span className="clear" id="clear" onClick={this.handleClick}>Clear</span>
    </div>
     {jobsComponent}
    </section>
   )
 }
}

export default ListSection;