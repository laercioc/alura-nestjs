import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

import { Product } from './products.model';
import { ProductService } from './products.service';

@Controller('/products')
export class ProductsController {
  constructor(private productService: ProductService) {}

  @Get('/')
  async getAll(): Promise<Product[]> {
    return this.productService.getAll();
  }

  @Get('/:id')
  async getOne(@Param() { id }): Promise<Product> {
    return this.productService.getOne(id);
  }

  @Post('/')
  async create(@Body() product: Product): Promise<Product> {
    return this.productService.create(product);
  }

  @Put('/')
  async update(@Body() product: Product): Promise<[number, Product[]]> {
    return this.productService.update(product);
  }

  @Delete('/:id')
  async delete(@Param() { id }) {
    return this.productService.delete(id);
  }
}
