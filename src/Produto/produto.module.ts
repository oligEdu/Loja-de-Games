import { Module } from '@nestjs/common';
import { Categoria } from '../Categoria/entities/categoria.entity';
import { Produto } from './entities/produto.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProdutoService } from './services/produto.service';
import { ProdutoController } from './controller/produto.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Produto]), Categoria],
  providers: [ProdutoService],
  controllers: [ProdutoController],
  exports: [],
})
export class ProdutoModule {}
