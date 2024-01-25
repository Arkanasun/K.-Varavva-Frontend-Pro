let num1 = prompt('Первое число');
num1 = Number(num1);

let num2 = prompt('Второе число');
num2 = Number(num2);

let operator = prompt('Выберите операцию div,add,multi,sub');
switch (operator) {
    case 'add':
        alert (num1+'+'+num2+'='+(num1 + num2));
        break;
    case 'sub':
        alert (num1+'-'+num2+'-'+'='+(num1 - num2));
        break;
    case 'div':
        alert (num1+'/'+num2+'='+(num1 / num2));
        break;
    case 'multi':
        alert (num1+'*'+num2+'='+(num1 * num2));}