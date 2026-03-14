import { Category } from "./models/Category"
import { Product } from "./models/Product"
import { Cart } from "./models/Cart"

const electronics: Category = {
  id: 1,
  name: "Eletrônicos"
}

const notebook: Product = {
  id: 1,
  name: "Notebook",
  price: 3500,
  category: electronics
}

const mouse: Product = {
  id: 2,
  name: "Mouse",
  price: 150,
  category: electronics
}

const cart = new Cart()

cart.addItem(notebook, 1)
cart.addItem(mouse, 2)
cart.addItem(mouse, 1)

console.log("Total de itens:", cart.getTotalItems())
console.log("Preço final:", cart.getFinalPrice())