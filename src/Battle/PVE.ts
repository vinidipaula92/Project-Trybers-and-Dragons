import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  public character: Fighter;
  private _monsters: SimpleFighter[];

  constructor(character: Fighter, monster: SimpleFighter[]) {
    super(character);
    this.character = character;
    this._monsters = monster;
  }

  fight(): number {
    this._monsters.forEach((monster) => {
      this.character.attack(monster);
      monster.attack(this.character);
    });
    if (this.character.lifePoints === -1) {
      return -1;
    }
    return 1;
  }
}