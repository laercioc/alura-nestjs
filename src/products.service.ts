import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Product } from './products.model';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product)
    private productModel: typeof Product,
  ) {}

  async getAll(): Promise<Product[]> {
    return this.productModel.findAll();
  }

  async getOne(id: number): Promise<Product> {
    return this.productModel.findByPk(id);
  }

  async create(product: Product): Promise<Product> {
    return this.productModel.create(product);
  }

  async update(product: Product): Promise<[number, Product[]]> {
    return this.productModel.update(product, {
      where: {
        id: product.id,
      },
    });
  }

  async delete(id: number) {
    const product: Product = await this.getOne(id);
    await product.destroy();
  }
}
