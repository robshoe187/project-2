const router = require('express').Router();
const { Batters } = require('../../models');



//api/batters-route/

//get all batters names and id
router.get('/names', (req, res) => {
  Batters.findAll({
  attributes: [
      'id',
      'name'
    ],
  })
    .then(data => {
      if (!data) {
        res.status(404).json({ message: 'No user found with this id' });
        return;
      }
      res.json(data);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

//get all batters
router.get('/', (req, res) => {
  Batters.findAll({
    attributes: [
      'id',
      'name',
      'team',
      'games_played',
      'hits',
      'average',
      'home_runs',
      'rbi'
    ],
  })
    .then(data => {
      if (!data) {
        res.status(404).json({ message: 'No user found with this id' });
        return;
      }
      res.json(data);
    })

    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

//get batter by id
router.get('/:id', (req, res) => {
  Batters.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      'id',
      'name',
      'team',
      'games_played',
      'hits',
      'average',
      'home_runs',
      'rbi'
    ],
  })
    .then(data => {
      if (!data) {
        res.status(404).json({ message: 'No user found with this id' });
        return;
      }
      const batter = data.get({ plain: true });
      res.render('homepage', { batter, plain: true });
      //console.log(data);
      //res.json(data);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// add new batter to DB if they're not already in there
router.post('/', (req, res) => {
  Batter.findOrCreate({
    where: {
      name: req.body.name
    },
    defaults: {
      name: req.body.name,
      team: req.body.team,
      games_played: 0,
      hits: 0,
      average: .000,
      home_runs: 0,
      rbi: 0
    }
  })
    .then(data => res.json(data);
    )
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;