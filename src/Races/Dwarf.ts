import Race from './Race';

export default class Dwarf extends Race {
  private _maxLifePoints: number;
  public static dwarfsCounter = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 80;
    Dwarf.dwarfsCounter += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Dwarf.dwarfsCounter;
  }
}