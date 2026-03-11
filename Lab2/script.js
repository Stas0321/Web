function findMinMax(arr) {
    if (!arr || arr.length === 0) return "Масив порожній";
    
    let min = arr[0];
    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) min = arr[i]; 
        if (arr[i] > max) max = arr[i]; 
    }
    return { min, max };
}

function areObjectsEqual(obj1, obj2) {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    if (keys1.length !== keys2.length) return false;

    for (let key of keys1) {
        if (obj1[key] !== obj2[key]) return false;
    }
    return true;
}

function isNumberInRange(num, start, end) {
    return num >= start && num <= end;
}

let toggleState = (state) => !state;

function getGradeDescription(grade) {
    if (grade >= 90) return "відмінно";
    if (grade >= 75) return "добре";
    if (grade >= 60) return "задовільно";
    return "незадовільно";
}

function getSeasonIf(month) {
    if (month === 12 || month === 1 || month === 2) return "Зима";
    if (month >= 3 && month <= 5) return "Весна";
    if (month >= 6 && month <= 8) return "Літо";
    if (month >= 9 && month <= 11) return "Осінь";
    return "Помилка";
}

function getSeasonTernary(month) {
    return (month === 12 || month === 1 || month === 2) ? "Зима" :
           (month >= 3 && month <= 5) ? "Весна" :
           (month >= 6 && month <= 8) ? "Літо" :
           (month >= 9 && month <= 11) ? "Осінь" : "Помилка";
}

console.log("--- Завдання 1 ---");
console.log("Мін/Макс:", findMinMax([10, 2, 58, -5, 12]));
console.log("Рівність об'єктів:", areObjectsEqual({a: 1}, {a: 1}));

console.log("\n--- Завдання 2 ---");
console.log("Чи в діапазоні (5, 1, 10):", isNumberInRange(4));
console.log("Зміна true через NOT:", toggleState(true));

console.log("\n--- Завдання 3 ---");
console.log("Оцінка 82:", getGradeDescription(82));
console.log("Сезон (місяць 4) через IF:", getSeasonIf(4));
console.log("Сезон (місяць 4) через '?':", getSeasonTernary(4));