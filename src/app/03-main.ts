import { ProductHttpService } from './services/product-http.service';

const productService = new ProductHttpService();

console.log('----'.repeat(10));
// productService.getAll().then(
//   (res) => {
//     console.log(res)
//   }
// );

(async () => {
  let products = await productService.getAll()
  console.log(products.length)

  const productId = products[0].id;
  await productService.update(productId, {
    price: 20,
    title: 'que rica cola',
    description: 'miau'
  })
  const singleProductDescription = await productService.findOne(productId);
  console.log(singleProductDescription.description);
})();
