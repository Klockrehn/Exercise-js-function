/* - [Level Easy](#level-easy)

  - [Segment 1, no params, no return values](#segment-1-functions-with-no-parameters-and-no-return-values)
  - [Segment 2, params, no return values](#segment-2-functions-with-parameters-one-or-more)
  - [Segment 3, params and return values](#segment-3-functions-with-parameters-and-return-values)

- [Level Intermediate](#level-intermediate)
</details>

#### Level Easy

### Segment 1: Functions with No Parameters and No Return Values

1. **Basic Greeting**

   - Create a function called `greet` that logs the string `"Hello, World!"` to the console. /*  */
   function greeting() {
    console.log("Hello World") ;
   }

/* 2. **Favorite Number**

   - Write a function named `favoriteNumber` that logs your favorite number (e.g., `42`) to the console./*  */
   function favoriteNumber() {
    console.log("1"); 
   }

/* 3. **Magic Eight Ball**

   - Create a function called `magicEightBall` that logs a random response from the following list: `"Yes"`, `"No"`, `"Maybe"`, or `"Ask again later"`./*  */
   function magicEightBall() {
    const answers = [
        "Yes",
        "No",
        "Maybe",
        "Ask again later"
    ];
    const randomIndex = Math.floor(Math.random() * answers.length);
    console.log(answers[randomIndex]);
   }

/* 4. **Current Year**

   - Write a function called `getCurrentYear` that logs the current year to the console using the `Date` object./*  */

   function getCurrentYear(){
    console.log("2024");
   }

/* 5. **Random Joke**

   - Create a function called `tellJoke` that logs a random joke from a predefined list of jokes to the console./*  */

   function tellJoke() {
    const jokes = [
        "Why don't skeletons fight each other? They don’t have the guts!",
        "I told my wife she was drawing her eyebrows too high. She looked surprised!",
        "Why did the bicycle fall over? Because it was two-tired!",
        "What did one wall say to the other wall? I'll meet you at the corner!",
        "How does a penguin build its house? Igloos it together!"
    ];

    const randomIndex = Math.floor(Math.random() * jokes.length);
    console.log(jokes[randomIndex]);
}

/* ---

### Segment 2: Functions with Parameters (One or More) /*  */

/* 6. **Personalized Greeting**

   - Write a function named `personalGreeting` that takes a name as a parameter and logs a greeting string (e.g., `"Hello, [name]!"`) to the console./*  */

    function personalGreeting(firstName) {
        console.log("Hello " + firstName + "!");
    }
    personalGreeting("Johan");

/*7. **Sum of Two Numbers**

   - Create a function called `add` that takes two numbers as parameters and logs their sum to the console./*  */
    
    function add(a, b) {
        return a + b;
    }
    let num1 = 2;
    let num2 = 4;
    let sum = add(num1, num2);
    console.log("Sum of your numbers is :", sum)

/*8. **Age in Months**

   - Write a function named `ageInMonths` that takes a person's age in years as a parameter and logs their age in months (e.g., `age * 12`)./*  */

    function ageInMonths(age) {
        console.log("You are " + age + " months old")
    }
    ageInMonths(22 * 12);

/*9. **Temperature Converter**

   - Create a function called `celsiusToFahrenheit` that takes a temperature in Celsius as a parameter and logs the equivalent temperature in Fahrenheit to the console./*  */

    function celsiusToFahrenheit(Celsius) {
        console.log(1.8 * Celsius + 32)
    }
    celsiusToFahrenheit("30");

/*10. **Full Name**
    - Write a function named `getFullName` that takes two parameters, `firstName` and `lastName`, and logs the full name as a single string (e.g., `"John Doe"`) to the console./*  */

    function getFullName(fullName){
        console.log(fullName)
    }
    getFullName("Johan Rehn");

/* ---

### Segment 3: Functions with Parameters and Return Values

11. **Area of a Rectangle**

    - Create a function called `calculateArea` that takes the length and width of a rectangle as parameters and logs the area to the console./*  */

    function calculateArea(a, b) {
        return a * b;
    }
    let length = 20;
    let width = 10;
    let sumArea = calculateArea(length, width);
    console.log("The area is :", sumArea)
    
/*12. **Find Maximum**

    - Write a function named `findMax` that takes two numbers as parameters and logs the larger of the two./*  */

    function findMax(num1, num2) {
        if (num1 > num2) {
            console.log(num1);
        } else {
            console.log(num2);
        }
    }

    findMax(10, 11)

/*13. **Count Vowels**

    - Create a function called `countVowels` that takes a string as a parameter and logs the number of vowels (a, e, i, o, u) in that string./*  */

    function countVowels(str) {
        let count = 0;
        const vowels = 'aeiouAEIOU';

        for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        } 
    }
    console.log(count);
}
    countVowels("Hej Jerry");

/*14. **Discount Price**

    - Write a function named `calculateDiscount` that takes the original price and the discount percentage as parameters and logs the price after discount to the console./*  */

    function calculateDiscount(originalPrice, discountPercentage) {
        const discountAmount = (originalPrice * discountPercentage) / 100; 
        const priceAfterDiscount = originalPrice - discountAmount;
        console.log(`The price after ${discountPercentage}% discount is: $${priceAfterDiscount.toFixed(2)}`);
    }
    calculateDiscount(100, 20);
    

/*15. **Reverse String**
    - Create a function called `reverseString` that takes a string as a parameter and logs the string reversed to the console./*  */

    function reverseString(str) {
        const reversedStr = str.split('').reverse().join('');
        console.log(reversedStr);
    }
    
    reverseString("Hello");

/*---

#### Level Intermediate

1. **Palindrome Checker**

   - Write a function called `isPalindrome` that takes a string as a parameter and returns `true` if the string is a palindrome (reads the same forwards and backwards) and `false` otherwise.

2. **FizzBuzz**

   - Create a function named `fizzBuzz` that takes a number as a parameter and returns:
     - `"Fizz"` if the number is divisible by 3,
     - `"Buzz"` if it is divisible by 5,
     - `"FizzBuzz"` if it is divisible by both, and
     - the number itself if none of these conditions are met.

3. **Factorial Calculator**

   - Write a function called `factorial` that takes a positive integer as a parameter and returns the factorial of that number (e.g., `5! = 5 × 4 × 3 × 2 × 1`).

4. **Longest Word**

   - Create a function named `findLongestWord` that takes a string (a sentence) as a parameter and returns the longest word in that sentence.

5. **Array Average**

   - Write a function called `calculateAverage` that takes an array of numbers as a parameter and returns the average of those numbers.

6. **Remove Duplicates**

   - Create a function named `removeDuplicates` that takes an array as a parameter and returns a new array with duplicate values removed.

7. **Capitalize First Letter**

   - Write a function called `capitalizeFirstLetter` that takes a string as a parameter and returns the string with the first letter capitalized.

8. **Count Occurrences**

   - Create a function named `countOccurrences` that takes a string and a character as parameters and returns the number of times the character appears in the string.

9. **Merge Arrays**

   - Write a function called `mergeArrays` that takes two arrays as parameters and returns a new array that contains all the elements from both arrays, ensuring no duplicates.

10. **Random Password Generator**

    - Write a function called `generatePassword` that takes a length as a parameter and returns a randomly generated password of that length, using uppercase letters, lowercase letters, and numbers.

11. **Character Frequency**

    - Create a function named `charFrequency` that takes a string as a parameter and returns an object with each character as a key and the number of times it appears in the string as the value.

12. **Intersection of Arrays**

    - Write a function called `arrayIntersection` that takes two arrays as parameters and returns a new array containing only the elements that are present in both arrays.

13. **String Reversal**

    - Create a function named `reverseWords` that takes a string as a parameter and returns the string with the order of the words reversed (e.g., `"Hello World"` becomes `"World Hello"`). */

// 14. **Find Minimum**
    
    //- Write a function called `findMin` that takes an array of numbers as a parameter and returns the smallest number in the array.
  