# Short Responses

For this assessment, aim to write a response with the following qualities:

- [ ] Addresses all parts of the prompt
- [ ] Accurately uses relevant technical terminology
- [ ] Is free of grammar and spelling mistakes
- [ ] Is easy to comprehend

For each prompt below, write your response in the space provided. Aim to answer each prompt in 2-5 concise sentences. Make sure to preview your markdown to check how it is rendered before submitting.

## Prompt 1

Consider the code below which has a bug. Instead of printing the correct letter grade, it always prints `"Your grade is: undefined"`.

```js
const getLetterGrade = (score) => {
  let letter;
  if (score >= 90) {
    let letter = "A";
  } else if (score >= 80) {
    let letter = "B";
  } else if (score >= 70) {
    let letter = "C";
  } else {
    let letter = "F";
  }

  return "Your grade is: " + letter;
};

console.log(getLetterGrade(95)); // This should print "Your grade is: A"
console.log(getLetterGrade(82)); // This should print "Your grade is: B"
console.log(getLetterGrade(74)); // This should print "Your grade is: C"
console.log(getLetterGrade(65)); // This should print "Your grade is: F"
```

**Part A**: Explain why this bug is occurring. Use proper technical terminology.

**Part B**: Then, explain how you would fix it.

### Response 1

**Part A:**

The problem is that the variable `letter` has **function scope** and, inside each if-else blocks, the `letter` variable is declared with `let`, so each one now has **block scope**. Variables declared with `let` (or `const`) only exist within the execution context in which they were declared. Therefore, by the time the if-else statements finish executing, the **function-scoped** `letter` variable has never been assigned a value. As a result, the said `letter` variable is automatically assigned to `undefined`.

**Part B:**

To fix this, instead of declaring a new `letter` variable within the if-else blocks, I would only assign them to their respective letter grade. We only need to declare the **function-scoped** `letter` variable.

---

## Prompt 2

Read the following code:

```js
const originalSettings = { volume: 50, brightness: 80 };
const newSettings = originalSettings;
newSettings.volume = 75;
console.log(originalSettings.volume);
```

**Part A:** What will be logged to the console? Why does this happen? Be sure to use precise technical terminology in your answer.

**Part B:** How would you modify the code so that changing `newSettings.volume` does NOT affect `originalSettings.volume`? Write the corrected code below your explanation.

### Response 2

**Part A:**

`75` will be logged to the console. This happens because `newSettings` is being assigned the reference to `originalSettings` (**shallow copy**), and now both are pointing to the same reference in the **heap**. Therefore, if `newSettings` makes any changes to the `volume` property, it will also affect `originalSettings.volume`.

**Part B:**

Instead of passing a **shallow copy**, I would pass a **deep copy** by using the **spread operator** syntax. This way, `newSettings` and `originalSettings` will be pointing to a unique memory location in the **heap**.

**Corrected Code:**

```js
// Fix this code so newSettings is a true copy
const originalSettings = { volume: 50, brightness: 80 };
const newSettings = { ...originalSettings };
newSettings.volume = 75;
console.log(originalSettings.volume);
```

---

## Prompt 3

Given this array of products and the code using `filter`:

```js
const products = [
  { name: "Laptop", price: 1000, inStock: true },
  { name: "Phone", price: 700, inStock: false },
  { name: "Watch", price: 300, inStock: true },
  { name: "Tablet", price: 500, inStock: true },
];

const itemsInStock = products.filter((product) => {
  return product.inStock;
});
```

Walk through what happens in the first iteration of filter:

- What is the value of `product`?
- What gets returned from the callback?
- What happens with that returned value?

### Response 3

During the first iteration, the value of `product` is assigned the first element in the array: `products[0]` (`{ name: "Laptop", price: 1000, inStock: true }`). Then, `product` accesses the `inStock` property and checks if the product is in stock (if its value is `true`). If it is, the object-element is returned and added to the new array that `filter` will later return.
