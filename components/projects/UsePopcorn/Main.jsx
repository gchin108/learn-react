import React from "react";

const Main = ({ children }) => {
  return (
    <div className="flex justify-center gap-10 mx-[200px] mt-4 relative">

      {children}
    </div>
  );
};

export default Main;
