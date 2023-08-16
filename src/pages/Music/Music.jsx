import { HomeBanner, SpotifyIcon, SleepItAwayCover } from "../../assets";
import "./Music.scss";

const Music = () => {
    return (
        <>
            <div className="music">
                <div className="music__song">
                    <img src={SleepItAwayCover} />
                    <div className="music__info">
                        <h1>Sleep It Away</h1>
                        <h2>Spacetrin ft. Dragana Sukur</h2>
                        <img className="music__social-icon" src={SpotifyIcon} style={{ width: "38px", height: "38px" }} />
                    </div>
                </div>
                <div className="music__song">
                    <img src={SleepItAwayCover} />
                    <div className="music__info">
                        <h1>Sleep It Away</h1>
                        <h2>Spacetrin ft. Dragana Sukur</h2>
                        <img className="music__social-icon" src={SpotifyIcon} style={{ width: "38px", height: "38px" }} />
                    </div>
                </div>{" "}
                <div className="music__song">
                    <img src={SleepItAwayCover} />
                    <div className="music__info">
                        <h1>Sleep It Away</h1>
                        <h2>Spacetrin ft. Dragana Sukur</h2>
                        <img className="music__social-icon" src={SpotifyIcon} style={{ width: "38px", height: "38px" }} />
                    </div>
                </div>
                <div className="music__song">
                    <img src={SleepItAwayCover} />
                    <div className="music__info">
                        <h1>Sleep It Away</h1>
                        <h2>Spacetrin ft. Dragana Sukur</h2>
                        <img className="music__social-icon" src={SpotifyIcon} style={{ width: "38px", height: "38px" }} />
                    </div>
                </div>{" "}
                <div className="music__song">
                    <img src={SleepItAwayCover} />
                    <div className="music__info">
                        <h1>Sleep It Away</h1>
                        <h2>Spacetrin ft. Dragana Sukur</h2>
                        <img className="music__social-icon" src={SpotifyIcon} style={{ width: "38px", height: "38px" }} />
                    </div>
                </div>
                <div className="music__song">
                    <img src={SleepItAwayCover} />
                    <div className="music__info">
                        <h1>Sleep It Away</h1>
                        <h2>Spacetrin ft. Dragana Sukur</h2>
                        <img className="music__social-icon" src={SpotifyIcon} style={{ width: "38px", height: "38px" }} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Music;
