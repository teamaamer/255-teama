import React from "react";

const PageHeader = ({ text, subtext }) => {
  return (
    <div className="w-full border-b-2 border-primary pb-2 mb-2">
      <h2 className="text-4xl font-bold mb-2 text-primary">{text}</h2>
      <p className="font-bold text-foreground">
        {subtext}
      </p>
    </div>
  );
};

export default PageHeader;
