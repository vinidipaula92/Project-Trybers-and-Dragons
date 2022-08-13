import Race from './Race';

export default class Dwarf extends Race {
  private _maxLifePoints = 80;
  private static _createInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Dwarf._createInstances += 1;
  }

  static createdRacesInstances(): number {
    return this._createInstances;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}