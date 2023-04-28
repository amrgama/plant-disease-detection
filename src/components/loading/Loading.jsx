import React from "react";
import Lottie from "lottie-react";
import loading from "../../animations/loading.json";
const Loading = () => {
  return (
    <Lottie
      style={{
        width: "50%",
        height: "50%",
      }}
      animationData={loading}
    />
  );
};

export default Loading;
