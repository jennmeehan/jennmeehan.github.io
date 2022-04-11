const njbtn = document.querySelector('#js-new-joke');
njbtn.addEventListener('click', getJoke);

async function getJoke() {
  console.log("joke button was clicked");
  try {
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw Error(response.statusText)
    }
    const json = await response.json();
    console.log(json.joke);
    displayQuote(json.joke);

  }
  catch(err) {
    console.log(err)
    alert('Failed');
  }
}

function displayQuote(joke) {
  const jokeText = document.querySelector('#js-joke-text');
  jokeText.textContent = joke;
}

const endpoint = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single"

//http://quotes.stormconsultancy.co.uk/random.json
