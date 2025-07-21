const transactionsUl = document.getElementById("transactions");
const balanceEl = document.getElementById("balance");
const incomeEl = document.getElementById("income");
const expenseEl = document.getElementById("expense");
const form = document.getElementById("form");
const descriptionInput = document.getElementById("description");
const amountInput = document.getElementById("amount");

let transactions = JSON.parse(localStorage.getItem("transactions")) || [];

function addTransaction(e) {
  e.preventDefault();

  const description = descriptionInput.value.trim();
  const amount = +amountInput.value;

  if (!description || isNaN(amount)) {
    alert("Please enter valid data");
    return;
  }

  const transaction = {
    id: Date.now(),
    description,
    amount,
  };

  transactions.push(transaction);
  updateLocalStorage();
  renderTransactions();
  form.reset();
}

function deleteTransaction(id) {
  transactions = transactions.filter(txn => txn.id !== id);
  updateLocalStorage();
  renderTransactions();
}

function updateLocalStorage() {
  localStorage.setItem("transactions", JSON.stringify(transactions));
}

function renderTransactions() {
  transactionsUl.innerHTML = "";

  transactions.forEach(txn => {
    const li = document.createElement("li");
    li.classList.add(txn.amount > 0 ? "income" : "expense");
    li.innerHTML = `
      ${txn.description} 
      <span>₹${txn.amount}</span>
      <button onclick="deleteTransaction(${txn.id})">❌</button>
    `;
    transactionsUl.appendChild(li);
  });

  updateSummary();
}

function updateSummary() {
  const amounts = transactions.map(t => t.amount);
  const total = amounts.reduce((acc, val) => acc + val, 0).toFixed(2);
  const income = amounts.filter(a => a > 0).reduce((acc, val) => acc + val, 0).toFixed(2);
  const expense = amounts.filter(a => a < 0).reduce((acc, val) => acc + val, 0).toFixed(2);

  balanceEl.innerText = `₹${total}`;
  incomeEl.innerText = `₹${income}`;
  expenseEl.innerText = `₹${Math.abs(expense)}`;
}

form.addEventListener("submit", addTransaction);

// Initial load
renderTransactions();
