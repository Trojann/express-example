const db = require('../db.js')

module.exports.login = (req, res) => res.render('auth/login')

module.exports.postLogin = (req, res) => {
	let errors = []
	const {email, password} = req.body
	const user = db.get('users').find({email}).value()

	if (!user) {
		res.render('auth/login', {
			errors: [...errors, 'User does not exist.'],
			value: req.body
		})
		return
	}

	if (user.password !== password) {
		res.render('auth/login', {
			errors: [...errors, 'Wrong password.'],
			value: req.body
		})
		return
	}

	res.cookie('userId', user.id, {
		signed: true
	})
	res.redirect('/users')

}