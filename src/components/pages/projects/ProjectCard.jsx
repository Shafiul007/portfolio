import React from 'react';

const ProjectCard = ({image,title,link,description}) => {
    return (
        <div className="card bg-slate-400 w-96 shadow-sm">
  <figure className="px-10 pt-10">
    <img 
      src={image}
      alt={title}
      className="rounded-xl w-60 h-50" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{title}</h2>
    <p>{description}</p>
    <div className="card-actions">
        <a href={link} target='_blank'><button className="btn btn-primary">See Website</button></a>
      
    </div>
  </div>
</div>
    );
};

export default ProjectCard;