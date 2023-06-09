const database = require('../../database');

class CategoriesRepository {
  async findAll(orderBy = 'ASC') {
    const direction = orderBy === 'DESC' ? 'DESC' : 'ASC';
    const rows = await database.query(`SELECT * FROM categories ORDER BY name ${direction}`);

    return rows;
  }

  async findById(id) {
    const [row] = await database.query('SELECT * FROM categories WHERE id = $1', [id]);

    return row;
  }

  async create({ name }) {
    const [row] = await database.query(`
      INSERT INTO categories(name)
      VALUES($1)
      RETURNING *
    `, [name]);

    return row;
  }

  async update(id, name) {
    const [category] = await database.query(`
    UPDATE categories
    SET name = $1
    WHERE id = $2
    RETURNING *
    `, [name, id]);

    return category;
  }

  async delete(id) {
    const op = await database.query(`
    DELETE FROM categories
    WHERE id = $1
    `, [id]);

    return op;
  }
}

module.exports = new CategoriesRepository();
