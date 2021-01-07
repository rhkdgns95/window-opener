import { useEffect } from "react";

let browser: any = window;

export default function Parent(props: any) {
  useEffect(() => {
    browser = window.self;
    browser.onChangeMessage = props.onChangeMessage;
  }, []);

  const onOpen = () => {
    browser.open("http://localhost:3000/child");
  };

  return (
    <div>
      <div
        style={{
          border: "1px solid blue",
          width: "100vh",
          height: "300px",
          margin: "0 auto",
        }}
      >
        <h1>Parent</h1>
        <div>this is parent....</div>
        <button onClick={onOpen}>새창 띄우기</button>
      </div>
    </div>
  );
}
