/*
DESCRIPTION:
In this challenge, you are curious about how old you would be in dog years.
You are expected to write JavaScript code that will convert any human age 
to dog years. When a user enters a human age into the calculator and pressed 
‘convert me to dog years’, the new dog years age should show up in the space 
below it.

On average, a dog’s first year on the planet worth is the equivalent of 10.5 
human years.

event listeners, getElementById, operators

*/

// Write your code here 👇
const button = document.querySelector('.button')
const input = document.querySelector('#input')
const result = document.querySelector('#result')


button.addEventListener('click', calculateAge)

function calculateAge() {
    
    // human  1-15 = 1 cat 
    // human  16-24 = 2 cat
    //      25-28 = 3 cat
    //      28-60 = +1 for every 4 years: Math.round(3 + (input.value - 28)/4)
    if (input.value <= 15) {
        result.innerText = 1
    } else if (input.value <= 24) {
        result.innerText = 2
    } else if (input.value <= 28) {
        result.innerText = 3
    } else {
        result.innerText = Math.round(3 + (input.value - 28)/4)
    }
    
    
    
}





/*

DETAILED INSTRUCTIONS
1. pick out the neccesary elements from the HTML
2. use the input value and convert it into dog years on 'click'
3. display the result in the h1 tag

STRETCH GOALS:
- Can you convert your age into dog years, months and days? 
- Can you improve the overall design?

*/
