const pattern = /^([\w]*[\w\.]*(?!\.)@gmail.com)/
const pattern_phone = /^((8|\+374|\+994|\+995|\+375|\+7|\+380|\+38|\+996|\+998|\+993)[\- ]?)?\(?\d{3,5}\)?[\- ]?\d{1}[\- ]?\d{1}[\- ]?\d{1}[\- ]?\d{1}[\- ]?\d{1}(([\- ]?\d{1})?[\- ]?\d{1})?$/

const users = [
    {
        "ID": 1234,
        "Name": "Ivan",
        "Surname": "Ivanov",
        "Email": "ivan.ivanov@example.com",
        "Phone": "+71234567890"
    },
    {
        "ID": 2345,
        "Name": "Maria",
        "Surname": "Petrova",
        "Email": "maria.petrova@gmail.com",
        "Phone": "+71234567891"
    },
    {
        "ID": 3456,
        "Name": "Alexey",
        "Surname": "Sidorov",
        "Email": "alexey.sidorov@gmail.com",
        "Phone": "+71234567892"
    },
    {
        "ID": 4567,
        "Name": "Olga",
        "Surname": "Smirnova",
        "Email": "olga.smirnova@gmail.com",
        "Phone": "+71234567893"
    },
    {
        "ID": 5678,
        "Name": "Dmitry",
        "Surname": "Volkov",
        "Email": "dmitryvolkov@gmail.com",
        "Phone": "+71234567894"
    },
    {
        "ID": 6789,
        "Name": "Elena",
        "Surname": "Kozlova",
        "Email": "elena.kozlova@example.com",
        "Phone": "+71234567895"
    },
    {
        "ID": 7890,
        "Name": "Sergey",
        "Surname": "Morozov",
        "Email": "sergey.morozov@example.com",
        "Phone": "+71234567896"
    },
    {
        "ID": 8901,
        "Name": "Anna",
        "Surname": "Pavlova",
        "Email": "anna.pavlova@example.com",
        "Phone": "+71234567897"
    },
    {
        "ID": 9012,
        "Name": "Pavel",
        "Surname": "Lebedev",
        "Email": "pavel.lebedev@example.com",
        "Phone": "+71234567898"
    },
    {
        "ID": 1023,
        "Name": "Tatiana",
        "Surname": "Romanova",
        "Email": "tatiana.romanova@example.com",
        "Phone": "+71234567899"
    }
];

let succes = []
users.forEach(user => {
    if (pattern.test(user.Email)) {
        succes.push(user);
    }
});

let name = []

users.forEach(user => {
    name.push(user.Name)
     
})

let Phones = []
users.forEach(user => {
    if (pattern_phone.test(user.Phone)) {
        Phones.push(user.Phone);
    }
});

console.log(Phones);
console.log(name);
console.log(succes);