import axios from 'axios';

import { Product } from './models/product.model';

(async () => {

  async function getSomething():Promise<Product[]> {
    const rta = await axios.get<Product[]>('https://api.escuelajs.co/api/v1/products');
    return rta.data;
  }

  const products = await getSomething();
  console.log(products.map((item) => `${item.id} - ${item.title}`));
})();
