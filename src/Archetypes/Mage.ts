import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  private _energyType: EnergyType;
  private static _energyAmount = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
    Mage._energyAmount += 1;
  }

  static createdArchetypeInstances(): number {
    return this._energyAmount;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}