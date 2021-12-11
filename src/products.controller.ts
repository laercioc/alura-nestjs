import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

@Controller('/products')
export class ProductsController {
  @Get('/')
  getAll(): string {
    return 'List all products';
  }

  @Get('/:id')
  getOne(@Param() { id }): string {
    return `Produto ${id}`;
  }

  @Post('/')
  create(@Body() product): string {
    console.log({ product });
    return 'Produto criado';
  }

  @Put('/')
  update(@Body() product): string {
    console.log({ product });
    return 'Produto editado';
  }

  @Delete('/:id')
  delete(@Param() { id }): string {
    return `Produto ${id} deletado`;
  }
}
