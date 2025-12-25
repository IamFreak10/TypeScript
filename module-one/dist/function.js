"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addNormal(num1, num2) {
    return num1 + num2;
}
const addArrow = (num1, num2) => num1 + num2;
const poorUser = {
    name: 'Mafuj',
    balance: 0,
    addBalance(value) {
        this.balance += value;
        return this.balance + value;
    },
};
console.log(poorUser.addBalance(600));
//# sourceMappingURL=function.js.map