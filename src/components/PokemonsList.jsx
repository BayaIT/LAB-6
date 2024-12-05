import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axiosClient from "../api/axiosClient.js";

function PokemonsList() {
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        axiosClient
            .get('/pokemon?limit=180')
            .then((response) => setPokemons(response.data.results))
            .catch((err) => console.error("Failed to fetch Pokémon list:", err));
    }, []);

    return (
        <div className="container my-4">
            <h1 className="text-center text-primary mb-4">Pokédex</h1>
            <div className="row justify-content-center">
                {pokemons.map((pokemon, index) => (
                    <div className="col-lg-2 col-md-3 col-sm-4 col-6 mb-4 d-flex justify-content-center" key={index}>
                        <div className="card shadow-sm text-center" style={{ width: "10rem" }}>
                            <img
                                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`}
                                alt={pokemon.name}
                                className="card-img-top p-3"
                                style={{ height: "70px", width: "70px", margin: "0 auto" }}
                            />
                            <div className="card-body">
                                <Link
                                    to={`/pokemon/${index + 1}`}
                                    className="btn btn-outline-primary btn-sm text-capitalize"
                                    style={{ fontSize: "0.8rem", padding: "0.3rem 0.5rem" }}
                                >
                                    {pokemon.name}
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PokemonsList;