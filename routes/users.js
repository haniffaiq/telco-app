var express = require('express');
var router = express.Router();
const app = express()
const {processingNewUsers, processingUpdateData} = require('./rawData')

app.use(
  express.urlencoded({
    extended: true
  })
)

app.use(express.json())
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('See all users');
  req.json({
    'status': "Succes"
  })
});

router.post('/create', processingNewUsers);

router.put('/:nim/edit', processingUpdateData);





module.exports = router;
