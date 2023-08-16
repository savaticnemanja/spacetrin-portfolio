import { Routes, Route } from "react-router-dom";
import { Home, Music, Contact } from "./pages";
import { NavigationBar } from "./components";
import "./App.scss";

const App = () => {
    return (
        <>
            <div className="App">
                <NavigationBar />
                <div className="App__content">
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route exact path="/music" element={<Music />} />
                        <Route exact path="/contact" element={<Contact />} />
                    </Routes>
                </div>
                {/* <div className="App__socials">asd</div> */}
            </div>
        </>
    );
};

export default App;
