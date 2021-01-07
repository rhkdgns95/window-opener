import React, { useState } from "react";
import Parent from "./Parent";

export default () => {
  const [message, setMessage] = useState<string>("");
  const onChangeMessage = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };
  return (
    <div
      style={{
        border: "3px solid green",
        width: "95vw",
        height: "900px",
        margin: "0 auto",
      }}
    >
      <h1>Home</h1>
      <p>
        message :
        <span style={{ marginLeft: 5, color: "red" }}>{message}</span>
      </p>
      <Parent onChangeMessage={onChangeMessage} />
    </div>
  );
};
