import { Entity, PrimaryGeneratedColumn, OneToOne, OneToMany } from 'typeorm';
import { Player } from './player';
import { MatchMove } from './match_move';

@Entity()
export class Match {
  @PrimaryGeneratedColumn('increment')
  id: number | undefined;

  @OneToOne(() => Player)
  player1: Player | undefined;

  @OneToOne(() => Player)
  player2: Player | undefined;

  @OneToMany(() => MatchMove, o => o.match, {
    cascade: ['insert', 'update'],
  })
  moves: MatchMove[] | undefined;
}
