# My Contacts API 🚀

## Descrição 📚

Esta é uma API que se pode fazer CRUD tanto dos contatos, quanto das categorias dos contatos.
Construi ela utilizando o Banco de Dados PostGres.

## Como utilizar ⚙️

1. Primeiro faça um clone do repositório
```
git clone https://github.com/WillamesBarbosa/my-contacts-api.git
```
> **Note**
> É necessário ter o NodeJs instalado

2. Baixe o Docker

 > **Download**
 > [Baixar o Docker](https://docker.com/)

3. Instale uma imagem do Postsgres

 > **Documentação**
 >[Documentação do PostsGres](https://hub.docker.com/_/postgres)

4. Crie um arquivo index.js dentro da pasta database

 <img src="https://i.ibb.co/VYJkcNq/routes-js-api-my-contacts-Visual-Studio-Code-31-05-2023-21-10-12.png" alt="routes-js-api-my-contacts-Visual-Studio-Code-31-05-2023-21-10-12" border="0">

5. Cole este bloco de código dentro dele e preencha as informações do banco de dados

```
const { Client } = require('pg');

const client = new Client({
  host: 'host',
  port: 'port',
  user: 'user',
  password: 'password',
  database: 'database name',
});
client.connect();

exports.query = async (query, values) => {
  const { rows } = await client.query(query, values);

  return rows;
};

```

>**Note**
>Existe um arquivo Example.js. Então você pode apenas renomar para index.js

6. Agora dentro do terminar do seu Editor use o comando
```
npm start
```

* Pronto! A API está rodando.



## Requisições 🔃

### Rotas

#### Contacts

   | Método | Rota | Retorno |
   |---|---|---|
   | GET | /contacts | Lista todos os contatos. |
   | GET | /contacts/:id | Lista um contato específico. |
   | POST | /contacts | Cadastra um novo contato. |
   | PUT | /contacts/:id | Atualiza um contato. |
   | DELETE | /contacts/:id | Deleta um contato. |
   
#### Categories

   | Método | Rota | Retorno |
   |---|---|---|
   | GET | /categories | Lista todos as categorias. |
   | GET | /categories/:id | Lista uma categoria específica. |
   | POST | /categories | Cadastra uma nova categoria. |
   | PUT | /categories/:id | Atualiza uma categoria. |
   | DELETE | /categories/:id | Deleta uma categoria. |


### Query Params
 | Tipo | Param | Retorno|
   |---|---|---|
   | Order | ASC | Retorna a lista com os Ids ordenados de forma crescente |
   | Order | DESC | Retorna a lista com os Ids ordenados de forma descrescente |
   
## Informações POST/PUT

### Contacts

Para enviar uma requisição e cadastrar um novo contato você precisa fornecer as seguintes informações:

#### POST

* name: Nome do contato (Não pode ser nulo)
* email: (Tem que ser único para cada usuário)
* phone: Número de telefone
* category_id: É uma chave estrangeira que conecta com uma categoria de contato e você pode fornecer um hash do id de uma categoria, caso já tenha
uma criada. Se não tiver nenhuma, pode deixar vazio.

O ID do contato é gerado automaticamente no banco de dados e também é um id do tipo hash.

#### PUT

* É necessário reenviar tanto as informações atualizadas, quanto as não atualizadas. Aqui você pode adicionar ou alterar também a hash
do category_id caso tenha ou retirar de algum, se deixar vazio.

### Categories

#### Post

* name: Nome da categoria (Não pode ser sulo)

O ID do contato é gerado automaticamente no banco de dados e também é um id do tipo hash. Este é o id que você pode colocar no category_id do contato.


## Desenvolvedor

Willames da Silva Barbosa

Obrigado por ter chegado até aqui!
