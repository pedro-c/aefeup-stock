var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Drink Model
 * ==========
 */
var Drink = new keystone.List('Drink');

Drink.add({
	name: { type: Types.Name, initial: true, required: true, index: true },
	price: { type: Types.Money, initial: true, required: true, index: true },
	stock: { type: Types.Number, initial: true},
});

/**
 * Registration
 */
Drink.defaultColumns = 'name, price, stock';
Drink.register();
