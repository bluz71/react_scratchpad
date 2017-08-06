import React from "react";

const Summary = ({ title="Summary" }) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>Inside <em>components</em> sub-directory.</p>
    </div>
  );
};

export default Summary;
