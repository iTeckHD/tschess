import { PrimaryGeneratedColumn, Column } from 'typeorm';

export class Player {
  @PrimaryGeneratedColumn('increment')
  id: number | undefined;

  @Column('text', { nullable: false })
  nickname: string | undefined;

  @Column('text', { nullable: false })
  email: string | undefined;

  @Column('text', { nullable: false })
  password: string | undefined;
}
