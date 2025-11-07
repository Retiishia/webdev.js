const apple = 5000;
const banana = 10000;
const totalApple = 3;
const totalBanana = 2;
const discount = 0.1;

const originalPrice = apple * totalApple + banana * totalBanana;
const price = originalPrice - (originalPrice * discount);

console.log("Total price:", price);