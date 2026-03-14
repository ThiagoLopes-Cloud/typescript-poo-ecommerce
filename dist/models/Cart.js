"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cart = void 0;
class Cart {
    items = [];
    addItem(product, quantity) {
        const exists = this.items.some(item => item.product.id === product.id);
        if (exists) {
            this.items = this.items.map(item => {
                if (item.product.id === product.id) {
                    return {
                        ...item,
                        quantity: item.quantity + quantity
                    };
                }
                return item;
            });
        }
        else {
            this.items.push({
                product,
                quantity
            });
        }
    }
    getTotalItems() {
        return this.items.reduce((total, item) => {
            return total + item.quantity;
        }, 0);
    }
    getFinalPrice() {
        return this.items.reduce((total, item) => {
            return total + item.product.price * item.quantity;
        }, 0);
    }
}
exports.Cart = Cart;
//# sourceMappingURL=Cart.js.map