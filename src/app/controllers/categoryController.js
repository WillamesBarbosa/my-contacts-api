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
    response.send('Método GET unico funcionando');
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
    response.send('Método PUT funcionando');
  }

  async delete(request, response) {
    // Apaga um registro
    response.send('Método DELETE funcionando');
  }
}

module.exports = new CategoryController();
