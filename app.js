 async function firstSixIncomplete(){
    const data = await fetch("https://jsonplaceholder.typicode.com/todos") 
    const actual = await data.json()
    let value = actual.filter(element => element.completed === false).slice(0,6)
    console.log(value)
}

firstSixIncomplete()