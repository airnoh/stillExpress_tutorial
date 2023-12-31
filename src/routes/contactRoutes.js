const { Router } = require('express');
const router = Router();
const { getContacts,
    createContact,
    getContact,
    updateContact,
    deleteContact,
} = require('../controllers/contactController');


router.get('/',getContacts);

router.post('/',createContact)

router.get('/:id', getContact)

router.put('/:id', updateContact);

router.delete('/:id', deleteContact);


module.exports = router;
