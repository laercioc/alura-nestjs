import { Injectable } from '@nestjs/common';
import { Product } from './products.model';

@Injectable()
export class ProductService {
  products: Product[] = [
    new Product('LIV01', 'Livro TDD E BDD', 29.9),
    new Product('LIV02', 'Livro Iniciando com Flutter', 60.0),
    new Product('LIV03', 'Inteligência artificial', 10.95),
  ];

  getAll(): Product[] {
    return this.products;
  }

  getOne(id: number): Product {
    return this.products[0];
  }

  create(product: Product): Product {
    this.products.push(product);

    return product;
  }

  update(product: Product): Product {
    return product;
  }

  delete(id: number) {
    this.products.pop();
  }
}
