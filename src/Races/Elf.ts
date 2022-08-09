import Race from './Race';

export default class Elf extends Race {
  private _maxLifePoints = 99;
  private static _createInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Elf._createInstances += 1;
  }

  static createdRacesInstances(): number {
    return Elf._createInstances;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}