# 🎂 Age Calculator

A simple and clean web app that calculates your exact age in **years**, **months**, and **days** based on your date of birth.

---

## 🚀 Demo

> Enter your date of birth, hit the button, and instantly see your precise age!

---

## ✨ Features

- Calculates age down to the exact day
- Handles month/day boundary edge cases correctly
- Instant result on button click
- Lightweight — pure HTML, CSS & JavaScript (no dependencies)

---

## 🛠️ How It Works

1. The user selects their date of birth via a date input (`#dob`).
2. On clicking the Calculate button (`#calbtn`), the script:
   - Computes the difference between today's date and the entered DOB.
   - Adjusts for cases where the current day/month is earlier than the birth day/month.
   - Displays the result in years, months, and days.

---

## 📁 Project Structure

```
age-calculator/
├── index.html      # Main HTML file with input and result elements
├── style.css       # Styling (optional)
└── script.js       # Core age calculation logic
```

---
🔗 link : https://vishandeveloper29.github.io/Age-Calculator/

## 💻 Usage

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/age-calculator.git
   ```
2. Open `index.html` in your browser — no build step or server needed.

---

## 🧠 Core Logic (script.js)

```javascript
const dob = new Date(dobin.value);
const today = new Date();

let years = today.getFullYear() - dob.getFullYear();
let months = today.getMonth() - dob.getMonth();
let days = today.getDate() - dob.getDate();

if (days < 0) {
  months -= 1;
  const prvmonth = new Date(today.getFullYear(), today.getMonth(), 0);
  days += prvmonth.getDate();
}

if (months < 0) {
  years -= 1;
  months += 12;
}
```

The key insight is handling **negative day/month differences** by borrowing from the previous month or year — similar to how manual subtraction works.

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🙌 Contributing

Pull requests are welcome! Feel free to open an issue for bugs or feature suggestions.
