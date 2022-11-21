import { ProductMemoryService } from './services/product-memory.service';

const productService = new ProductMemoryService;

productService.create({
  title: 'numero1',
  price: 100,
  description: 'pele come crianca',
  categoryId: 1,
  images: ['asdasdas'],
})

const products = productService.getAll();
const productId = products[0].id;

productService.update(productId, {
  title: 'nombre cambiado'
})

const rta = productService.findOne(productId);
console.log(rta);
