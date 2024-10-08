import { MealBuilderProtocol } from '../interfaces/meal-builder-protocol';
import { MealBox } from './meal-box';
import { Beans, Rice } from './meals';

export class VeganDishBuilder implements MealBuilderProtocol {
  private _meal: MealBox = new MealBox();

  // fazendo um reset na box, se eu chamar ele, ele apaga todas as refeições
  // anteriores.
  reset(): this {
    this._meal = new MealBox();
    return this;
  }

  makeMeal(): this {
    const rice = new Rice('Arroz', 35);
    const beans = new Beans('Feijão', 10);
    this._meal.add(rice, beans);
    return this;
  }
  getMeal(): MealBox {
    return this._meal;
  }

  getPrice(): number {
    return this._meal.getPrice();
  }
}
