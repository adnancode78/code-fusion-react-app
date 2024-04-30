import ListEntry from "./ListEntry";

// props
// state

function List() {
    // const animals = [
    //     {name: "Garfield", age: 15},
    //     {name: "Tom", age: 5},
    //     {name: "Jerry", age: 5},
    //     {name: "Bruno", age: 5},
    //     {name: "Alex", age: 16},
    //     {name: "Saad", age: 5}
    // ]

    // const animalsPrepared = animals.map(animal =>
    //     <ListEntry nickname={animal.name} age={animal.age}/>
    // )

    // adnan grün
    // sasha rot
    // saad blau

    const people = [
        {name: "adnan", age: 4, color: "green"},
        {name: "sasha", age: 5, color: "red"},
        {name: "saad", age: 6, color: "blue"}
    ]

    const peoplePrepared = people.map((people)=>{
        return <ListEntry nickname={people.name} age={people.age} color={people.color} />
    })

   // const people = [
   //     <ListEntry nickname={"Garfield"} />,
   //     <ListEntry nickname={"Tom"} />,
   //     <ListEntry nickname={"Jerry"} />,
   //     <ListEntry nickname={"Bruno"} />,
   // ]

    return ( // JSX
        <div style={{marginBottom: 30}}>
            <h2>My List</h2>
            <div style={{display: "flex", flexDirection: "row", gap: 5}}>
                {peoplePrepared}
            </div>
        </div>
    )
}

export default List;
