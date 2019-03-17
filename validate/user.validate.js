module.exports.postCreate = (req, res, next ) => {
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
	next()
}