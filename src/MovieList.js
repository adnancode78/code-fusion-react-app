import MovieEntry from "./MovieEntry";
import { useEffect, useState } from "react";
import Container from "./Container";


// to mount a component
function MovieList() {

    const [movies, setMovies] = useState();
    const [err, setErr] = useState();

    useEffect(() => {
        console.log("useEffect is running")

        const getMovies = async () => {
            try {
                const response = await fetch("http://localhost:6654/movies")
                const m = await response.json()
                console.log("MOVIES", m)
                setMovies(m)
            } catch(e) {
                setErr(true)
            }
        }

        getMovies()

        return ()=>{
            console.log("THIS WILL RUN ON UNMOUNT")
        }
    }, []);


    if(err) { // not undefined, not false, not null
        return <div>Some error occurred....</div>
    }

    if(movies === undefined) {
        return <div>Please wait.....</div>
    }


    return <div>
        <h2>My Movies</h2>
        <div style={{ display: "flex", flexDirection: "row" }}>
            {movies.map((movie,index) => (
                <MovieEntry
                    key={`my-movie-${movie._id}` }
                    name={movie.title}
                    director={movie.directors}
                    imgSrc={movie.poster}
                >
                    <Container />
                    <Container />
                </MovieEntry>
            ))}
        </div>
    </div>
}

export default MovieList;
