const apiKey = "e99bccc3b7764f57a2f95f4de8626e55"; 
const apiUrl = "https://api.rawg.io/api/games";

// remove existing list of top rated and random games
function removeList(target) {
	 const listContainer = document.getElementById(target)
  	listContainer.innerHTML = "";
}

// to show the list of top rated games
async function topRateGames() {
    const url = `${apiUrl}?ordering=-rating&key=${apiKey}`;
    let response = await fetch(url, {
      method: 'GET',
      mode: 'cors',
      headers: {
        accept: 'application/json'},}).then(response => response.json()).then(json => {
          const data = json["results"] // Array List 
            
          const listContainer = document.getElementById("games-list") // TODO: Add to HTML

          data.forEach((item) => {
            const listItem = document.createElement("li")
            listItem.className = 'top-list';
            listItem.textContent = item.name + " (" + item.rating + ") " // set the name of listItem
            listItem.addEventListener("click", () => {
              // Change the current game textfield
                    document.getElementById('write-review').style.display = 'block';
                    document.getElementById('gameName').innerHTML = item.name
                    document.getElementById('platform').innerHTML = item.parent_platforms[0].platform.name
                    document.getElementById('release-date').innerHTML = item.released
                    document.getElementById('rating').innerHTML = "Rating: " + item.rating
                    document.getElementById('image-games').src = item.background_image
                    let genres = '' // Action, Else, ..
                    for (let i=0; i < item.genres.length; i++) {
                      genres += item.genres[i].name + ", "
                    }
                    genres = genres.substring(0, genres.length-2)
                    document.getElementById('genre').innerHTML = genres;
                            removeList("result-list")
                      
                })
        
            listContainer.appendChild(listItem)                                             
       })})
}

// to show the list of random games (changes everytime we click)
async function randomGames() {
  const url = `${apiUrl}?key=${apiKey}`;
  let response = await fetch(url, {
      method: 'GET',
      mode: 'cors',
      headers: {
        accept: 'application/json'},}).then(response => response.json()).then(json => {
          const shuffledArray = json["results"].sort((a, b) => 0.5 - Math.random());
          const listContainer = document.getElementById("games-list") // TODO: Add to HTML

          shuffledArray.forEach((item) => {
            const listItem = document.createElement("li")
            listItem.className = 'top-list';
            listItem.textContent = item.name + " (" + item.rating + ") " // set the name of listItem
            listItem.addEventListener("click", () => {
            // Change the current game textfield
                  document.getElementById('write-review').style.display = 'block';
                  document.getElementById('gameName').innerHTML = item.name
                  document.getElementById('platform').innerHTML = item.parent_platforms[0].platform.name
                  document.getElementById('release-date').innerHTML = item.released
                  document.getElementById('rating').innerHTML = "Rating: " + item.rating
                  document.getElementById('image-games').src = item.background_image
                  let genres = '' // Action, Else, ..
                  for (let i=0; i < item.genres.length; i++) {
                    genres += item.genres[i].name + ", "
                  }
                  genres = genres.substring(0, genres.length-2)
                  document.getElementById('genre').innerHTML = genres;
                          removeList("result-list")
                    
              })
        
            listContainer.appendChild(listItem)                                             
       })})
}

async function topMetaGames() {
  const url = `${apiUrl}?ordering=-metacritic&key=${apiKey}`;
  let response = await fetch(url, {
    method: 'GET',
    mode: 'cors',
    headers: {
      accept: 'application/json'},}).then(response => response.json()).then(json => {
        const data = json["results"] // Array List 
          
        const listContainer = document.getElementById("games-list") // TODO: Add to HTML

        data.forEach((item) => {
          const listItem = document.createElement("li");
          listItem.className = 'top-list';
          listItem.textContent = item.name + " (" + item.metacritic + ") " // set the name of listItem
          listItem.addEventListener("click", () => {
            // Change the current game textfield
                  document.getElementById('write-review').style.display = 'block';
                  document.getElementById('gameName').innerHTML = item.name
                  document.getElementById('platform').innerHTML = item.parent_platforms[0].platform.name
                  document.getElementById('release-date').innerHTML = item.released
                  document.getElementById('rating').innerHTML = "Rating: " + item.rating
                  document.getElementById('image-games').src = item.background_image
                  let genres = '' // Action, Else, ..
                  for (let i=0; i < item.genres.length; i++) {
                    genres += item.genres[i].name + ", "
                  }
                  genres = genres.substring(0, genres.length-2)
                  document.getElementById('genre').innerHTML = genres;
                          removeList("result-list")
                    
              })
      
          listContainer.appendChild(listItem)                                             
     })})
}

// Let, Const, Var
var historyArray = []
// searchbar
async function search() {
  	let gameTitle = document.getElementById('gameInput').value.toLowerCase();

// fetch the API
	  const url = `${apiUrl}?search=${gameTitle}&key=${apiKey}`;
    let response = await fetch(url, {
        method: 'GET',
        mode: 'cors',
        headers: {
          accept: 'application/json'},}).then(response =>         response.json()).then(json => {const result = json["results"] 
        historyArray.push(gameTitle)                                                                                      

// Array List 
generateList(result)}
);

// show the list of searched games
function generateList(data) {
    document.getElementById("games-list").innerHTML = '';
    const listContainer = document.getElementById("games-list")
    console.log(data)
    data.forEach((item) => {
      const listItem = document.createElement("li")
      listItem.className = 'top-list';
      listItem.textContent = item.name // set the name of listItem
      listItem.addEventListener("click", () => {
// Change the current game textfield
      document.getElementById('write-review').style.display = 'block';
      document.getElementById('gameName').innerHTML = item.name
      document.getElementById('platform').innerHTML = item.parent_platforms[0].platform.name
      document.getElementById('release-date').innerHTML = item.released
      document.getElementById('rating').innerHTML = "Rating: " + item.rating
      document.getElementById('image-games').src = item.background_image
      let genres = '' // Action, Else, ..
      for (let i=0; i < item.genres.length; i++) {
        genres += item.genres[i].name + ", "
      }
      genres = genres.substring(0, genres.length-2)
      document.getElementById('genre').innerHTML = genres;
              removeList("result-list")
        
  })
        listContainer.appendChild(listItem)                                             
 })}

}



// const Rawger = require ('rawger');
let loginButton = document.getElementById("login-button");
let loginButton1 = document.getElementById("dropdownMenu2");
let signupButton = document.getElementById("signup-button");
let welcomeTag = document.getElementById("welcome-tag");
let homeButton = document.getElementById("home-button");
let profileButton = document.getElementById("profile-button");
let helpButton = document.getElementById("help-button");
let logoutButton = document.getElementById("logout-button");
let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let searchButton = document.getElementById("searchBtn");
let topRateButton = document.getElementById("topRatedBtn");
let randomGameButton = document.getElementById("randomGameBtn");
let metaScoreButton = document.getElementById("topMetaBtn");
let preSearchButton = document.getElementById('prevSearchBtn');

// event listener for search button
searchButton.addEventListener("click", () => {
	// clear the list
  	removeList("result-list")
  	search()
  	
});

// even listerner for top rated games
topRateButton.addEventListener("click", () => {
	// clear the list
  	removeList("games-list")
  	topRateGames()
});

// event lister for random games
randomGameButton.addEventListener("click", () => {
	// clear the list
    removeList("games-list")
  	randomGames()
});

// event listner for metacritic score
metaScoreButton.addEventListener("click", () => {
	// clear the list
  	removeList("games-list")
  	topMetaGames()
  	
});

preSearchButton.addEventListener("click", () => {
	// clear the list
  	removeList("games-list")

    const listContainer = document.getElementById("games-list") // TODO: Add to HTML

          historyArray.forEach((item, index) => {
            if (index < historyArray.length-1) {
              const listItem = document.createElement("li")
              listItem.textContent = item // set the name of listItem
              listContainer.appendChild(listItem)   
            }
            
  	})
});

const reviewFormHandler = async (event) => {
  event.preventDefault();

  const game_name = document.getElementById('game_name').value.trim();
  const review = document.getElementById('reviews').value.trim();

  if (game_name && review) {
    const response = await fetch('/api/users/reviews', {
      method: 'POST',
      body: JSON.stringify({ game_name, review }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      alert("Review Submitted");
      document.location.replace('/')
    } else {
      alert("Cannot Be Empty");
      return;
    }
  }
}

document.querySelector('.review-form').addEventListener('submit', reviewFormHandler);

