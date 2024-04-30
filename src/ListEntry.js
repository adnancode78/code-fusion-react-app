import {useState} from "react";

function ListEntry({age, nickname, color}) {
    // useState
    const [isVaccinated, setIsVaccinated] = useState(false)

    const agePrepared = age === undefined ? null : <span style={{color: "green"}}> ({age})</span>

    return (
        <div
            id={`list-entry-${nickname}`}
            style={
            {
                flex: 1,
                borderWidth: 3,
                borderStyle: 'solid',
                borderColor: color,
            }
        }>
            <h3>{nickname}{agePrepared}</h3>
            <div style={
                {
                    color:
                        isVaccinated ? "green" : "red"
                }}>
                {isVaccinated ? "Geimpft!" : "Ungeimpft!"}
            </div>
            <button
               onClick={() => {
                 //  console.log("CLICK")
                   setIsVaccinated(!isVaccinated)
               }
            }
               // disabled={isVaccinated}
            >{
                isVaccinated ? "Impfung entfernen..." : "Impfen..."
            }
            </button>
        </div>
    )
}

export default ListEntry;
