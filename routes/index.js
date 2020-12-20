var express = require('express');
var router = express.Router();
const Controller =  require ('../controllers/controllers')

router.get('/',Controller.homeP )
router.get('/:id',Controller.detailsP )
router.post('/:id/transfer',Controller.transferMoney )

module.exports = router;
