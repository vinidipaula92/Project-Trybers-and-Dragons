import Race from './Race';

export default class Halfling extends Race {
  private _maxLifePoints = 60;
  private static _createInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Halfling._createInstances += 1;
  }

  static createdRacesInstances(): number {
    return Halfling._createInstances;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  } 
}