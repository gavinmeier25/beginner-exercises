const currentDate = require("../src/currentDate")

test('it should return the date like 10/25/1993', () => {
   const spy =  jest.spyOn(Date, 'now').mockImplementation(() => 1665692683450)

    expect(currentDate()).toBe('10/13/2022')

    spy.mockRestore()
})