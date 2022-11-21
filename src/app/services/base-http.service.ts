import axios from 'axios';

import { Category } from './../models/category.model';
import { Product } from './../models/product.model';
import { UpdateProductDto } from './../models/dto/product.dto';

export class BaseHttpService<T> {

  constructor(
    private url:string,
  ) {}

  async getAll() {
    const { data } = await axios.get<T[]>(this.url);
    return data;
  }

  async update<ID, DTO>(id: ID, changes: DTO) {
    const { data } = await axios.put(`${this.url}/${id}`, changes);
    return data;
  }

  async findOne<T>(id: T) {
    const { data } = await axios.get(`${this.url}/${id}`);
    return data;
  }
}

(async () => {
  const productService = new BaseHttpService<Product>('https://api.escuelajs.co/api/v1/products');
  const products = await productService.getAll();
  console.log(products);
  productService.update<Product['id'], UpdateProductDto>(1, {title: 'rica cola v2'});
  let singleProduct = await productService.findOne<Product['id']>(1);
  console.log(singleProduct);


  const categoryService = new BaseHttpService<Category>('https://api.escuelajs.co/api/v1/categories');
  const categories = await categoryService.getAll();
  console.log(categories);
})();
