const {
    incrementQty,
    decrementQty,
    recalculateSubtotal
} = require('../helpers.js')

test('increment should add 1', () => {
    expect(incrementQty(1)).toBe(2)
})

test('make sure incrementQty add number, not string', () => {
    expect(incrementQty('2')).toBe(3)
})

test('decrement should minus 1', () => {
    expect(decrementQty(2)).toBe(1)
})

test('decrement from 1 is 1', () => {
    expect(decrementQty(1)).toBe(1)
})

test('recalculate subtotal', () => {
    expect(recalculateSubtotal(25000, 3)).toBe(75000)
})

test('recalculate with discount', () => {
    expect(recalculateSubtotal(500000, 1, 27)).toBe(365000)
})
