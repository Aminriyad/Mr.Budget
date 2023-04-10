import { useState, useEffect } from "react"
const App = () => {
    const [joke,setjoke]= useState("hey")
    const [end,setend]=useState("Click on me to make a joke")
    const center ={display:"grid",justifyContent:"center",margin:"0 auto"}
    const getter = () =>{
        fetch("https://v2.jokeapi.dev/joke/Dark?blacklistFlags=racist,sexist&type=twopart")
        .then(async x =>{
            const res = await x.json()
            console.log(res)
            setjoke(res.setup)
            setend(res.delivery)
        })
        .catch(e => console.log(e, "is the error"))
}

//underconstruction 
//3:08am
// const amin = (e:any) =>{
// if(e.keyCode===13||"Enter"){
//     getter()
//     console.log("you clicked enter")
// }
// (e:any) => {e.keyCode === 13 && getter()
// }
return (
    <>
    <div style={center}>
    <div>{joke}</div>
    <div>{end}</div>
    <button onClick={getter}>button</button>
        </div>
    </>
    );
}


export default App;