
import ReactDOM from "react-dom/client";
import "./globals.scss";
// import App from "./app/App";
import { VideoPlayer } from "../components/VideoPlayer/VideoPlayer";
// import React from "react";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  // <App />
  <VideoPlayer
          loop={false}
          muted={false}
          defaultSrcIndex={0}
          src={["https://videos.pexels.com/video-files/20600550/20600550-uhd_3840_2160_30fps.mp4", "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4","http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"]}
          volume={0.8}
          durationType={"default"}
          annotation={false}
          controller={{}}
          block={false}
          rounded={true}
          width={"1280px"}
          primaryColor={"#bf8888"}
          autoPlay={false}
          onPlay={() => console.log("Play")}
          onPause={() => console.log("Pause")}
          onClick={() => console.log("Video clicked")}
          onError={() => console.log("Error")}
      />

);
