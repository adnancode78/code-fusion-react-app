
function MovieEntry(props) {
    const name = props.name
    const director = props.director

    return <div style={{border: "green 3px solid"}}>
        <h3>{name}</h3>
    </div>
}

export default MovieEntry
