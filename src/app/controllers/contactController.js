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
      return response.status(404).send({ error: 'User not found' });
    }

    return response.json(contact);
  }

  async store(request, response) {
    // Cria um novo registro
    const {
      name, email, phone, category_id,
    } = request.body;

    const emailAlreadyInUse = await ContactsRepository.findByEmail(email);

    if (!name) {
      response.status(422).json({ error: 'Nome é obrigatórios.' });
    }

    if (emailAlreadyInUse) {
      response.status(422).json({ error: 'O email já existe' });
    }

    const contact = await ContactsRepository.create({
      name,
      email,
      phone,
      category_id,
    });

    return response.json(contact);
  }

  async update(request, response) {
    // Atualiza um registro
    const { id } = request.params;
    const {
      name, email, phone, category_id,
    } = request.body;

    const emailAlreadyInUse = await ContactsRepository.findByEmail(email);
    const contact = await ContactsRepository.findById(id);

    if (!contact) {
      // User not found
      return response.status(404).send({ error: 'User not found' });
    }

    const contactForUpdate = await ContactsRepository.update(id, {
      name, email, phone, category_id,
    });

    if (!name) {
      response.status(422).json({ error: 'Nome é obrigatórios.' });
    }

    if (emailAlreadyInUse && contactForUpdate.id !== Number(id)) {
      response.status(422).json({ error: 'O email já existe' });
    }

    return response.json(contactForUpdate);
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
