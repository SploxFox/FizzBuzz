[fizzbuzz-ultimate](README.md) › [Globals](globals.md)

# fizzbuzz-ultimate

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
    i = -50
    )
```
