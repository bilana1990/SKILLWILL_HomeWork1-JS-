// დაწერე ფუნქცია, რომელიც მიიღებს a და b
// პარამეტრებს და დააბრუნებს ტექსტს
// “ტოლია” თუ a უდრის b-ს, ხოლო
// წინააღმდეგ შემთხვევაში, დააბრუნებს “არ
// არის ტოლი” 

function calculate(a, b) {
    if (a === b) {
        return "ტოლია";
    } else {
        return "არ არის ტოლი";
    }
}

console.log(calculate(5, 5)); // "ტოლია"
console.log(calculate(5, 10)); // "არ არის ტოლი"


// გაითვალისწინე, რომ a და b ყოველთვის
// ერთი და იგივე ტიპის არ არის

function calculate(a, b) {
    if (a == b) {
        return "ტოლია";
    } else {
        return "არ არის ტოლი";
    }
}

console.log(calculate(5, 5)); // "ტოლია"
console.log(calculate(5, '5')); // "ტოლია"
console.log(calculate("5", 5)); // "ტოლია"
console.log(calculate(5, 10)); // "არ არის ტოლი"



// დაწერე ფუნქცია, რომელიც პარამეტრად
// მიიღებს ტემპერატურას ფარენჰეიტებში და
// დააბრუნებს ტემპერატურას ცელსიუსში 

function fromFahrenheit_tiCelsius(temperatureF) {
    let temperatureC = (temperatureF - 32) * 5 / 9;
    return temperatureC;
}

console.log(fromFahrenheit_tiCelsius(32)); // 0
console.log(fromFahrenheit_tiCelsius(68)); // 20
console.log(fromFahrenheit_tiCelsius(100)); // 37.77777777777778
console.log(fromFahrenheit_tiCelsius(-40)); // -40


// თუ პარამეტრი არ არის რიცხვითი მონაცემი
// დააბრუნე - false

function isNumber(param) {
    return typeof param === 'number';
}

console.log(isNumber(123)); // true
console.log(isNumber('123')); // false
console.log(isNumber(true)); // false
console.log(isNumber(null)); // false
console.log(isNumber(undefined)); // false
console.log(isNumber({})); // false
console.log(isNumber([])); // false



// დაწერე ფუნქცია, რომელიც პარამეტრად
// მიიღებს a (პირველი რიცხვი), b (მეორე
// რიცხვი) და operation (+, -, *, /) და
// დააბრუნებს ახალ მნიშვნელობას,
// რომელიც მიიღება ამ ორ რიცხვზე operation
// ცვლადში განსაზღვრული ოპერაციით

function calculate(a, b, operation) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        return 'Error: Both parameters must be numbers';
    }

    switch (operation) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return b !== 0 ? a / b : 'Error: Division by zero';
        default:
            return 'Error: Invalid operation';
    }
}

console.log(calculate(5, 3, '+')); // 8
console.log(calculate(5, 3, '-')); // 2
console.log(calculate(5, 3, '*')); // 15
console.log(calculate(5, 3, '/')); // 1.6666666666666667
console.log(calculate(5, 0, '/')); // 'Error: Division by zero'
console.log(calculate(5, '3', '+')); // 'Error: Both parameters must be numbers'
console.log(calculate(5, 3, 'x')); // 'Error: Invalid operation'


// თუ a და b არ არიან რიცხვები, ან თუ
// operation ცვლადში არის უცნობი, ოპერაცია
// დააბრუნე - false

function checkOperation(a, b, operation) {
    const validOperations = ['+', '-', '*', '/'];
    if (typeof a !== 'number' || typeof b !== 'number' || !validOperations.includes(operation)) {
        return false;
    }
    
    return true;
}


console.log(checkOperation(5, 10, '+'));  // true
console.log(checkOperation(5, '10', '+'));  // false
console.log(checkOperation(5, 10, 'x'));  // false
console.log(checkOperation('a', 'b', '-'));  // false

