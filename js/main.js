const num1 = prompt(`Введите первое число`);
const num2 = prompt(`Введите второе число`);
const operator = prompt(`Выберите необходимое действие:  /,*,+,-`);
if(operator === "+") {
 alert(`${num1} + ${num2} = ${+num1 + +num2}`);
}
if(operator === "-") {
 alert(`${num1} - ${num2} = ${num1 - num2}`);
}
if(operator === "*") {
 alert(`${num1} * ${num2} = ${num1 * num2}`);
}
if(operator === "/") {
 alert(`${num1} / ${num2} = ${num1 / num2}`);
}
