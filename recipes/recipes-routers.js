const express = require('express');

const recipes = require('./recipes-model.js');

const router = express.Router();

router.get('/', (req, res) => {
    recipes.getRecipes()
    .then(recipes => {
      res.json(recipes);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get recipes' });
    });
  });
  
  router.get('/:id', (req, res) => {
    const { id } = req.params;
  
    recipes.getShoppingList(id)
    .then(list => {
      if (list) {
        res.json(list);
      } else {
        res.status(404).json({ message: 'Could not find list with given id.' })
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get lists' });
    });
  });

  router.get('/:id/instructions', (req, res) => {
    const { id } = req.params;
  
    recipes.getInstructions(id)
    .then(instructions => {
      if (instructions) {
        res.json(instructions);
      } else {
        res.status(404).json({ message: 'Could not find list with given id.' })
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get lists' });
    });
  });
  
  
module.exports = router;