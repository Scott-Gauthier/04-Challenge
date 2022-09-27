// questions came from https://www.interviewbit.com/javascript-mcq/ and not personally generated.

var randomquestionlist = [
    [`Javascript is an _______ language?`,``,`Object-Oriented`,`Object-Based`,`Procedural`,`None of the above`,1],
    [`Which of the following keywords is used to define a variable in Javascript?`,``,`var`,`let`,`Both A and B`,`None of the above`,3],
    [`Which of the following methods is used to access HTML elements using Javascript?`,``,`getElementbyId()`,`getElementsByClassName()`,`Both A and B`,`None of the above`,3],
    [`"Upon encountering empty statements what does the Javascript Interpreter do?"`,``,`Throws an error`,`Ignores the statements`,`Gives a warning`,`None of the above`,2],
    [`Which of the following methods can be used to display data in some form using Javascript?`,``,`document.write()`,`console.log()`,`window.alert()`,`All of the above`,4],
    [`How can a datatype be declared to be a constant type?`,``,`const`,`var`,`let`,`constant`,1],
    [`What will be the output of the following code snippet?`,`<script type="text/javascript"> a = 5 + "9"; document.write(a); </script>`,`Compilation Error`,`14`,`Runtime Error`,`59`,4],
    [`What will be the output of the following code snippet?`,`"<script type=""text/javascript"" language=""javascript""> var a = ""Scaler""; var result = a.substring(2, 4); document.write(result); </script>"`,`al`,`ale`,`cal`,`caler`,1],
    [`What will be the output of the following code snippet?`,`"<script type=""text/javascript"" language=""javascript""> var x=12; var y=8; var res=eval(""x+y""); document.write(res); </script>"`,`20`,`x+y`,`128`,`None of the above`,1],
    [`"When the switch statement matches the expression with the given labels how is the comparison done?"`,``,`Both the datatype and the result of the expression are compared.`,`Only the datatype of the expression is compared.`,`Only the value of the expression is compared.`,`None of the above.`,1],
    [`What keyword is used to check whether a given property is valid or not?`,``,`in`,`is in`,`exists`,`lies`,1],
    [`What is the use of the <noscript> tag in Javascript?`,``,`The contents are displayed by non-JS-based browsers.`,`Clears all the cookies and cache.`,`Both A and B.`,`None of the above.`,1],
    [`What will be the output of the following code snippet?`,`(function(){ setTimeout(()=> console.log(1),2000); console.log(2); setTimeout(()=> console.log(3),0); console.log(4); })();`,`1 2 3 4`,`2 3 4 1`,`2 4 3 1`,`4 3 2 1`,3],
    [`What will be the output of the following code snippet?`,`(function(a){ return (function(){ console.log(a); a = 6; })() })(21);`,`6`,`NaN`,`21`,`None of the above`,3],
    [`What will be the output of the following code snippet?`,`function solve(arr, rotations){ if(rotations == 0) return arr; for(let i = 0; i < rotations; i++){ let element = arr.pop(); arr.unshift(element); } return arr; } // solve([44, 1, 22, 111], 5);`,`[111, 44, 1, 22]`,`[44, 1, 22, 111]`,`[111, 44, 1, 22]`,`[1, 22, 111, 44]`,1],
    [`What will be the output for the following code snippet?`,`"<p id=""example""></p> <script> function Func() { document.getElementById(""example"").innerHTML=Math.sqrt(81); } </script>"`,`9`,`81`,`Error`,`0`,1],
    [`"When an operator’s value is NULL, the typeof returned by the unary operator is:`,``,`Boolean`,`Undefined`,`Object`,`Integer`,3],
    [`What will be the output of the following code snippet?`,`var a = 1; var b = 0; while (a <= 3) { a++; b += a * 2; print(b); }`,`4 10 18`,`1 2 3`,`1 4 7`,`None of the above`,1],
    [`What does the Javascript “debugger” statement do?`,``,`It will debug all the errors in the program at runtime.`,`It acts as a breakpoint in a program.`,`It will debug error in the current statement if any.`,`All of the above.`,2],
    [`What will be the output of the following code snippet?`,`var a = Math.max(); var b = Math.min(); print(a); print(b);`,`-Infinity Infinity`,`Infinity -Infinity`,`Infinity Infinity`,`-Infinity -Infinity`,1],
    [`What will be the output of the following code snippet?`,`var a = Math.max() < Math.min(); var b = Math.max() > Math.min(); print(a); print(b);`,`&nbsp;true false`,`false true`,`true true`,`false false`,1],
    [`What will be the output of the following code snippet?`,`var a = true + true + true * 3; print(a)`,`3`,`0`,`Error`,`5`,4],
    [`What is the output of the following code snippet?`,`print(NaN === NaN);`,`TRUE`,`FALSE`,`undefined`,`Error`,2],
    [`What will be the output of the following code snippet?`,`print(typeof(NaN));`,`Object`,`Number`,`String`,`None of the above`,2],
    [`What does the ‘toLocateString()’ method do in JS?`,``,`Returns a localised object representation.`,`Returns a parsed string.`,`Returns a localized string representation of an object.`,`None of the above.`,3],
    [`The process in which an object or data structure is translated into a format suitable for transferral over a network, or storage is called?`,``,`Object Serialization`,`Object Encapsulation`,`Object Inheritance`,`None of the above`,1],
    [`Which function is used to serialize an object into a JSON string in Javascript?`,``,`stringify()`,`parse()`,`convert()`,`None of the above`,1],
    [`The 3 basic object attributes in Javascript are:`,``,`Class, prototype, objects' parameters.`,`Class, prototype, object's extensible flag.`,`Class, parameters, object's extensible flag.`,`None of the above`,4],
    [`What will be the output of the following code snippet?`,`let sum = 0; const a = [1, 2, 3]; a.forEach(getSum); print(sum); function getSum(ele) { sum += ele; }`,`6`,`1`,`2`,`None of the above`,1],
    [`What will be the output of the following code snippet?`,`a = [1, 2, 3, 4, 5]; print(a.slice(2, 4));`,`3, 4`,`2, 3`,`3, 4, 5`,`2, 3, 4`,1],
    [`What will be the output of the following code snippet?`,`"rint(parseInt(""123Hello"")); print(parseInt(""Hello123""));`,`123 NaN`,`123Hello Hello123`,`NaN NaN`,`123 123`,1],
    [`Which of the following are closures in Javascript?`,``,`Variables`,`Functions`,`Objects`,`All of the above`,4],
    [`Which of the following is not a Javascript framework?`,``,`Node`,`Vue`,`React`,`Cassandra`,4],
    [`What will be the output of the following code snippet?`,`var a = ""hello""; var sum = 0; for(var i = 0; i < a.length; i++) { sum += (a[i] - 'a'); } print(sum);`,`47`,`NaN`,`0`,`None of the above`,2],
    [`What keyword is used to declare an asynchronous function in Javascript?`,``,`async`,`await`,`setTimeout`,`None of the above`,1],
    [`How to stop an interval timer in Javascript?`,``,`clearInterval`,`clearTimer`,`intervalOver`,`None of the above`,1],
    [`What will be the output of the following code snippet?`,`const set = new Set(); set.add(5); set.add('Hello'); set.add({ name: 'Scaler' }); for (let item of set) { console.log(item + 6); }`,`11 NaN NaN`,`11 NaN [object Object]`,`11 Hello6 [object Object]6`,`None of the above`,3],
    [`How are objects compared when they are checked with the strict equality operator?`,``,`The contents of the objects are compared`,`Their references are compared`,`Both A and B`,`None of the above`,2],
    [`What does … operator do in JS?`,``,`It is used to spread iterables to individual elements`,`It is used to describe a datatype of undefined size`,`No such operator exists`,`None of the above`,1],
    [`What will be the output of the following code snippet?`,`const example = ({ a, b, c }) => { console.log(a, b, c); }; example(0, 1, 2);`,`0 1 2`,`0 Undefined Undefined`,`Undefined Undefined Undefined`,`None of the above`,3],
    [`What will be the output of the following code snippet?`,`let a = [1, 2, 3, 4, 5, 6]; var left = 0, right = 5; var found = false; var target = 5; while(left <= right) { var mid = Math.floor((left + right) / 2); if(a[mid] == target) { found = true; break; } else if(a[mid] < target) { left = mid + 1; } else { right = mid - 1; } } if(found) { print(""YES""); } else { print(""NO""); }`,`YES`,`NO`,`Syntax Error`,`None of the above`,1],
    [`What will be the output of the following code snippet?`,`let s = ""00000001111111""; let l = 0, r = s.length - 1, ans = -1; while(l <= r) { var mid = Math.floor((l + r) / 2); if(s[mid] == '1') { ans = mid; r = mid - 1; } else { l = mid + 1; } } print(ans);`,`8`,`7`,`0`,`1`,2],
    [`What will be the output of the following code snippet?`,`let n = 24; let l = 0, r = 100, ans = n; while(l <= r) { let mid = Math.floor((l + r) / 2); if(mid * mid <= n) { ans = mid; l = mid + 1; } else { r = mid - 1; } } print(ans);`,`5`,`4`,`6`,`3`,2],
    [`What will be the output of the following code snippet?`,`const obj1 = {Name: ""Hello"", Age: 16}; const obj2 = {Name: ""Hello"", Age: 16}; print(obj1 === obj2);`,`TRUE`,`FALSE`,`Undefined`,`None of the above`,2],
    [`What happens when we run this code?`,`"function dog() { print(""I am a dog.""); } dog.sound = ""Bark"";"`,`Syntax Error`,`“I am a dog” gets printed`,`ReferenceError`,`Nothing happens`,4],
    [`How do we write a comment in javascript?`,``,`/* */`,`//`,`#`,`$ $`,2],
    [`Which object in Javascript doesn’t have a prototype?`,``,`Base Object`,`All objects have a prototype`,`None of the objects have a prototype`,`None of the above`,1],
    [`What will be the output of the following code snippet?`,`function test(...args) { console.log(typeof args); } test(12);`,`NaN`,`Number`,`Object`,`Array`,3],
    [`What will be the output of the following code snippet?`,`const obj1 = {first: 20, second: 30, first: 50}; console.log(obj1);`,`{first: 20, second: 30}`,`{first: 50, second: 30}`,`{first: 20, second: 30, first: 50}`,`Syntax Error`,2],
    [`Which of the following are not server-side Javascript objects?`,``,`Date`,`FileUpload`,`Function`,`All of the above`,4],
];