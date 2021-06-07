<h1 align="center" > Eduick Dashboard</h1>

<h2 align="center"> Desktop </h2>

![App Screenshot](https://ucarecdn.com/1eee304d-9ed0-4289-b425-997c4b056a3c/dashboard.png)


<!-- ![App Screenshot](https://ucarecdn.com/ba0a88b1-7cfc-40e1-b0fd-1bd6a009fb5a/-/preview/300x300/) -->

<h2 align="center"> Mobile </h2>
<p align="center" >
<img  src="https://ucarecdn.com/00f99ee5-106f-4a90-ad66-d1dc24a28359/Gifpetshop.gif"/>
</p>

Projeto do dashboard da plataforma de ensino Eduick.
Este projeto foi implementado utilizando a React com SSR ( server side rendering ).

## Demostração

[Clique aqui para acessar a demonstração](https://dashboardeduick.herokuapp.com/)

## Tecnologias utilizadas


- [React](https://reactjs.org/)
- [Node](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/)


## Como executar

Clone o projeto

```bash
  git clone git@github.com:enicio/eduick-dashboard.git
```

Mude para as pasta raiz

```bash
  cd eduick-dashboard
```

Instale as dependencias

```bash
  npm install
```

Crie um build

```bash
  npm run build
```

Inicie o servidor

```bash
  npm run ssr
```

## API

Api com os dados para renderização dos cards.

#### Listar todos os cursos

```http
  GET https://apideprodutos.vercel.app/api/classes
```
