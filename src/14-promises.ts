import axios from 'axios';

(async () => {
  function delay (time: number) {
    const promise = new Promise<boolean>((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, time);
    });
    return promise;
  }

  function getSomething() {
    const promise = axios.get('https://api.escuelajs.co/api/v1/products');
    return promise;
  }

  async function getSomethingAsync() {
    const rta = await axios.get('https://api.escuelajs.co/api/v1/products');
    return rta.data;
  }

  console.log('///'.repeat(10));
  const rta = await delay(3000);
  console.log(rta);

  const products = await getSomething();
  console.log(products.data);

  const productsAsync = await getSomethingAsync();
  console.log(productsAsync);
})();
