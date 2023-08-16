import { SleepItAwayCover } from "../../assets";
import { SingleSong } from "../../components";
import "./Music.scss";

const songs = [
    {
        id: 1,
        cover: SleepItAwayCover,
        name: "Sleep It Away",
        artists: "Spacetrin ft. Dragana Sukur",
        spotify: "https://open.spotify.com/album/6Kosl22CzH8Yco1mNRPj1V",
        youtube: "",
        itunes: "https://geo.music.apple.com/album/sleep-it-away-feat-dragana-sukur-single/1702683205",
        soundcloud: "",
    },
];

const Music = () => {
    return (
        <div className="music">
            <h1 className="music__latest-release-heading">Stream music</h1>
            <div className="music__songs-container">
                {songs.map((el) => (
                    <SingleSong key={el.id} cover={el.cover} name={el.name} artists={el.artists} spotify={el.spotify} youtube={el.youtube} itunes={el.itunes} soundcloud={el.soundcloud} />
                ))}
            </div>
        </div>
    );
};

export default Music;
