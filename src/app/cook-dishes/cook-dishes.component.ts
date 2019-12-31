import { Component, OnInit } from '@angular/core';
import { Ingredient} from '../../shared/ingredient.model';

@Component({
  selector: 'app-cook-dishes',
  templateUrl: './cook-dishes.component.html',
  styleUrls: ['./cook-dishes.component.css']
})
export class CookDishesComponent implements OnInit {
  submit = false;
  dish: string;
  ingredients: Ingredient[] = [
    new Ingredient('Beef', false),
    new Ingredient('Pork', false),
    new Ingredient('Chicken', false),
    new Ingredient('Fish', false),
    new Ingredient('Mushroom', false),
    new Ingredient('Onion', false),
    new Ingredient('Green Pepper', false),
    new Ingredient('Broccoli', false),
    new Ingredient('Oil', false),
    new Ingredient('Salt', false),
    new Ingredient('Sugar', false),
    new Ingredient('Vinegar', false)
  ];
  chosenIngredients: Set<string> = new Set<string>();
  constructor() {
  }
  toggleIngredient(e, i) {
    this.ingredients[i].checked = e.target.checked;
    if (this.ingredients[i].checked) {
      this.chosenIngredients.add(this.ingredients[i].name);
    }
    if (this.chosenIngredients.has(this.ingredients[i].name) && !this.ingredients[i].checked) {
      this.chosenIngredients.delete(this.ingredients[i].name);
    }
  }
  submitIgdt() {
    // tslint:disable-next-line:max-line-length
    if (this.chosenIngredients.size === 4 && this.chosenIngredients.has('Beef') && this.chosenIngredients.has('Broccoli') && this.chosenIngredients.has('Oil') && this.chosenIngredients.has('Salt')) {
      this.dish = 'Beef broccoli';
      this.submit = true;
      return;
    }
    // tslint:disable-next-line:max-line-length
    if (this.chosenIngredients.size === 5 && this.chosenIngredients.has('Fish') && this.chosenIngredients.has('Sugar') && this.chosenIngredients.has('Oil') && this.chosenIngredients.has('Salt') && this.chosenIngredients.has('Vinegar')) {
      this.dish = 'Sweet and sour fish';
      this.submit = true;
      return;
    }
    // tslint:disable-next-line:max-line-length
    if (this.chosenIngredients.size === 5 && this.chosenIngredients.has('Green Pepper') && this.chosenIngredients.has('Pork') && this.chosenIngredients.has('Onion') && this.chosenIngredients.has('Oil') && this.chosenIngredients.has('Salt')) {
      this.dish = 'Hui Guo Rou';
      this.submit = true;
      return;
    }
    this.dish = 'Nothing';
    this.submit = true;
    return;
  }
  reset() {
    window.location.reload();
  }

  ngOnInit() {
  }

}
