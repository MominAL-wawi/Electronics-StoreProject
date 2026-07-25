const https = require("https");

const products = {
  1: { name: "iPhone 15 Pro Max", price: 1199, stock: 999 },
  2: { name: "Samsung Galaxy S24 Ultra", price: 1099, stock: 999 },
  3: { name: 'MacBook Pro 16"', price: 2499, stock: 999 },
  4: { name: "Dell XPS 15", price: 1799, stock: 999 },
  5: { name: 'iPad Pro 12.9"', price: 1099, stock: 999 },
  6: { name: "Samsung Galaxy Tab S9", price: 799, stock: 999 },
  7: { name: "AirPods Pro 2", price: 249, stock: 999 },
  8: { name: "Sony WH-1000XM5", price: 399, stock: 999 },
  9: { name: "Apple Watch Series 9", price: 429, stock: 999 },
  10: { name: "Samsung Galaxy Watch 6", price: 329, stock: 999 },
  11: { name: 'LG OLED C3 65"', price: 1799, stock: 999 },
  12: { name: "Sony PlayStation 5", price: 499, stock: 999 },
};

const data = JSON.stringify(products);

const options = {
  hostname: "electronics-store-c9093-default-rtdb.firebaseio.com",
  path: "/Products.json",
  method: "PUT",
  headers: {
    "Content-Type": "application/json",
    "Content-Length": data.length,
  },
};

const req = https.request(options, (res) => {
  console.log(`STATUS: ${res.statusCode}`);
  res.on("data", (d) => {
    process.stdout.write(d);
  });
});

req.on("error", (error) => {
  console.error(error);
});

req.write(data);
req.end();
