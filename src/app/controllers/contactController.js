const ContactsRepository = require('../repositories/ContactsRepository');

class ContactController {
  async index(request, response) {
    // Listar todos os registros

    const contacts = await ContactsRepository.findAll();

    response.json(contacts);
  }

  async show(request, response) {
    // Mostrar UM registro
    const { id } = request.params;
    const contact = await ContactsRepository.findById(id);

    if (!contact) {
      // User not found
      return response.status(404).json({ error: 'User not found' });
    }

    return response.json(contact);
  }

  store() {
    // Cria um novo registro
  }

  update() {
    // Atualiza um registro
  }

  async delete(request, response) {
    // Apaga um registro

    const { id } = request.params;
    const contact = await ContactsRepository.findById(id);

    if (!contact) {
      // User not found
      return response.status(404).json({ error: 'User not found' });
    }

    await ContactsRepository.delete(id);
    return response.sendStatus(204);
  }
}

module.exports = new ContactController();
