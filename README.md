# JavaScript Beginner Tutorial

## Running JS
You can just put the JavaScript inside a `script` element in your html:
```
<script>
    alert("Hello, world.");
    console.log("Hello again. now im in the console :D");
</script>
```

Try using the console too. If you're in chrome, right click the page. Click "Inspect" and then "Console". You can enter js code one line at a time here.
Try entering `alert("Hello, world.");`

But by far the best way is to put it in a file and execute that the code in that file:
`<script src="path/to/script.js"></script>`


## The Basics
You need to know this stuff. It's boring but its the basics of the language. Every statement in js is executed in order from the top of the page to the bottom. Statements end in a semicolon.

### Assigning values to vars
The value on the right gets assigned to the thing on the left. This happens when there is one equal sign (two equals means something different).  Don't forget to end the statement with a semicolon!
```
var name = "Terminator"; // any thing after double slashes is a comment
var age = 2000; // words need quotes around them but numbers don't
console.log(name + age); // you should get "Terminator2000" here.
console.log(age / 1000); // you should get 2 here.
```
### try some math in the console
```
var num_redfish = 1, num_bluefish = 2;
var num_fish = num_redfish + num_blushfish;
num_fish * 100; // should be (1 + 2) * 100
```

### Logic: True and false. Making comparisons
A big part of coding is comparing values in order to make a decision in code. When comparing the outcome is either *true* or *false*. These are called Booleans.
```
15.234 === 15.234; // === means "is it equal"
15.234 !== 18.4545; // !== means "is it not equal to"
'10' === 10; // note a number inside a string is not equal to a number.
'10' == 10; // double equal is a little more relaxed. It doesn't care that one is string and one is number. this is "truthy"
10 > 5; // greater than
20.4 < 20.2 // less than
10 >= 10 // greater than or equal to
10 <= 5 // less than or equal to

// OR can be represented with ||
true || false; // this should be true
(5 === 5) || (5 === 3); // what should this be?

// AND can be represented with &&
true && false; // this should be false
(5 === 5) || (5 === 3); // what should this be?
```

### Conditional: If and but… no, or else… oh no I’m confused now.
Logic is used to make decisions in code; choosing to run one piece of code or another depending on the comparisons made. This requires use of something called a conditional. There are a few different conditionals that you might want to use, but we’ll just focus the one used most commonly: if.
```
if (5 > 10) {
    // Run the code in here
} else {
    // Run a different bit of code
}
```
The code between the braces - “{” and “}” - is called a block, and this one is linked to the if statement. It’s only run if the conditional (between the parentheses) is true.  I

5 is not greater than 10, so the code in this case would run the "else" block.


### Looping: For loops
There are other ways of looping through the same code over and over again but the most common is the *For loop*. Use this to run the same block of code a number of times.
```
for (var i = 1; i < 5; i++) {
    alert(i);
}
```
This takes some getting used to but it is basically saying:
* start with i = 1
* every time the middle statement is true, do the thing inside the curly braces.
* when its done do the 3rd statement. (i++ is shorthand for i = i + 1;)
So in this case it will give us an alert box 4 times with the number stored inside of i at that time.


### Functions: Creating functions, using them, passing data in and out.
This is probably the most important section to know.
Functions are reusable blocks of code that carry out a specific task. To *execute* the code in a function you *call* it. A function can be passed *arguments* to use, and a function may return a *value* to whatever line called it.

You call a function like this:
```
doSomething();
findAnInterestingThing();
```

You create a function like this:
```
function add(a, b) {
    return a + b;
};

add(3,2); // will return 5
```
or like this:
```
var add = function(a, b) {
    return a + b;
};

var result = add(1, 2); // result is now 3
```

functions can have no arguments
```
function goodMorning() {
    return "And Good Morning to You too!";
}
```

### Objects: Properties, methods. Inspecting objects.
An object models a real life object. It has *properties* (representing attributes of the real life thing) and *functions* (representing actions that the real life thing can do).
```
var dog = {
    speak: function() { alert("BARK"); },
    wagTail: function() { alert("|\/\/\/\/\/\/\/|"); },
    num_legs: 4,
    personality: "friendly",
    color: "brown",
    fur_type: "curly"
};

// Access an object's properties or methods like this:
dog.num_legs;
dog.speak();
```



### Array: making lists and getting items from them
Arrays are lists of any kind of data, including other arrays. Each item in the array has an *index* — a number — which can be used to retrieve an *element* from the array.
```
var emptyArray = [];

var shoppingList = ['Milk', 'Bread', 'Beans'];
shoppingList[0]; // will give you the first element: 'Milk'

shoppingList[1] = 'Cookies'; // shoppingList is now ['Milk', 'Cookies', 'Beans']
shoppingList.length; // 3
shoppingList.push('A new car'); // push appends another item. list is now ['Milk', 'Cookies', 'Beans', 'A new car']
shoppingList.pop(); // removes the last item. list is back to  ['Milk', 'Cookies', 'Beans']
```

### Combining it all
Here is an example that creates a function called `helloFrom` which accepts a person's name as an argument.  We make an array of people names and loop through each one. We store the value returned from helloFrom(people) into another var called greetings. And finally we alert greeting for each person in the array.
```
var helloFrom = function (personName) {
    return "Hello from " + personName;
}

var people = ['Tom', 'Yoda', 'Ron'];

people.push('Bob');
people.push('Dr Evil');

people.pop();

for (var i=0; i < people.length; i++) {
    var greeting = helloFrom(people[i]);
    alert(greeting);
}
```
