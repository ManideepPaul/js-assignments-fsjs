const jokeEl = document.querySelector("#joke");
const jokeBtn = document.querySelector("#jokeBtn");

// Getting new joke on click
jokeBtn.addEventListener("click", getJoke);

// This function making a api call and setting up joke in jokeEl
async function getJoke() {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '1c55190995msh556e0575d88b213p113d44jsn3c53560ef099',
            'X-RapidAPI-Host': 'dad-jokes.p.rapidapi.com'
        }
    };

    // Fetching joke and storing in joke variable
    const joke = await fetch('https://dad-jokes.p.rapidapi.com/random/joke', options)
        .then(response => response.json())
        .then(response => response.body[0])
        .catch(err => console.error(err));

    // Getting setup line fron the api object
    let setup = await joke.setup

    // Getting punchline line fron the api object
    let punchline = await joke.punchline

    // Adding the "setup" and "punchline" to the jokeEl
    jokeEl.textContent = `${setup}${punchline}`
}

// This will add the joke on page loading
getJoke()