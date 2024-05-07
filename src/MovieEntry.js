import {useState} from "react";

function MovieEntry(props) {

    const [isHovered, setHovered] = useState(false);

    const children = props.children

    const name = props.name
    const director = props.director
    const imgSrc = props.imgSrc

    return <div style={{
                           border: isHovered === true?"green 3px solid":"red 3px solid",
                           opacity: isHovered === true ? 1 : 0.5

                      }}
                onMouseEnter={() => {
                    setHovered(true)
                }}
                onMouseLeave={() => {
                    setHovered(false)
                }}
    >
        <h3>{name}</h3>
        {children}
        <p>{director}</p>
        <img src={imgSrc} alt=""/>
    </div>
}

export default MovieEntry
