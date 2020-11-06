const text = "    coucou tout le monde.          ";

const addPoliteExpression = text => text + " ici OCTO";

const toUpperCase = text => text.toUpperCase();

const removeLastCharacter = text => text.substring(0, text.length - 1);

const trimText = text => text.trim();

console.log(addPoliteExpression(toUpperCase(removeLastCharacter(trimText(text)))));

const pipe = (...fns) => text => fns.reduce((cumulateur,fn)=>fn(cumulateur), text);
const compose = (...fns) => text => fns.reduceRight((cumulateur,fn)=>fn(cumulateur), text);

const transform = (text) => pipe(trimText, removeLastCharacter, toUpperCase, addPoliteExpression)(text);


console.log(transform(text));
console.log(compose(addPoliteExpression,toUpperCase,removeLastCharacter,trimText)(text))
