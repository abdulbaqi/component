import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

faker.locale = "en";

const App = () => {
  var fakeDate = faker.date.recent();
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <div className="ui icon header">
          <i className="pdf file outline icon" />
        </div>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail author="Kafi" avatar={faker.image.avatar()} />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail author="baqi" avatar={faker.image.avatar()} />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail author="mafi" avatar={faker.image.avatar()} />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
