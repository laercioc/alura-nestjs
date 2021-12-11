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
  getAll(): Product[] {
    return this.productService.getAll();
  }

  @Get('/:id')
  getOne(@Param() { id }): Product {
    return this.productService.getOne(id);
  }

  @Post('/')
  create(@Body() product: Product): Product {
    return this.productService.create(product);
  }

  @Put('/')
  update(@Body() product: Product): Product {
    return this.productService.update(product);
  }

  @Delete('/:id')
  delete(@Param() { id }) {
    return this.productService.delete(id);
  }
}
