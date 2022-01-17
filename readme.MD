<h1 align="center">
  TESTE PIPEDRIVE API
</h1>

<p align="center">
  O projeto é um teste para a API do Pipedrive em conjunto com Bling. Insere os dados de uma venda no Pipedrive no Bling e guarda no MongoDB, é possível visualizar os ganhos totais dos dias anteriores.
</p>

<p align="center">
  A <a href="https://link-api-teste.herokuapp.com/">API</a> está disponível para testes.
</p>

<p>Possui as seguintes rotas:</p>
<ul>
  <li>
    /opportunities
    <p>Permite visualizar os negócios da conta do pipedrive que estão listadas no bling e guardadas no banco de dados.</p>
  </li>
</ul>

<h3>
  Requisitos da aplicação
</h3>

<ol>
  <li>
    <a href="https://nodejs.org/en/download/">NodeJS(LTS)</a>
  </li>

  <li>
    <a href="https://git-scm.com">
      Git
    </a>
  </li>

  <li>
    <a href="https://notepad.pw/share/6y7we2o1v">
      Conteúdo do arquivo .env com credenciais
    </a>
  </li>

  <li>
    <a href="https://www.npmjs.com/package/pipedrive">
      pipedrive
    </a>
  </li>
</ol>

### 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [Node.js](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)
- [MongoDB](https://www.mongodb.com/)
- [Pipedrive](https://www.pipedrive.com/)
- [Bling](https://bling.com.br/)
- [Express](https://expressjs.com/)
- [Mongoose](https://mongoosejs.com/)

```bash
# Clone este repositório
$ git clone <https://github.com/JpRomao/teste-linkapi-joao.git>

# Acesse a pasta do projeto no terminal/cmd
$ cd teste-linkapi-joao

# Instale as dependências
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ npm run dev

# O servidor inciará na porta:3333 - acesse <http://localhost:3333>
```

Para testar a aplicação sem instalar nada, utilize o seguinte link: https://link-api-teste.herokuapp.com/
