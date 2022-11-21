import { Product } from '../product.model';
import { Category } from '../category.model';

export interface CreateProductDto extends Omit<Product, 'id' | 'category'>{
  categoryId: Category['id'];
}

export interface UpdateProductDto extends Partial<CreateProductDto> {}
