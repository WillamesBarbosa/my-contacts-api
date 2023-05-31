const { v4 } = require('uuid');

const database = require('../../database');

let contacts = [{
  id: 10,
  name: 'Willames da Silva Barbosa',
  phone: 123456789,
  email: 'willames@email.com',
  category_id: v4(),
}, {
  id: 12,
  name: 'Willames da Silva Barbosa',
  phone: 123456789,
  email: 'willames1999@email.com',
  category_id: v4(),
}];

class ContactsRepository {
  async findAll(orderBy = 'ASC  ') {
    const direction = orderBy.toUpperCase() === 'DESC' ? 'DESC' : 'ASC';
    const rows = await database.query(`SELECT * FROM contacts ORDER BY name ${direction}`);

    return rows;
  }

  async findById(id) {
    const [row] = await database.query('SELECT * FROM contacts WHERE id = $1', [id]);

    return row;
  }

  async findByEmail(email) {
    const [row] = await database.query('SELECT * FROM contacts WHERE email = $1', [email]);

    return row;
  }

  async create({
    name,
    email,
    phone,
    category_id,
  }) {
    const [row] = await database.query('INSERT INTO contacts(name, email, phone, category_id) VALUES($1, $2, $3, $4) RETURNING * ', [name, email, phone, category_id]);
    return row;
  }

  async update(id, {
    name,
    email,
    phone,
    category_id,
  }) {
    const row = await database.query(`
      UPDATE contatcs
      SET name = $1, email = $2, phone = $3, category_id = $4
      WHERE id = $5
      RETURNING *
    `, [name, email, phone, category_id, id]);

    return row;
  }

  delete(id) {
    return new Promise((resolve) => {
      contacts = contacts.filter((contact) => contact.id !== Number(id));
      resolve();
    });
  }
}

module.exports = new ContactsRepository();
