const shortid = require('shortid')
const db = require('../db.js')

module.exports.index = (req, res) => res.render('users/index', {
	users: db.get('users').value()
})

module.exports.search = (req, res) => {
	const {q} = req.query
	const matchedUsers = db.get('users').value().filter(item => item.name.toLowerCase().indexOf(q.toLowerCase()) !== -1)
	res.render('users/index', {
		users: matchedUsers,
		q
	})
}

module.exports.create = (req, res) => {
	console.log(req.cookies)
	res.render('users/create')
}

module.exports.detail = (req, res) => {
	const {id} = req.params
	const user = db.get('users').find({id}).value()
	res.render('users/detail', {user})
}

module.exports.postCreate = (req, res) => {
	req.body.id = shortid.generate()
	req.body.avatar = req.file.path.split('\\').slice(1).join('/')
	db.get('users').push(req.body).write()
	res.redirect('/users')
}