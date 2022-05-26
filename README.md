# Ik-ElectronicAgenda-Backend

## Bem-vindo ao projeto

Este repositório é destinado ao desenvolvimento da aplicação solicitada para avaliação da Ik Solution.

Este é um projeto fullstack, onde há a integração de ambos, tanto backend quanto frontend.

No backend as principais tecnologias utilizadas são:
 - Node.Js
 - Express
 - Sequelize

O banco de dados utilizado é o Postgres. E foi feito o deploy do banco no Supabase!

## Como rodar o projeto localmente

Atenção para essa parte!

Primeiramente, você deve fazer o clone do repositório na sua máquina local. Para isso, recomendo utilizar a chave SSH e utilizar o comando `git clone :chave:`.

Assim que terminar a instalação do projeto você pode realizar o seguinte comando:

 - `cd backend && npm install`

Rodar o comando npm install fará com que as dependências sejam instaladas na sua máquina local (uma vez que o arquivo node_modules é ignorado pelo .gitignore).

### Importante:

Para o bom funcionamento do projeto backend, é necessário utilizar um arquivo .env na pasta backend, mas não se preocupe, existe um arquivo .env.exemple no projeto, onde você poderá se guiar, então neste caso é só modificar os valores deste arquivo para 'dar match' com sua conexão do seu DB.

Você poderá entrar na pasta backend e rodar o comando `npx run db:reset`, para que o banco de dados seja criado no seu servidor local e para que o sequelize execute as migrations do projeto, bem como os seeders.

Após seguir esses passos, você poderá rodar o projeto utilizando o comando `npm start` dentro da pasta /backend e irá notar que aparecerá no seu terminal a mensagem `API rodando na porta: XXXX`, onde porta XXXX é a porta que você especificou no arquivo .env.

### Este projeto já está em produção pelo endereço <a href="(https://protected-bastion-57133.herokuapp.com/all)" target="_blank">Backend</a>

Neste endereço mencionado você poderá verificar, em tempo real, atualizações no banco de dados.

## API

As rotas para a api são:

  - GET: `/all`
  - POST: `/add`

No momento são essas rotas.
