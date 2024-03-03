import "./App.css";
import React from "react";
import io from "socket.io-client";
const socket = io.connect("http://localhost:8000");
function App() {
  const [message, setmessage] = React.useState("");
  const [chat, setchat] = React.useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    socket.emit("chat", { message });
    setmessage("");
  };
  React.useEffect(() => {
    socket.on("chat", (payload) => {
      setchat([...chat, payload]);
    });
    return () => {};
  }, [chat]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Chatty App</h1>

        {chat.map((item) => {
          return <h1>{item.message}</h1>;
        })}

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="type your message"
            value={message}
            onChange={(e) => {
              setmessage(e.target.value);
            }}
          />
          <input type="submit" />
        </form>
      </header>
    </div>
  );
}

export default App;
