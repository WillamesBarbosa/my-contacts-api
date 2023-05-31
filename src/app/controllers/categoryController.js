const CategoriesRepository = require('../repositories/CategoriesRepository');

class CategoryController {
  async index(request, response) {
    // Listar todos os registros
    const { orderBy } = request.query;
    const categories = await CategoriesRepository.findAll(orderBy);
    response.json(categories);
  }

  async show(request, response) {
    // Mostrar UM registro
    const { id } = request.params;

    const category = await CategoriesRepository.findById(id);
    if (!category) {
      return response.json({ error: 'Categoria não encontrada' });
    }

    return response.json(category);
  }

  async store(request, response) {
    // Cria um novo registro
    const { name } = request.body;

    if (!name) {
      return response.status(422).json({ error: 'Nome é obrigatórios.' });
    }

    const category = await CategoriesRepository.create({ name });

    return response.json(category);
  }

  async update(request, response) {
    // Atualiza um registro
    const { id } = request.params;
    const { name } = request.body;

    const category = await CategoriesRepository.findById(id);

    if (!category) {
      return response.json({ error: 'Categoria não encontrada' });
    }

    const categoryForUpdate = await CategoriesRepository.update(id, name);

    return response.json(categoryForUpdate);
  }

  async delete(request, response) {
    // Apaga um registro
    const { id } = request.params;

    const category = await CategoriesRepository.findById(id);

    if (!category) {
      return response.json({ error: 'Categoria não encontrada' });
    }

    await CategoriesRepository.delete(id);
    return response.sendStatus(204);
  }
}

module.exports = new CategoryController();
