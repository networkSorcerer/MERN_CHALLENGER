import { useEffect, useRef, useState } from "react";
// import Loader from "./Loader";

export default function Chatting() {
  const ws = (useRef < WebSocket) | (null > null);
  const cctvUrl = "wss://cctv.example.com"; // cctv webSocekt Url
  const [cctvData, setCctvData] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    ws.current = new WebSocket(cctvUrl);
    ws.current.onopen = () => {
      console.log("WebSocket connection opened.");
      setIsLoading(false);
    };
    ws.current.onmessage = (event) => {
      if (event.data) {
        const base64ImageData = "data:image/jpg;base64," + event.data;
        setCctvData(base64ImageData);
      }
    };
    ws.current.onerror = () => console.log("WebSocket Error");
    ws.current.onclose = () => {
      console.log("Websocket connection is closed");
    };

    return () => {
      if (ws.current && ws.current.readyState === 1) {
        ws.current.close();
      }
    };
  }, []);

  return (
    <div className="cctv-container relative">
      {/* {isLoading && <Loader />} */}
      <img
        id="imageCCTV"
        width="360"
        height="220"
        src={cctvData}
        alt="CCTV"
        className={`cctv-image rounded-lg ${isLoading ? "hidden" : ""}`}
      />
    </div>
  );
}
