import { Routes, Route, useLocation } from "react-router-dom";
import { Home, Music } from "./pages";
import { NavigationBar } from "./components";
import "./App.scss";

const App = () => {
    let location = useLocation();
    return (
        <>
            <div className="App">
                <NavigationBar />
                <div className="App__content">
                    <Routes location={location}>
                        <Route exact path="/" element={<Home />} />
                        <Route exact path="/music" element={<Music />} />
                    </Routes>
                </div>
            </div>
        </>
    );
};

export default App;
