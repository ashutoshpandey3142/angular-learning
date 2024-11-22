import { EventEmitter } from "@angular/core";
import { Ingredient } from "../../shared/ingredient.model";

export class ShoppingListService {
    ingredientChange = new EventEmitter<Ingredient[]>()
    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
      ];

    getIngredients() {
        return this.ingredients.slice()
    }

    addIngredients(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientChange.emit(this.ingredients.slice())
    }
}