const playerAddButton = document.querySelector('#addPlayer');

async function playerAddHandler(event) {
    event.preventDefault();
  
    const addName = document.querySelector('#addName').value.trim();
    const addTeam = document.querySelector('#addTeam').value.trim();
  
    const response = await fetch('/api/batters', {
      method: 'POST',
      body: JSON.stringify({
        name: addName,
        team: addTeam
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (response.ok) {
      document.location.reload();
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('#addPlayer').addEventListener('click', playerAddHandler);