const { v4 } = require('uuid');

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
  email: 'willames@email.com',
  category_id: v4(),
}];

class ContactsRepository {
  findAll() {
    return new Promise((resolve) => {
      resolve(contacts);
    });
  }

  findById(id) {
    return new Promise((resolve) => {
      resolve(contacts.find((contact) => contact.id === Number(id)));
    });
  }

  delete(id) {
    return new Promise((resolve) => {
      contacts = contacts.filter((contact) => contact.id !== Number(id));
      resolve();
    });
  }
}

module.exports = new ContactsRepository();
