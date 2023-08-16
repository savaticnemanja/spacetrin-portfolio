import { Link } from "react-router-dom";
import { FaSpotify, FaYoutube, FaItunesNote, FaSoundcloud } from "react-icons/fa";
import "./SingleSong.scss";

const SingleSong = ({ cover, name, artists, spotify, youtube, itunes, soundcloud }) => {
    return (
        <Link to={spotify} target="_blank" rel="noopener noreferrer" className="single-song">
            <img src={cover} />
            <div className="single-song__info">
                <h1>{name}</h1>
                <h2>{artists}</h2>
                {spotify && (
                    <Link to={spotify} target="_blank" rel="noopener noreferrer">
                        <FaSpotify className="single-song__stream-icon spotify" size="32px" color="#fff" />
                    </Link>
                )}
                {youtube && (
                    <Link to={youtube} target="_blank" rel="noopener noreferrer">
                        <FaYoutube className="single-song__stream-icon youtube" size="32px" color="#fff" />
                    </Link>
                )}
                {itunes && (
                    <Link to={itunes} target="_blank" rel="noopener noreferrer">
                        <FaItunesNote className="single-song__stream-icon itunes" size="32px" color="#fff" />
                    </Link>
                )}
                {soundcloud && (
                    <Link to={soundcloud} target="_blank" rel="noopener noreferrer">
                        <FaSoundcloud className="single-song__stream-icon soundcloud" size="32px" color="#fff" />
                    </Link>
                )}
            </div>
        </Link>
    );
};

export default SingleSong;
