import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaSoundcloud, FaSpotify, FaTwitter, FaYoutube } from "react-icons/fa";
import { HomeBanner, SleepItAwayCover } from "../../assets";
import { SingleSong } from "../../components";
import "./Home.scss";

const Home = () => (
    <>
        <div className="home">
            <div className="home__left">
                <div>
                    <h1 className="home__latest-release-heading">About me</h1>
                    <p>
                        Hailing from Serbia, Spacetrin embarked on his musical journey in 2016, venturing into the realm of music production. Initially drawn to Dubstep and Drum & Bass, his creative
                        instincts evolved, guiding him towards the captivating beats of Hip Hop, where he found his true musical resonance.
                    </p>
                    <p>
                        Driven by a desire to refine his skills and deepen his passion, he enrolled in the Music Production module at the University of Novi Sad. Here, he immersed himself in a
                        comprehensive curriculum, enhancing his technical prowess and broadening his artistic perspectives. This educational pursuit marked a pivotal and transformative chapter in his
                        story.
                    </p>
                    <p>
                        Spacetrin&apos;s artistic growth unfurled through dynamic collaborations. Nurtured by an innate knack for sound engineering, he seamlessly transitioned into roles as a mix and
                        master engineer. With a wealth of experience and an unwavering artistic spirit, Spacetrin stepped onto the music scene, this time under his own name. Thus, he embarked on a
                        musical odyssey that authentically encapsulated his essence.
                    </p>
                </div>
                <div className="home__latest-release">
                    <h1 className="home__latest-release-heading">Latest Release</h1>
                    <SingleSong
                        cover={SleepItAwayCover}
                        name="Sleep It Away"
                        artists="Spacetrin ft. Dragana Sukur"
                        spotify="https://open.spotify.com/album/6Kosl22CzH8Yco1mNRPj1V"
                        youtube="asd"
                        itunes="https://geo.music.apple.com/album/sleep-it-away-feat-dragana-sukur-single/1702683205"
                        soundcloud="https://soundcloud.com/spacetrin/sleep-it-away"
                    />
                </div>
                <div className="home__socials">
                    <h1 className="home__latest-release-heading">Socials</h1>
                    <Link to="https://www.facebook.com/spacetrin" target="_blank" rel="noopener noreferrer">
                        <FaFacebook className="home__social-icon" size="28px" color="#fff" />
                    </Link>
                    <Link to="https://www.instagram.com/spacetrin" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="home__social-icon" size="28px" color="#fff" />
                    </Link>
                    <Link to="https://twitter.com/spacetrin_music" target="_blank" rel="noopener noreferrer">
                        <FaTwitter className="home__social-icon" size="28px" color="#fff" />
                    </Link>
                    <Link to="https://open.spotify.com/artist/4BIqRnsn7jai121p8bCSpq" target="_blank" rel="noopener noreferrer">
                        <FaSpotify className="home__social-icon" size="28px" color="#fff" />
                    </Link>
                    <Link to="https://youtube.com/@spacetrin" target="_blank" rel="noopener noreferrer">
                        <FaYoutube className="home__social-icon" size="28px" color="#fff" />
                    </Link>
                    <Link to="https://soundcloud.com/spacetrin" target="_blank" rel="noopener noreferrer">
                        <FaSoundcloud className="home__social-icon" size="28px" color="#fff" />
                    </Link>
                </div>
            </div>
            <img className="home__right" src={HomeBanner} />
        </div>
    </>
);

export default Home;
