const router = require("./user-routes");
const { Batter } = require('../../models/Batter.js')

router.post('/', (req, res) => {
    Batter.create({
        name: req.body.name,
        team: req.body.team,
        games_played: 0,
        hits: 0,
        average: .000,
        home_runs: 0,
        rbi: 0
    })
        .then(dbUserData => {
            res.json(dbUserData);
            // array push
        });
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
})