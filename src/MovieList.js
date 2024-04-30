import MovieEntry from "./MovieEntry";
import {useEffect, useState} from "react";

function MovieList() {

    const [movies, setMovies] = useState();

    useEffect(() => {
        console.log("useEffect is running")

        const getMovies = async () => {
            const response = await fetch("http://localhost:6654/movies")
            const m = await response.json()
            console.log("MOVIES", m)
            setMovies(m)
        }

        getMovies()
    }, []);

    if(movies === undefined) {
        return <div>Please wait.....</div>
    }


    return <div>
        <h2>My Movies</h2>
        <div>
            {movies.map(movie => (
                <MovieEntry name={movie} director={"steven spielberg"}/>
            ))}
        </div>
    </div>
}

export default MovieList;
