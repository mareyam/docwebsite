import { Inter } from "next/font/google";
import React from "react";

const inter = Inter({ subsets: ["latin"] });
const StickyBox = () => {
  const boxStyle = {
    position: "sticky",
    top: "0", // Adjust this value if you want to offset from the top
    backgroundColor: "#f0f0f0",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    zIndex: "1000", // Ensure it stays above other content
  };

  const containerStyle = {
    height: "200vh", // Adding height to make scrolling possible
    padding: "10px",
  };

  return (
      <div style={containerStyle}>
        <div style={boxStyle}>
          <h2>Sticky Box</h2>
          <p>This box will stick to the top when you scroll down.</p>
        </div>
        <div>
          <p>Scroll down to see the sticky effect...</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            nisl eros, pulvinar facilisis justo mollis, auctor consequat urna.
          </p>
          <p>
            Morbi a bibendum metus. Donec scelerisque sollicitudin enim eu
            venenatis. Duis tincidunt laoreet ex, in pretium orci vestibulum
            eget.
          </p>
          <p>
            Class aptent taciti sociosqu ad litora torquent per conubia nostra,
            per inceptos himenaeos.
          </p>
          {/* Add more content here to create a scrollable page */}
        </div>
      </div>
  );
};

export default StickyBox;
