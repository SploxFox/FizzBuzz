# The ultimate FizzBuzz.
## Never write the same line again.
*Example usage*:
```
fizzBuzz(i => i < 100, {3: "Fizz", 5: "Buzz"})
```
Goes through all of the numbers from 0 (default start) until the first argument returns false (100). Uses the second argument to determine the resulting FizzBuzz string.
## __*ULTIMATE CUSTOMIZABILITY*__.
*Advanced usage*:
```
fizzBuzz(
    i => i < 1000,
    {7: "God", 9: "Is", 11: "Dead"},
    i => i + 2,
    -50
);
```
*__ULTIMATE CUSTOMIZATION.__*
# Documentation
* Note: Full documentation is in the docs/ folder in the package.

## **Interfaces**
## *FizzBuzzNumbersMap*

Maps numbers to their corresponding FizzBuzz string.

Ex: 
```
{
     3: "Fizz",
     5: "Buzz"
}
```

### Hierarchy

* **FizzBuzzNumbersMap**

### Indexable

* \[ **index**: *number*\]: string

Maps numbers to their corresponding FizzBuzz string.

## **Functions**

##  *fizzBuzz*

▸ **fizzBuzz**(`shouldContinue`: function, `map`: [FizzBuzzNumbersMap](../interfaces/_index_.fizzbuzznumbersmap.md), `incrementer`: function, `startValue`: number): *string | number[]*

Defined in index.ts:24

Calculates a FizzBuzz for any desired set. All inputs are optional.

**Parameters:**

▪ `Default value`  **shouldContinue**: *function*= (i) => i < 100

Function that returns a value on whether the
FizzBuzz should continue or not. (Default: stops at 100)

▸ (`index`: number): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`index` | number |

▪ `Default value`  **map**: *[FizzBuzzNumbersMap](../interfaces/_index_.fizzbuzznumbersmap.md)*= {3: "Fizz", 5: "Buzz"}

Map between numbers and their corresponding words.
(Default: {3: "Fizz", 5: "Buzz"})

▪ `Default value`  **incrementer**: *function*= (i) => i + 1

Function to increment to the next value.
(Default: (i) => i + 1)

▸ (`index`: number): *number*

**Parameters:**

Name | Type |
------ | ------ |
`index` | number |

▪ `Default value`  **startValue**: *number*= 0

The value to start at. (Default: 0)

**Returns:** *string | number[]*