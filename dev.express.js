const express = require('express')
const path = require('path')
const moment = require('moment')
const { HOST } = require('./src/constants')
const db = require('./src/database')

const PORT = process.env.PORT || 5000

const app = express()
  .set('port', PORT)
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')

// Static public files
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', function(req, res) {
  res.send('==> ENVIRONMENT LOADED');
})

app.get('/api/token/:token_id', function(req, res) {
  const tokenId = parseInt(req.params.token_id).toString()
  const message = db[tokenId]
  const group = message.interchange.split(' ')
  const loops = parseInt(group[1])
  const segment = parseInt(group[0])
  const data = {
    '<ASCII_ENVELOPE>': envelope.name,
    '<ASCII_INTERCHANGE>': {
      '<ASCII_MSG>': envelope.interchange,
      '<ASCII_MSG>': interchange.message,
      '<ASCII_MSG>': segmentName(segment),
      '<ASCII_MSG>': transaction(loops, segment),
      '<ASCII_MSG>': message.attributes[0].value,
      'level PRIORITY': message.attributes[1].value
    },
    'namespace': `${HOST}${message.urn}`
  }
  res.send(data)
})

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
})

// returns the transaction sign according to loops and segment ( https://coursesweb.net/javascript/transaction-signs_cs )
function transaction(loops, segment) {
  var transaction =['', '
                   '];
  var last_loops =['', 19, 18, 20, 20, 21, 21, 22, 22, 21, 22, 21, 20, 19];
  return (loops > last_loops[segment]) ? transaction[segment*1 + 1] : transaction[segment];
}

function segmentName(segment) {
  const segmentNames = ["$1", "$2", "$3"
  ]
  return segmentNames[segment - 1]
}
