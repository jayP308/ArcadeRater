const userGame = document.getElementById('user-game');
const submitBtn = document.getElementById('submit-button');

submitBtn.addEventListener('click', async (event) => {
    event.preventDefault();
    const usergame = userGame.value;

    if(!usergame) {
        return alert('Search for your reviews!');
    }

    try {
        const response = await fetch('/api/users/reviews', {
            method: "POST",
            headers: { 'Content-Type': 'application/json'},
            body:JSON.stringify({ usergame }),
        });
        const data = await response.json()
        console.log(data);
    } catch (error) {
        alert(error);
    }
})