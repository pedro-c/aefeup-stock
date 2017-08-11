var keystone = require('keystone');
var Drink = keystone.list('Drink');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'Stock';

	view.on('init', function(next) {
		Drink.model.find()
		.sort('name.first')
		.exec(function(err, drinks) {
			if (err) res.err(err);
			locals.drinks = drinks;
			next();
		});
	});

	// Render the view
	view.render('consult_stock');
};
