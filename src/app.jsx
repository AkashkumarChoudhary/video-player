import { VideoPlayer } from "vidify";

const MyVideoPlayer = ({ src }) => (
    <VideoPlayer src={src} autoplay className="my-video-player" />
  );
  
  export default MyVideoPlayer;