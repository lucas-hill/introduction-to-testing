import { describe, it, expect } from 'vitest';

import { add, subtract, multiply, divide } from './arithmetic.js';

describe('add', () => {
  it('should add two positive number', () => {
    expect(add(2, 2)).toBe(4);
  })

  it('should add two negative number', () => {
    expect(add(-2, -2)).toBe(-4);
  })

  it('should parse strings into numbers', () => {
    expect(add('1', '1')).toBe(2);
  })
   
  it('should throw an error if you do not pass in a number as the second argument', () => {
    //This needs to be an anoymous function to throw an error
    expect(()=> add(2, 'potato')).toThrow('not a number');//This checks if the error contains this text
  })

  it('should throw an error if you do not pass in a number as the first argument', () => {
    //This needs to be an anoymous function to throw an error
    expect(()=> add('potato', 2)).toThrow('not a number');//This checks if the error contains this text
  })

  it('should throw if the first argument is not a number', () =>{
    expect( () => add(NaN, 2)).toThrow('not a number');
  })
});

describe('subtract', () => {
  it('should subtract one number from another', () => {
    expect(subtract(4, 2)).toBe(2);
  })

  it('should accept and subtract all of the numbers', () => {
    expect(subtract([10, 5], 2)).toBe(3);
  })

  it('should default undefined values to zero', () => {
    expect(subtract(3)).toBe(3);
  })

  it('should default both undefined values to zero', () => {
    expect(subtract(undefined, 3)).toBe(-3);
  })
});

describe('multiply', () => {
  it('should multiply one number with anohterh', () => {
    expect(multiply(4, 5 )).toBe(20);
  })
});

describe('divide', () => {
  it('should divide two numbers', () => {
    expect(divide(6, 2)).toBe(3);
  })

  it('should return null if dividing by zero', () => {
    expect(divide(10, 0)).toBeNull();
  })

});
