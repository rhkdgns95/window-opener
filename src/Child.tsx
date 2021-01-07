export default function Child() {
  return (
    <div>
      <div
        style={{
          border: "1px dotted gray",
          width: "100vh",
          height: "300px",
          margin: "0 auto",
        }}
      >
        <h1>Child</h1>
        <div>this is child....</div>
        <input onChange={window.opener.onChangeMessage} />
        <button onClick={() => window.open('http://localhost:3000/child')}>새창</button>
      </div>
    </div>
  );
}
