import { Team } from './team';

export interface Game {
    visitor: Team;
    home: Team;
    score: string;
    status: string;
    started: Date;
    finished: Date;
}