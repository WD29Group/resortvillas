import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <video
        className="landingpg"
        src="elnido.webm"
        type="video/mp4"
        muted
        loop
        autoplay
      />
      <video
        className="landingpg"
        src="/src/beach.mp4"
        type="video/mp4"
        controls
        width="640"
        height="360"
        muted
        loop
        autoplay
      />
    </div>
  );
}

export default Home;
