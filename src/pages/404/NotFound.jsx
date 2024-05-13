import React, { memo } from "react";

const NotFound = () => {
  return (
    <div className="notfound container">
      <img
        style={{ width: "100%" }}
        src="https://www.freeparking.co.nz/learn/wp-content/uploads/2023/06/768x385-21.png"
        alt=""
      />
    </div>
  );
};

export default memo(NotFound);
