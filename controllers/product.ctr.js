const db = require('../db.js')

module.exports.index = (req, res) => {
	const page = parseInt(req.query.page) || 1 //page n
	let perPage = 6 //x
	let start = (page - 1) * perPage
	let end = page * perPage
	let products = db.get('products').value()
	let totalPage = Math.round(products.length/perPage)
	let prevPage = page - 1
	let nextPage = page + 1
	if (page <= 1) prevPage = -1
	if (page >= totalPage) {
		nextPage = -1
		prevPage = -1
	}

	res.render('products/index', {
		products: products.slice(start, end),
		page,
		nextPage,
		prevPage,
		totalPage
	})
}