const dobin = document.querySelector("#dob");
const btn = document.querySelector("#calbtn");
const result = document.querySelector("#result");

btn.addEventListener("click", function () {
  if (!dobin.value) {
    result.innerText = "Please enter your date of birth!";
    return;
  }

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

  result.textContent = `You are ${years} years, ${months} months, and ${days} days old 🎉`;
});
