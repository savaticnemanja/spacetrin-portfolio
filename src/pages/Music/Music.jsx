import { SingleSong } from "../../components";
import { tracks } from "../../data";
import "./Music.scss";

const Music = () => {
  return (
    <div className="music">
      <h1 className="music__latest-release-heading">Stream music</h1>
      <div className="music__songs-container">
        {tracks.map((el) => (
          <SingleSong
            key={el.id}
            cover={el.cover}
            name={el.name}
            artists={el.artists}
            spotify={el.spotify}
            youtube={el.youtube}
            appleMusic={el.appleMusic}
            soundcloud={el.soundcloud}
          />
        ))}
        <p className="dev__signature">Copyright &#169; Spacetrin. Developed by <a href="https://nemanjas.dev">nemanjas.dev</a></p>
      </div>
    </div>
  );
};

export default Music;
