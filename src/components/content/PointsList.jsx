import React from "react";

const PointsList = ({ points = [] }) => {
  return (
    <ul className="list-disc list-inside text-foreground text-base leading-relaxed">
      {points.map((point, index) => (
        <li key={index}>{point}</li>
      ))}
    </ul>
  );
};

export default PointsList;
