import React from "react";

const WorkItems = ({ item }) => {
  return (
    
    <div className="work__card" key={item.id}>
      <img src={item.image} alt="" className="work__img" />
      <h3 className="work__title">{item.title}</h3>
      <a href={item.href} className="work__button">
        Demo <ibx className="bx bx-right-arrow-alt work__button"></ibx>
      </a>
      <a href={item.href_git} className="work__button">
        Github <ibx className="bx bx-right-arrow-alt work__button"></ibx>
      </a>
      </div>
    
  );
};

export default WorkItems;
