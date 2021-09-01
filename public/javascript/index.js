function playerAddHandler(event) {
    event.preventDefault();
  
    const addName = document.querySelector('#addName').value.trim();
    const addTeam = document.querySelector('#addTeam').value.trim();
  
    if (addName) {
      const response = fetch('/api/batters', {
        method: 'POST',
        body: JSON.stringify({
          addName,
          addTeam
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log(response);
  
      if (response.ok) {
        document.location.reload();
      } else {
        alert(response.statusText);
      }
    }
  }
  
  document.querySelector('#addPlayer').addEventListener('click', playerAddHandler);