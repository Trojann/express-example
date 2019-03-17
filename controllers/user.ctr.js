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
	res.render('users/create')
}

module.exports.detail = (req, res) => {
	const {id} = req.params
	const user = db.get('users').find({id}).value()
	res.render('users/detail', {user})
}

module.exports.postCreate = (req, res) => {
	let errors = []
	if(!req.body.name) errors = [...errors, 'Name is required.']
	if(!req.body.phone) errors = [...errors, 'Phone is required.']
	if(errors.length) {
		res.render('users/create', {
			errors,
			value: req.body
		})
		return
	}
	req.body.id = shortid.generate()
	db.get('users').push(req.body).write()
	res.redirect('/users')
}