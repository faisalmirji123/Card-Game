import React from "react";

const Restaurant = () => {
  return (
    <>
      <div className="card-container">
        <div className="card">
          <div className="card-body">
            <span className="card-number card-circle subtle">1</span>
            <span className="card-author subtle">Breakfast</span>
            <h2 className="card-title">Maggi</h2>
            <span className="card-description subtle">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. A,
              velit!
            </span>
            <div className="card-read">Read</div>
          </div>
          <img
            src="https://www.nestle.com/sites/default/files/styles/brand_image/public/maggi-noodles_1.png?itok=3q9rXb-_"
            alt="images"
            className="card-media"
          />
          <span className="card-tag subtle">Order Now </span>
        </div>
      </div>
    </>
  );
};

export default Restaurant;
