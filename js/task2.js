// # Завдання 2

// Створіть об'єкт `car`, який містить властивості марка, модель, рік випуску,
// швидкість.

// Створіть ще один обʼєкт `location`, який містить властивість `city` та
// `distance`

// Створіть метод обʼєкта car `showInfo()`, який виводить інформацію про автомобіль
// на екран у форматі
// `Марка: <марка>; Модель: <модель>; Рік випуску: <рік випуску>; `.

// Створіть функцію `showTime()`, яка буде вираховувати за який час автомобіль
// доїде до міста `city` та виводити в консоль повідомлення в форматі
// `Автомобіль {brand}, марки {model} дістанеться міста {city} за {time}`

// Використовуйте обєднання обʼєктів, метод forEach та ключове слово this для
// доступу до властивостей об'єкту.


const car = {
    brand: "BMW",
    model: "M5 competition",
    year: 2020,
    speed: 200,
    showInfo() {
        console.log(`Марка: ${this.brand}; Модель: ${this.model}; Рік випуску: ${this.year}`);
    }
};

const location = {
    city: "Київ",
    distance: 300
};

function showTime() {
    const time = this.location.distance / this.car.speed;
    console.log(`Автомобіль ${this.car.brand}, марки ${this.car.model} дістанеться міста ${this.location.city} за ${time} год.`);
}

car.showInfo(); 
showTime.call({ car, location }); 