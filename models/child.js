module.exports = function (db) {

	var child = db.bookshelf.Model.extend({

		tableName: 'Child',
		idAttribute: 'ChildID',

		Parent: function() {
			return this.belongsTo(db.Parent, 'ParentID');
		}
	});

	db.Child = child;
	return child;
};