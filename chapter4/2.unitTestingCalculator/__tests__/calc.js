const calc = require('../calc.js')

test('the sum of 1 and 3 is 4', ()=> {
    const actual = calc.add(1, 3)
    const expected = 4
    expect(actual).toBe(expected)
})

test('the sum of 15 and "31" is 46', ()=> { 
    expect(calc.add(15, "31")).toBe(46)
})

test('the sum of 3 and "name" is false', ()=> { 
    expect(calc.add(3, "name")).toBe(false)
})

test('sum decimal with integer 3.14 + 10 = 13.14', ()=> { 
    expect(calc.add(3.14, 10)).toBe(13.14)
})

test('the substract 5 and 3 is 2', ()=> {
    expect(calc.sub(5, 3)).toBe(2)
})

test('the division 6 and 2 is 3', ()=> {
    expect(calc.div(6, 2)).toBe(3)
})

test('the multiplication 12 and 12 is 144', ()=> {
    expect(calc.mul(12, 12)).toBe(144)
})