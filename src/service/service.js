const URL = 'https://apideprodutos.vercel.app/api/petproducts';

export const fetchProduts = async () => {
  const results = await fetch(URL);
  const data = await results.json();
  return data;
};

export const convertCurrency = (price, discount = 0) => {
  return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })
  .format((price/100) - ( price/100 * discount))
}
