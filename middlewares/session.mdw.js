const shortid = require('shortid')

const db = require('../db')

module.exports = (req, res, next) => {
	if (!req.signedCookies.sessionId) {
		const sessionId = shortid.generate()
		res.cookie('sessionId', sessionId, {
			signed: true
		})
		db.get('sessions').push({
			id: sessionId
		}).write()
	}
	res.locals.countCart = db.get("sessions").find({ id: req.signedCookies.sessionId }).get("cart").size().value()

	next()
}