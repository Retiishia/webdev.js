const usernames = [
    "Yandy",
    "Dimas",
    "Mita"
]
const text = `Ada Total ${usernames.length} Usernames`;

// =================================================
const newUsername = "Mita";
const isTaken = usernames.includes(newUsername);

if (isTaken) {
    console.log("Username sudah dipakai, silakan pilih yang lain");
} else {
    console.log("Username tersedia");
}

const favoriteFood = [
    "Nasi Goreng",
    "Sate",
    "Bakso"
];

const secondFood = `Makanan Favoritku yang kedua adalah ${favoriteFood[1]}`;
console.log(secondFood)