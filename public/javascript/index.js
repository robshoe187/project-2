const playerSearchButton = document.querySelector('#searchButton');
const playerAddButton = document.querySelector('#addButton');

$('.basicAutoComplete').autoComplete();

playerSearchButton.addEventListener("click," function () => {
    return {
        name: batter.name,
        team: batter.team,
        games_played: batter.games_played,
        hits: batter.hits,
        average: batter.average,
        home_runs: batter.home_runs,
        rbi: batter.rbi
    }
}
);

playerAddButton.addEventListener("click," function () => {
    if(batter = true) {
        alert("He's already in our database -- do a search at top to find him!");
        return;
    }
    else {
        // actually need a database insertion here
        return {
            name: batter.name,
            team: batter.team,
            games_played: 0,
            hits: 0,
            average: .000,
            home_runs: 0,
            rbi: 0
        }
    }
});