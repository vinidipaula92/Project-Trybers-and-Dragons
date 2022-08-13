import Race from './Race';

export default class Orc extends Race {
  private _maxLifePoints = 74;
  private static _createInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Orc._createInstances += 1;
  }

  static createdRacesInstances(): number {
    return this._createInstances;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}