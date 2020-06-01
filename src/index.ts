
/**
 * Maps numbers to their corresponding FizzBuzz string.
 * 
 * Ex: {
 *      3: "Fizz",
 *      5: "Buzz"
 * }
 */
export interface FizzBuzzNumbersMap {
    [index: number]: string
}

/**
 * Calculates a FizzBuzz for any desired set. All inputs are optional.
 * @param shouldContinue Function that returns a value on whether the
 * FizzBuzz should continue or not. (Default: stops at 100)
 * @param map Map between numbers and their corresponding words.
 * (Default: {3: "Fizz", 5: "Buzz"})
 * @param incrementer Function to increment to the next value.
 * (Default: (i) => i + 1)
 * @param startValue The value to start at. (Default: 0)
 */
export function fizzBuzz(
        shouldContinue: (index: number) => boolean = (i) => i < 100,    
        map: FizzBuzzNumbersMap = {3: "Fizz", 5: "Buzz"},
        incrementer: (index: number) => number = (i) => i + 1,
        startValue: number = 0) {
    
    const out: (number | string)[] = [];

    for (let i = startValue; shouldContinue(i); incrementer(i)) {
        let string = '';
        for (let num in map) {
            if (i % +num == 0) {
                string += map[num]
            }
        }

        out.push(string || i);
    }

    return out;
}