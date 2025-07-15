const budget = document.getElementById("budgetInput");
const budgetbut = document.getElementById("budgetbut");
const budgetshow = document.getElementById("budgetshow");
const expensesshow = document.getElementById("expensesshow");
const balanceshow = document.getElementById("balanceshow");
const expensename = document.getElementById("expenseName");
const expensebut = document.getElementById("expensesbut");
const expenseamt = document.getElementById("expenseAmount");
const here = document.getElementById("here");

let count = 0, rem = 0;

budgetbut.addEventListener('click', function () {
    if (budget.value.trim() !== "") {
        count = Number(budget.value);
        rem = 0;

        budgetshow.innerText = `₹${count}`;
        balanceshow.innerText = `₹${count}`;
        expensesshow.innerText = `₹0`;
        here.innerHTML = "";
    }
});

expensebut.addEventListener('click', function () {
    if (expenseamt.value.trim() !== "" && expensename.value.trim() !== "") {
        const amt = Number(expenseamt.value);

        count -= amt;
        rem += amt;

        expensesshow.innerText = `₹${rem}`;
        balanceshow.innerText = `₹${count}`;

        const item = document.createElement("li");
        item.textContent = `${expensename.value} - ₹${amt}`;
        item.className = "listelement";

        const delBtn = document.createElement("button");
        delBtn.textContent = "❌";
        delBtn.className = "ml-4 text-red-500";
        delBtn.onclick = function () {
            item.remove();
            count += amt;
            rem -= amt;
            balanceshow.innerText = `₹${count}`;
            expensesshow.innerText = `₹${rem}`;
        };

        item.appendChild(delBtn);
        here.appendChild(item);
    }
});
