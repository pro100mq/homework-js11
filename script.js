// const bankAccount = {
//     ownerName:"pro100mq",
//     accountNumber: 150,
//     balance: 200,
//     deposit(amount){
//         if(amount > 0){
//             this.balance += amount
//             return true
//         } else{
//             return false
//         }
//     },
//     withdraw(amount){
//         if (amount > 0 && amount <= this.balance) {
//         this.balance -= amount;
//         return true
//     } else {
//         alert("Не вистачає коштів на вашому рахунку")
//         return false
//     }
//   } 
// }

// const messageDeposit = confirm('Чи хочете ви поповнити свій банківський аккаунт?')
// if (messageDeposit === true){
//     const amount = prompt('На яку суму хочете поповнити рахунок')
//     bankAccount.deposit(amount)
// } else {
//     const messageWithdraw = confirm('Чи хочете вивести кошти з банківського рахунку?')
//     if (messageWithdraw === true){
//         const amount2 = prompt('Яку суму бажаєте вивести?')
//         bankAccount.withdraw(amount2)
//     }
// }
// console.log(`На вашому аккаунті залишилось ${bankAccount.balance} гривень`)


// const weather = {
//     temperature: 0,
//     humidity: 50,
//     windSpeed: 10,
//     isDegree() {
//         return this.temperature < 0;
//     }
// };

// const tempInput = prompt("Введіть температуру в градусах Цельсія:")
// const tempValue = parseFloat(tempInput);
// if (isNaN(tempValue)) {
//     alert("Будь ласка, введіть числове значення");
// } if (weather.isDegree()) {
//     alert("Температура нижче 0 градусів Цельсія.");
// } else {
//     alert("Температура вище або дорівнює 0 градусів Цельсія.");
// }

// console.log(weather)


// const user = {
//     name: "Oleg",
//     email: "user@gmail.com",
//     password: "qwerty123",
//     login(correctEmail,correctPassword) {
//         return this.email === correctEmail && this.password === correctPassword;
//     }
// }

// const correctEmail = prompt("Введіть вашу пошту");
// const correctPassword = prompt("Введіть ваш пароль");
// if (user.login(correctEmail, correctPassword)) {
//     alert(`Ласкаво просимо , ${user.name}!`);
// } else {
//     alert("Ви ввели недійсний пароль або пошту");
// }

const movie = {
    title: 1+1,
    director: "Olivier Nakache",
    year: "2011",
    rating: "8.8",
    isRating() {
        return this.rating > 8
    }
};
if (movie.isRating()){
    alert("Змінюємо колір на зелений, рейтинг більше 8 балів")
}
