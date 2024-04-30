import {useState} from "react";

function Form() {
    const [username, setUsername] = useState()
    const [age  , setAge] = useState(32)
    const [magicNumber  , setMagicNumber] = useState(0)
    const [color      , setColor] = useState("pink")

    return <div>
        <h2>Some Form</h2>
        <div>
            <label for={"username"}>Username</label>
            <input id={"username"} type={"text"} placeholder={"gimme ur name..."} value={username} onChange={
                (e) => setUsername(e.target.value)}
            />
            <input type={"number"} value={age} onChange={e => {setAge(Number(e.target.value))}}/>
            <h3>my name is {username}, and my age is {age}</h3>
            <button onClick={()=>{
                let newNr = magicNumber

                setMagicNumber(++newNr)
            }}>INCREASE MY NUMBER ({magicNumber})</button>
            <h3>here it is also: {magicNumber}</h3>
            <h3>THIS IS A DUMMY INPUT:</h3>
            <input type={"color"} onChange={(e)=>{
                setColor(e.target.value)
            }} />
            <h3 style={{ backgroundColor: color }}>Here is my colored text!</h3>
        </div>
    </div>
}


export default Form
