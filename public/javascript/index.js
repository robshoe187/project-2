function playerAddHandler(event) {
  event.preventDefault();

  let addName = document.querySelector('#addName').value.trim();
  let addTeam = document.querySelector('#addTeam').value.trim();

  if (addName) {
    const response = fetch('/api/batters', {
      method: 'POST',
      body: JSON.stringify({
        name; addName,

        team: addTeam
      }),
      headers: {
        'Content-Type': 'application/json'
      }

    })

    if (response.ok) {
      let addName = '';
      let addTeam = '';

    } else {
      alert(response.statusText);
    }
  }

}

document.querySelector('#addPlayer').addEventListener('click', playerAddHandler);
console.log(response);
