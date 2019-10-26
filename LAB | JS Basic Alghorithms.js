// ## Iteration 1: Names and Input

//   1.1 Create a variable `hacker1` with the driver's name.
let hacker1 = "Adam";

//   1.2 Print `"The driver's name is XXXX"`.
console.log(`"The drivers name is ${hacker1}`);

//   1.3 Create a variable `hacker2` with the navigator's name.
let hacker2 = "Gustavo";

//   1.4 Print `"The navigator's name is YYYY"`.
console.log(`"The navigators name is ${hacker2}`);


// ### Iteration 2: Conditionals

//   2.1. Depending on which name [is longer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length), print:
// 	  - `The Driver has the longest name, it has XX characters` or 
// 	  - `Yo, navigator got the longest name, it has XX characters` or
// 	  - `Wow, you both got equally long names, XX characters!`
if ((hacker1.length) > (hacker2.length)){
  console.log(`"The driver has the longest name it has" ${hacker1.length}`);
} else if ((hacker1.length) < (hacker2.length)){
console.log(`The navigator has the longest name it has ${hacker2.length}` + " characters");

} else {
  console.log("Wow you both have equally long names!")
}

// ### Iteration 3: Loops

//   3.1 Print all the characters of the driver's name, separated by a space and [in capitals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase)
//   i.e. `"J O H N"`
hacker1.split('').join(' ').toUpperCase();  

//   3.2 Print all the characters of the navigator's name, in reverse order. 
//   i.e. `"nhoJ"`
reverse(hacker1);

  
//   3.3 Depending on the [lexicographic order](https://en.wikipedia.org/wiki/Lexicographical_order) of the strings, print:
//     - `The driver's name goes first.`
//     - `Yo, the navigator goes first definitely.`
//     - `What?! You both got the same name?`
function reverse(str) {
return str.split("").reverse().join("");
}

if (hacker1.localeCompare(hacker2) === -1) console.log("The driver's name goes first");
else if (hacker1.localeCompare(hacker2) === 1) console.log("Yo, the navigator goes first definitely.")
else console.log("What?! You both got the same name?")


// ### Bonus Time!
// Go to [lorem ipsum generator](http://www.lipsum.com/) and:
//   - Generate 3 paragraphs. Store the text in a variable type of string.
//   - Make your program count the number of words in the string.
//   - Make your program count the number of times the Latin word [`et`](https://en.wiktionary.org/wiki/et#Latin) appears.
let bonusstring = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse posuere quam sed ornare mattis. Pellentesque maximus eros semper aliquet rhoncus. Ut ac molestie enim. Suspendisse dictum, mi non mattis aliquet, urna ipsum auctor metus, vehicula finibus quam turpis sit amet lacus. Vivamus lacinia tortor odio, at scelerisque sapien scelerisque at. Nunc id elit a eros elementum commodo porttitor ut enim. Praesent at ultrices orci. Integer sagittis odio at libero interdum, sit amet pellentesque turpis scelerisque.

Suspendisse vitae ante quis nunc ullamcorper faucibus. Quisque sed purus sollicitudin arcu congue aliquam. Pellentesque sollicitudin sapien non nibh vehicula, ac faucibus orci lacinia. Mauris risus arcu, efficitur ut lacus eget, accumsan facilisis ligula. Vivamus nec porttitor lorem. Integer semper nisi non elit commodo, non sollicitudin dolor volutpat. Vivamus mollis ex eu facilisis feugiat. Nulla facilisi. Nam sapien ipsum, ultrices id sodales ac, porta ac lectus. Nulla et nulla iaculis, efficitur diam ac, eleifend libero.

Mauris mattis ligula euismod, rutrum ipsum eget, mattis nulla. Praesent nec augue eget libero eleifend mattis. Suspendisse faucibus arcu ut ligula tempor volutpat. Pellentesque nec molestie turpis. Donec mollis ex in magna ultrices, et placerat mi auctor. Praesent eu arcu vel ipsum pharetra euismod. Donec augue est, blandit sed pharetra sed, laoreet nec augue. Sed ultricies, ante in tempor ultrices, neque felis convallis erat, eget convallis orci elit in sem. Nulla blandit augue eros, quis egestas elit commodo interdum. Donec imperdiet imperdiet lectus, ac scelerisque odio semper eget. Donec vulputate tellus nec tincidunt pharetra. Aliquam accumsan tincidunt mi, in tristique velit egestas id. Nullam in magna urna. Maecenas tincidunt quam non lorem rhoncus vulputate.`

console.log(bonusstring.split(' '))

let newbonus = bonusstring.split(' ')
console.log(newbonus.length)

let foundEt = 0;
for (let i = 0; i < newbonus.length; i++){
  if (newbonus[i].includes("et"))
  foundEt += 1;
}

console.log(foundEt)

let extraSpecialBonus = prompt("Feed me palindrome")

/*
for (let i = 0; i < hacker1.length; i++){
  
  letter = hacker1[i];
  letter += " ";
  console.log(letter);

  if (hacker1.length < (hacker1.length - 1)
  break
}
*/