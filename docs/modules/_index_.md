[fizzbuzz-ultimate](../README.md) › [Globals](../globals.md) › ["index"](_index_.md)

# Module: "index"

## Index

### Interfaces

* [FizzBuzzNumbersMap](../interfaces/_index_.fizzbuzznumbersmap.md)

### Functions

* [fizzBuzz](_index_.md#fizzbuzz)

## Functions

###  fizzBuzz

▸ **fizzBuzz**(`shouldContinue`: function, `map`: [FizzBuzzNumbersMap](../interfaces/_index_.fizzbuzznumbersmap.md), `incrementer`: function, `startValue`: number): *string | number[]*

Defined in index.ts:24

Calculates a FizzBuzz for any desired set. All inputs are optional.

**Parameters:**

▪`Default value`  **shouldContinue**: *function*= (i) => i < 100

Function that returns a value on whether the
FizzBuzz should continue or not. (Default: stops at 100)

▸ (`index`: number): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`index` | number |

▪`Default value`  **map**: *[FizzBuzzNumbersMap](../interfaces/_index_.fizzbuzznumbersmap.md)*= {3: "Fizz", 5: "Buzz"}

Map between numbers and their corresponding words.
(Default: {3: "Fizz", 5: "Buzz"})

▪`Default value`  **incrementer**: *function*= (i) => i + 1

Function to increment to the next value.
(Default: (i) => i + 1)

▸ (`index`: number): *number*

**Parameters:**

Name | Type |
------ | ------ |
`index` | number |

▪`Default value`  **startValue**: *number*= 0

The value to start at. (Default: 0)

**Returns:** *string | number[]*
