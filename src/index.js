import React from "react";
import ReactDOM from "react-dom/client";
import "../src/index.css";
import { faker } from "@faker-js/faker";
import { Comment, ApprovalCard } from "./components";

const App = () => {
  return (
    <div>
      <ApprovalCard>
        <div>
          <h4>Warning!</h4>
          Are you sure you want to do this?
        </div>
      </ApprovalCard>
      <ApprovalCard>
        <Comment
          avatar={faker.image.avatar()}
          author="Sam"
          content="Great blog!"
          date="Today at 6:00PM"
        />
      </ApprovalCard>
      <ApprovalCard>
        <Comment
          avatar={faker.image.avatar()}
          author="John"
          content="I like the subject!"
          date="Today at 6:00PM"
        />
      </ApprovalCard>
      <ApprovalCard>
        <Comment
          avatar={faker.image.avatar()}
          author="Andy"
          content="I like the writing!"
          date="Today at 6:00PM"
        />
      </ApprovalCard>
    </div>
  );
};

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
