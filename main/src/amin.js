// const amin = () => {
//     fetch("https://v2.jokeapi.dev/joke/Dark?blacklistFlags=racist,sexist")
//     .then(async x =>{const res = await x.json()
//         console.log(`\n\n${res.setup} \n${res.delivery}\n\n`)
//     })
//     .catch(err => {console.error(err)})
// }
// amin()
const getter = ()=>{
    console.log("Clicked")
    fetch("https://v2.jokeapi.dev/joke/Dark?blacklistFlags=racist,sexist")
    .then(async x =>{
        const response = await x.json()
        console.log(response)})
    .catch(e => console.log(e, "is the error"))}
getter()