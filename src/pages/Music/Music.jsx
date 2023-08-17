import { SleepItAwayCover, RealityCheckCover } from "../../assets";
import { SingleSong } from "../../components";
import "./Music.scss";

const songs = [
    {
        id: 1,
        cover: SleepItAwayCover,
        name: "Sleep It Away",
        artists: "Spacetrin ft. Dragana Sukur",
        spotify: "https://open.spotify.com/album/6Kosl22CzH8Yco1mNRPj1V",
        youtube: "https://www.youtube.com/watch?v=CPEzFIPp8Zg",
        itunes: "https://music.apple.com/rs/album/sleep-it-away-feat-dragana-sukur-single/1702683205",
        soundcloud: "https://soundcloud.com/spacetrin/sleep-it-away",
    },
    {
        id: 2,
        cover: RealityCheckCover,
        name: "Reality Check (Spacetrin Remix)",
        artists: "Chance Encounter",
        spotify: "",
        youtube: "https://www.youtube.com/watch?v=PNrw3AuVq-c",
        itunes: "",
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
