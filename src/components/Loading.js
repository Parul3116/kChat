import React from "react";

export const Loading = () => {
  return (
    <div style={{ position: "relative" }}>
      <h2
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%",
        }}
      >
        Loading...
      </h2>
    </div>
  );
};
