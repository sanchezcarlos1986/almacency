import {add} from './index'

describe.each`
    num1 | num2 |result
    ${1} | ${1} | ${2}
    ${1} | ${2} | ${3}
    ${4} | ${1} | ${5}
    ${2} | ${4} | ${6}
`('add method', ({num1, num2, result}) => {
    test(`${num1} + ${num2} = ${result}`, () => {
        expect(add(num1, num2)).toBe(result)
    })
})