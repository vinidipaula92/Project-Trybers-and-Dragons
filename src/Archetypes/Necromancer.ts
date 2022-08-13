import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  private _energyType: EnergyType;
  private static _energyAmount = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
    Necromancer._energyAmount += 1;
  }

  static createdArchetypeInstances(): number {
    return this._energyAmount;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}