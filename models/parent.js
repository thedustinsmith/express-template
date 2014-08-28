module.exports = function (db) {

	var parent = db.bookshelf.Model.extend({
		tableName: 'Parent',
		idAttribute: 'ParentID',

		Child: function () {
			return this.hasMany(db.Child, 'ParentID');
		}
	});

	db.Parent = parent;
	return parent;
};