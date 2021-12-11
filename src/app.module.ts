import { ProductService } from './products.service';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './products.controller';
import { SequelizeModule } from '@nestjs/sequelize';

import { Product } from './products.model';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: process.env.db_host,
      port: Number(process.env.db_port),
      username: process.env.db_username,
      password: process.env.db_password,
      database: process.env.db_database,
      autoLoadModels: true,
      synchronize: true,
    }),
    SequelizeModule.forFeature([Product]),
  ],
  controllers: [AppController, ProductsController],
  providers: [AppService, ProductService],
})
export class AppModule {}
