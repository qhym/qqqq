import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Pcontent from "./components/Pcontent";
import Home from "./components/Home";
function App() {
    return (
        <div className="App">
            <header className="App-header">
                <BrowserRouter>
                    <Routes>
                        <Route exact path="/" element={<Home/>} />
                        <Route exact path="/pcontent/:id" element={<Pcontent/>} />
                    </Routes>
                </BrowserRouter>
            </header>
        </div>
    );
}

export default App;
