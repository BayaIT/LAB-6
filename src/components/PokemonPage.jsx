import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function PokemonPage() {
    const { id } = useParams();
    const [pokemon, setPokemon] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to fetch Pokemon details.");
                }
                return response.json();
            })
            .then((data) => setPokemon(data))
            .catch((err) => setError(err.message));
    }, [id]);

    if (error) {
        return <p className="error">Error: {error}</p>;
    }

    if (!pokemon) {
        return <p className="loading">Loading...</p>;
    }

    return (
        <div className="container my-4">
            <div className="card shadow-lg">
                <div className="card-body text-center">
                    <h1 className="card-title text-capitalize">{pokemon.name}</h1>
                    <img
                        src={pokemon.sprites.front_default}
                        alt={pokemon.name}
                        className="img-fluid mb-4"
                    />
                    <p>
                        <strong>Height:</strong> {pokemon.height}
                    </p>
                    <p>
                        <strong>Weight:</strong> {pokemon.weight}
                    </p>
                    <h3>Abilities:</h3>
                    <ul className="list-group">
                        {pokemon.abilities.map((ability) => (
                            <li
                                className="list-group-item text-capitalize"
                                key={ability.ability.name}
                            >
                                {ability.ability.name}
                            </li>
                        ))}
                    </ul>
                    <Link to="/" className="btn btn-primary mt-3">
                        ← Back to Pokédex
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default PokemonPage;