import { useEffect, useRef, useState } from "react";

const Chatting = () => {
  const ws = useRef(null);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [user, setUser] = useState("");

  useEffect(() => {
    const name = prompt("사용자 이름을 입력하세요:", "익명");
    setUser(name || "익명");

    ws.current = new WebSocket("ws://localhost:5555");

    ws.current.onopen = () => console.log("WebSocket connected");

    ws.current.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        setMessages((prev) => [...prev, `${data.user}: ${data.text}`]);
      } catch {
        console.log("Invalid message received");
      }
    };

    ws.current.onerror = () => console.log("WebSocket Error");
    ws.current.onclose = () => console.log("WebSocket closed");

    return () => {
      if (ws.current && ws.current.readyState === 1) ws.current.close();
    };
  }, []);

  const sendMessage = () => {
    if (ws.current && ws.current.readyState === 1 && input.trim() !== "") {
      ws.current.send(JSON.stringify({ user, text: input }));
      setInput("");
    }
  };

  return (
    <div
      style={{ width: "400px", margin: "20px auto", fontFamily: "sans-serif" , color:"#fdfafaff"}}
    >
      <h2>실시간 채팅</h2>
      <div
        style={{
          border: "1px solid #ccc",
          padding: "10px",
          height: "300px",
          overflowY: "auto",
          marginBottom: "10px",
          background: "#1d1b1bff",
        }}
      >
        {messages.map((msg, idx) => (
          <div key={idx}>{msg}</div>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={(e) => e.key === "Enter" && sendMessage()}
        style={{ width: "70%", padding: "5px" }}
      />
      <button
        onClick={sendMessage}
        style={{ width: "28%", marginLeft: "2%", padding: "5px" }}
      >
        전송
      </button>
    </div>
  );
};

export default Chatting;
