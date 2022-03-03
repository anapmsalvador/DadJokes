const getDadJoke = async() => {
    try{
        const config = {headers: {Accept: "application/json"}}
        const res = await axios.get("https://icanhazdadjoke.com/", config)
        return res.data.joke 
    }
    catch{
        li.textContent = "No jokes available! :( "
        return "No Jokes available"
    }
    
}

const li = document.querySelector("ul")
const jokeBtn = document.querySelector("button")



jokeBtn.addEventListener("click", async() => {
    const joke = await getDadJoke()
    li.textContent = joke
})