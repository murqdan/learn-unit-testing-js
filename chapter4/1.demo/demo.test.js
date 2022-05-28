describe("demo test", () => {
    test("testing toBe", () => {
       expect(1 + 1).toBe(2)
       expect(true).toBe(true)
       expect({}).not.toBe({})
    })
    
    test("testing toEqual", () => {
        const subject = { name: "murqdan"}
        const actual = { name: "murqdan"}
        expect(subject).toEqual(actual)

        const listOfAbjad = [
            {abjad: "A"},
            {abjad: "B"},
            {abjad: "C"}
        ]
        const listActual = [
            {abjad: "A"},
            {abjad: "B"},
            {abjad: "C"}
        ]
        expect(listOfAbjad).toEqual(listActual)
    })

    test("testing toMatchObject", ()=>{
        const subject = {name: "murqdan"}
        const actual = {name: "murqdan"}
        expect(subject).toMatchObject(actual)
        
        const listOfAbjad = [
            {abjad: "A"},
            {abjad: "B"},
            {abjad: "C"}
        ]
        const listActual = [
            {abjad: "A"},
            {abjad: "B"},
            {abjad: "C"}
        ]
        expect(listOfAbjad).toMatchObject(listActual)
    })
})