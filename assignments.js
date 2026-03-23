//Total Salary Calculation
function calculateSalary(basic, hra, bonus) {
  return basic + hra + bonus;
}
console.log("Total Salary:", calculateSalary(20000, 5000, 2000));
// 2. Final Product Price After Discount
function finalPrice(price, discount) {
  return price - (price * discount / 100);
}
console.log("Final Price:", finalPrice(1000, 10));
// 3. Pass or Fail
function checkResult(marks) {
  return marks >= 40 ? "Pass" : "Fail";
}
console.log(checkResult(55));
// 4. Display Products using map()
const products = ["Laptop", "Phone", "Tablet"];
products.map(p => console.log(p));
// 5. Filter Prices > 1000
const prices = [500, 1500, 2000, 800];
const filtered = prices.filter(p => p > 1000);
console.log(filtered);
// 6. Greeting Function (Default Parameter)
function greet(name = "Guest") {
  console.log(`Hello, ${name}!`);
}
greet();
greet("John");
// 7. Merge Arrays (Spread Operator)
const arr1 = [1, 2];
const arr2 = [3, 4];
const merged = [...arr1, ...arr2];
console.log(merged);
// 8. Order System (Callback)
function placeOrder(order, callback) {
  console.log("Order placed:", order);
  callback();
}

placeOrder("Pizza", () => {
  console.log("Order delivered!");
});
// 9. Student Object Update (Spread)
const student = { name: "Sam", marks: 50 };
const updatedStudent = { ...student, marks: 80 };
console.log(updatedStudent);
// 10. Fake API Call (Async/Await)
async function fetchUser() {
  const fakeAPI = new Promise(resolve => {
    setTimeout(() => resolve({ id: 1, name: "John" }), 1000);
  });

  const data = await fakeAPI;
  console.log(data);
}
fetchUser();
//11. GST Calculator (Arrow Function)
const calculateGST = (amount, rate) => amount + (amount * rate / 100);
console.log(calculateGST(1000, 18));
//12. Electricity Bill
function electricityBill(units, rate) {
  return units * rate;
}
console.log("Bill:", electricityBill(100, 5));
// 13. Shopping Cart Total (reduce)
const cart = [100, 200, 300];
const total = cart.reduce((sum, val) => sum + val, 0);
console.log("Cart Total:", total);
//14. Login Validation
function login(email, password) {
  const validEmail = "test@gmail.com";
  const validPassword = "1234";

  return (email === validEmail && password === validPassword)
    ? "Login Successful"
    : "Invalid Credentials";
}
console.log(login("test@gmail.com", "1234"));
// 15. Product Search (filter)
const items = ["Laptop", "Phone", "Tablet"];
function searchProduct(query) {
  return items.filter(item => item.toLowerCase().includes(query.toLowerCase()));
}
console.log(searchProduct("lap"));
// 16. Invoice Message (Template Literals)
function generateInvoice(name, amount) {
  return `Hello ${name}, your total bill is ₹${amount}.`;
}
console.log(generateInvoice("John", 1500));
// 17. Bonus Calculator (Arrow)
const bonusCalc = salary => salary * 0.10;
console.log("Bonus:", bonusCalc(20000));
// 18. Rest Operator (Total Marks)
function totalMarks(...marks) {
  return marks.reduce((sum, m) => sum + m, 0);
}
console.log(totalMarks(50, 60, 70));
//19. Promise Example (Payment)
function payment(status) {
  return new Promise((resolve, reject) => {
    status ? resolve("Payment Successful") : reject("Payment Failed");
  });
}

payment(true)
  .then(res => console.log(res))
  .catch(err => console.log(err));
// 20. Async Function (Fetch Order)
async function fetchOrder() {
  const order = new Promise(resolve => {
    setTimeout(() => resolve({ orderId: 101, item: "Laptop" }), 1000);
  });

  const data = await order;
  console.log(data);
}
fetchOrder();