import React from "react";
import History from "./History";

function HistoryRender(props) {
  // render history array
  const history = props.element.map((e) => {
    return <History element={e.color} key={e.id} />;
  });

  return (
    <div className="history">
      <div className="history-text">Last</div>
      {history}
    </div>
  );
}

export default HistoryRender;
