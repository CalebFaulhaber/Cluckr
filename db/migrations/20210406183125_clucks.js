
exports.up = function(knex) {
    return knex.schema.createTable('clucks', table => {
        table.increments('id');
        table.string('username');
        table.text('content');
        table.string('imageUrl');
        table.timestamps(true,true);
  })
};

exports.down = function(knex) {
    return knex.schema.dropTable('clucks');
};
