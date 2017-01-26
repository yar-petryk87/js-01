//document.write('Hello World!');
//var hello = 'HELLO WORLD';
//alert(hello);
//console.log(hello);
var userName = prompt('Enter your name');
var greet = 'Hello ' + userName;
document.write(greet);

var userAge = Number(prompt('Enter your age'));
if (isNaN(userAge)) {document.write('Enter the number')}
else {
var nextAge =addOne(userAge);
document.write('<br> soon you will be ' + nextAge);
};
function addOne(someNum){
    var result = someNum + 1;
    return result;
    
};