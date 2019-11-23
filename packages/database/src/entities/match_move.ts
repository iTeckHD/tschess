import { PlayerEnum, ChessBoardEnum, ChessmanEnum } from '@tschess/interfaces';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Match } from './match';

@Entity()
export class MatchMove {
  @PrimaryGeneratedColumn('increment')
  id: number | undefined;

  @ManyToOne(() => Match, o => o.moves)
  match: Match | undefined;

  @Column({
    enum: PlayerEnum,
    nullable: false,
  })
  player: PlayerEnum | undefined;

  @Column({
    enum: ChessmanEnum,
    nullable: false,
  })
  chessman: ChessmanEnum | undefined;

  @Column({
    enum: ChessBoardEnum,
    nullable: false,
  })
  from: ChessBoardEnum | undefined;

  @Column({
    enum: ChessBoardEnum,
    nullable: false,
  })
  to: ChessBoardEnum | undefined;
}
