const router = require('express').Router();
const { Batters } = require('../../models');

//api/batters-route/

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
        //const posts = dbPostData.map(post => post.get({ plain: true }));
        res.render('dashboard', { posts, loggedIn: true });
        console.log(data);
        res.json(data);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

  module.exports = router;