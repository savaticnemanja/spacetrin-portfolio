import { HomeBanner } from "../../assets";
import "./Home.scss";

const Home = () => {
    return (
        <>
            <div className="home">
                <div className="home__left">
                    <p>
                        Spacetrin, a music producer and an artist, hailing from Serbia commenced his journey in 2016 when he took his first steps into the world of music production. First delving into
                        the realm of Dubstep and Drum & Bass, his creative compass evolved and a natural progression led him to the sounds of Hip Hop beats where he discovered his true resonance.
                        Eager to refine his craft and cultivate a deeper understanding of his passion, he enrolled in the Music Production module at the University of Novi Sad where he immersed
                        himself in a curriculum that honed his technical skills and expanded his artistic horizons. This educational endeavor marked a pivotal chapter in his story. Spacetrin's
                        artistic evolution was a tapestry woven with collaborations. Guided by an innate aptitude for sound engineering, he seamlessly transitioned into roles as a mix and master
                        engineer. With a wealth of experience and an artistic spirit, Spacetrin boldly stepped onto the music scene. Under his own name, he embarked on a musical journey that
                        bore his essence.
                    </p>
                </div>
                <div className="home__right">
                    <img src={HomeBanner} />
                </div>
            </div>
        </>
    );
};

export default Home;
