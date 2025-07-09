/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IsNotEmpty } from 'class-validator';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'tb_produtos' })
export class Produto {
  @PrimaryGeneratedColumn()
  id: number;

  @IsNotEmpty()
  @Column({ length: 100, nullable: false })
  nome: string;

  @IsNotEmpty()
  @Column({ type: 'decimal', precision: 5, scale: 2, nullable: false })
  preco: number;

  @IsNotEmpty()
  @Column({ type: 'int', nullable: false })
  qtd_estoque: number;

  @UpdateDateColumn()
  data_fornecimento: Date;
}
