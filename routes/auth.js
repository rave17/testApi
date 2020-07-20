const router = require('express').Router();
const {getAll, createStud, deleteStud, updateStud} = require('../api/controllers/Controller');

router.get('/all', getAll);

router.post('/registerstud', createStud);

router.delete('/all/del/:id', deleteStud);

router.put('/all/upd/:id', updateStud);

module.exports = router;
