import React from "react";

const Details = ({ selectedMenu }) => {
  const content = {
    Home: "Welcome to the homepage!",
    About: "We are a company that provides excellent services.",
    Services: "We offer web development, mobile apps, and consulting.",
    Contact: "Reach us at contact@example.com.",
  };

  return (
    <div className="details">
      <h2>{selectedMenu}</h2>
      <p>{content[selectedMenu]}</p>
    </div>
  );
};

export default Details;
