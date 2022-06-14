const incrementQty = (qty) => parseInt(qty) + 1;
const decrementQty = (qty) => {
    if(qty > 1) {
        return qty - 1
    } else {
        return 1
    }
};
const recalculateSubtotal = (price, qty, discout = 0) => {
   return (1 - parseFloat(discout) / 100) * price * qty
};

module.exports = { incrementQty, decrementQty, recalculateSubtotal };
