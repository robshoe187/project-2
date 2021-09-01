const playerAddButton = document.querySelector('#addPlayer');

playerAddButton.addEventListener("click," function () => {
    
      
    sequelize.literal()
    // if(batter = true) {
    //     alert("He's already in our database -- do a search at top to find him!");
    //     return;
    // }
    // else {
    //     // actually need a database insertion here
    //     return {
    //         name: batter.name,
    //         team: batter.team,
    //         games_played: 0,
    //         hits: 0,
    //         average: .000,
    //         home_runs: 0,
    //         rbi: 0
        }
    }
});

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
  
      if (response.ok) {
        document.location.reload();
      } else {
        alert(response.statusText);
      }
    }
  }
  
  document.querySelector('.comment-form').addEventListener('submit', commentFormHandler);