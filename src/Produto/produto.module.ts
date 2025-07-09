import { Module } from '@nestjs/common';
import { Categoria } from '../Categoria/entities/categoria.entity';
import { Produto } from './entities/produto.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Produto]), Categoria],
  providers: [],
  controllers: [],
  exports: [],
})
export class ProdutoModule {}
