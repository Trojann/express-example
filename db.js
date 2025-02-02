const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('db.json')

const db = low(adapter)

//set some defaults (required if JSON file is empty)
db.defaults({users: [], sessions: []}).write()

module.exports = db