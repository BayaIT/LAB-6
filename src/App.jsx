import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PokemonsList from "./components/PokemonsList.jsx";
import PokemonPage from "./components/PokemonPage.jsx";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<PokemonsList />} />
                <Route path="/pokemon/:id" element={<PokemonPage />} />
            </Routes>
        </Router>
    );
}

export default App;