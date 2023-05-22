const router = require('express').Router();
const { Gallery, Painting, User, Reviews} = require('../models');

// GET all galleries for homepage
router.get('/', async (req, res) => {
  try {
    const dbGalleryData = await Gallery.findAll({
      include: [
        {
          model: Painting,
          attributes: ['filename', 'description'],
        },
      ],
    });

    const galleries = dbGalleryData.map((gallery) =>
      gallery.get({ plain: true })
    );
    res.render('homepage', {
      galleries,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


router.get('/reviews', async (req, res) => {
  try {
      const usersReviewData = await Reviews.findAll();

      const users = usersReviewData.map(review => review.get({ plain: true }));

      res.render('reviews', {
          users,
          loggedIn: req.session.users || null
      });
  } catch(error) {
      res.status(500).json({ error });
  };
});

router.get('/reviews/:userId', async (req, res) => {
  try{ 
      const { userId } = req.params;

      const userData = await Reviews.findByPk(userId);

      const user = userData.get({ plain: true });

      res.render('painting-details', {
          user
      });
  } catch (error) {
      res.status(500).json({error});
  }
});
// Login route
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

router.get('/signup', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('signup');
});

router.get('/reviews', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('reviews');
});

module.exports = router;
