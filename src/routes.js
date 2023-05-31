const { Router } = require('express');
const ContactController = require('./app/controllers/contactController');
const CategoryController = require('./app/controllers/categoryController');

const router = Router();
// Routes for contacts

router.get('/contacts', ContactController.index);
router.get('/contacts/:id', ContactController.show);
router.delete('/contacts/:id', ContactController.delete);
router.post('/contacts', ContactController.store);
router.put('/contacts/:id', ContactController.update);

// Routes for categories

router.get('/categories', CategoryController.index);
router.post('/categories', CategoryController.store);

module.exports = router;
