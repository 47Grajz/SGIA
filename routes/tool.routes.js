const Router = require('express')
const {getAll,create, getLoanTools} = require ('../controllers/tool.controller')
const router = Router();

router.get('/', getAll);
router.post('/', create);
router.get('/loans', getLoanTools);

module.exports = router;