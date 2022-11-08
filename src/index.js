// 1) import Reract and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom/client";

// 2) Get a reference to the div with ID root
const el = document.getElementById("root");

// 3) Tell React to take control of that element
const root = ReactDOM.createRoot(el);

// 4) Create a component

function App() {
  return <h1>hi there</h1>;
}

// Show the component on the screen
root.render(<App />);
