<h1 align="center" >Petshop shopping cart</h1>

<p align="center" >
<img  src="https://ucarecdn.com/00f99ee5-106f-4a90-ad66-d1dc24a28359/Gifpetshop.gif"/>
</p>

Protótipo da página de vendas de um petshop.
A página foi desenvolvida em React e para o controle dos estados dos componentes foi utilizado Context. A estilização e toda a responsividade foi implementada com SASS.

## Funcionalidades

<ul>
<li>Comportamento responsivo</li>
<li>Pesquisa por nome e categoria dos produtos</li>
<li>Modal com detalhes dos produtos</li>
</ul>

## Demonstração

[Clique aqui para acessar a demonstração](https://petshop-online-store.vercel.app/)

## Tecnologias utilizadas

- [React](https://reactjs.org/)
- [SASS](https://sass-lang.com/)

## Como executar

Clone o projeto

```bash
  git clone git@github.com:enicio/petshop-online-store.git
```

Mude para as pasta raiz

```bash
  cd petshop-online-store
```

Instale as dependencias

```bash
  npm install
```

Inicie o servidor

```bash
  npm start
```

## API

Api com os dados para renderização dos cards.

#### Listar todos os produtos

```http
  GET https://apideprodutos.vercel.app/api/petproducts
```
