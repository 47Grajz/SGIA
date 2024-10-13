const Router = require('express')
const {getAll,create,getByUser} = require('../controllers/loan.controller')

const router = Router();

router.get('/', getAll);
router.get('/byuser/:userId', getByUser);
router.post('/', create);


module.exports = router;