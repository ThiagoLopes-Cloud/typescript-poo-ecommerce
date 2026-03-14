"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Cart_1 = require("./models/Cart");
const electronics = {
    id: 1,
    name: "Eletrônicos"
};
const notebook = {
    id: 1,
    name: "Notebook",
    price: 3500,
    category: electronics
};
const mouse = {
    id: 2,
    name: "Mouse",
    price: 150,
    category: electronics
};
const cart = new Cart_1.Cart();
cart.addItem(notebook, 1);
cart.addItem(mouse, 2);
cart.addItem(mouse, 1);
console.log("Total de itens:", cart.getTotalItems());
console.log("Preço final:", cart.getFinalPrice());
//# sourceMappingURL=index.js.map