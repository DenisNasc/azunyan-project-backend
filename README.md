# DENIS' CLI

# Steps Before Start

1. Crie os scripts start, dev e build no arquivo package.json
   "scripts": {
   "start": "node ./build",
   "build": "tsc",
   "dev": "npm run build & nodemon ./build"
   }

2. Altere o nome do arquivo .eslint-backend.json para .eslint.json

3. Altere o nome do arquivo .webpack-backend.config para .webpack.config

4. Altere as variáveis de ambiente no arquivo .env

# Infos

1. Eslint usará o padrão de código **standard**.
2. Framework para criar o servidor web será o **Express**.
3. O banco de dados será o **PostgreSQLS**.
4. A linguagem de programação será **Typescript**.
5. O bundler será o **Webpack**.
6. A autenticação será feita com o **Passport** por meio do **JsonWebToken**.
7. Usaremos o **Bcrypt** para criptografar dados sensíveis.
8. Para realizar TDD usaremos o **Jest**.

## Initial Settings

**TYPESCRIPT**: configure o arquivo _tsconfig.json_
**ESLINT**: configure o arquivo _.eslintrc_ conforme a necessidade.
**PRETTIER**: configure os arquivos _.prettierrc_ e _.prettierignore_ conforme a necessidade.
**WEBPACK**: configure o arquivo _webpack.config.js_ conforme a necessidade.
**JEST**: configure o arquivo _jest.config.js_ conforme a necessidade.
**GIT**: configure o arquivo _.gitignore_ conforme a necessidade.

## Default Documentation Dependencies

[Express - Criar o servidor web.](https://expressjs.com/en/starter/hello-world.html)
[Cors - Configurar o CORS para o servidor Express.](https://www.npmjs.com/package/cors)
[Bcrypt - Criptografar as informações que serão guardadas no banco de dados.](https://www.npmjs.com/package/bcrypt)
[JsonWebToken - Gerar o JWT para autenticação.](https://www.npmjs.com/package/jsonwebtoken)
[Passport - Autenticar as requisições ao servidor.](https://www.npmjs.com/package/passport)
[Passport-jwt - Usar a estratégia de autenticação com o JWT.](http://www.passportjs.org/packages/passport-jwt)
[Webpack - Criar o bundle para produção.](https://webpack.js.org/guides/getting-started)
[Eslint - Garantir a qualidade do código.](https://eslint.org/docs/rules/)
[Prettier - Garantir a qualidade do código.](https://prettier.io/docs/en/configuration.html)
[TypeScript - Usar o TypeScript como linguagem de programação.](https://www.typescriptlang.org/docs/home.html)
[Jest - Utilizar o Jest para TDD.](https://jestjs.io/docs/en/getting-started)
[Nodemon - Servidor para desenvolvimento.](https://www.npmjs.com/package/nodemon)
[Dotenv - Gerenciar as variáveis de ambiente.](https://www.npmjs.com/package/dotenv)

This project was created by using **Denis's CLI**.
For contact me: **devdenisbr@gmail.com**.
