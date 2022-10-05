'use strict';
const num1 = Math.floor(Math.random() * 10);
const num2 = Math.floor(Math.random() * 10);

if (num1 > num2) {
    document.writeln(`乱数1「${num1}」は乱数2「${num2}」より大きい。`);
} else if (num1 == num2) {
    document.writeln(`乱数1「${num1}」と乱数2「${num2}」の値は同じ。`);
} else {
    document.writeln(`乱数1「${num1}」は乱数2「${num2}」より小さい。`);
};
