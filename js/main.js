const num1 = prompt(`Введите первое число`);
const num2 = prompt(`Введите второе число`);
const operator = prompt(`Выберите необходимое действие:  div,add,multi,sub`);
if(operator === "add") {
 alert(num1+'+'+num2+'='+(num1 + num2));
}
if(operator === "sub") {
 alert(num1+'-'+num2+'='+(num1 - num2));
}
if(operator === "multi") {
 alert(num1+'*'+num2+'='+(num1 * num2));
}
if(operator === "div") {
 alert(num1+'/'+num2+'='+(num1 / num2));
}
