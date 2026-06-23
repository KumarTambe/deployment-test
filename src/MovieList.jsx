import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from 'react-router-dom'

function MovieList() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        async function getData() {
            try {
                const RawData = await fetch('https://dummyjson.com/products?limit=10');
                const Data = await RawData.json();
                setMovies(Data.products);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        }
        getData();
    }, []);

    const filteredList = movies.filter((movie) => movie.title.toLowerCase().includes(searchTerm.toLowerCase()));

    return (
        <>
            {error ?

                (<h1>We ran into an error : {error}</h1>)
                :
                (loading ?
                    (<h1>Loading...</h1>)
                    :
                    (
                        <>
                            <input
                                type="text"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            <ul>
                                {
                                    filteredList.map((movie) =>
                                        <li key={movie.id}>
                                            {movie.title}
                                            <button onClick={(e) => navigate('/movies/' + movie.id)}>View</button>
                                        </li>
                                    )}
                            </ul>
                        </>
                    )
                )
            }
        </>
    )
}

export default MovieList;