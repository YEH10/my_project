const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});




























document.getElementById("card-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let cardNumber = document.getElementById("card-number").value;
    let expiryDate = document.getElementById("expiry-date").value;
    let cvv = document.getElementById("cvv").value;

    if(cardNumber && expiryDate && cvv) {
        showNotification("تم إضافة البطاقة بنجاح", "success");
    } else {
        showNotification("يرجى ملء جميع الحقول", "error");
    }
});

document.getElementById("charge-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let amount = document.getElementById("charge-amount").value;
    
    if(amount && amount > 0) {
        let currentBalance = parseFloat(document.getElementById("balance").textContent);
        let newBalance = currentBalance + parseFloat(amount);
        document.getElementById("balance").textContent = newBalance.toFixed(2);
        showNotification("تم شحن المحفظة بنجاح", "success");
    } else {
        showNotification("يرجى إدخال مبلغ صحيح", "error");
    }
});

function showNotification(message, type) {
    let notification = document.getElementById("notification");
    notification.textContent = message;
    notification.style.display = "block";

    if(type === "success") {
        notification.style.backgroundColor = "#d4edda";
        notification.style.color = "#155724";
    } else if(type === "error") {
        notification.style.backgroundColor = "#f8d7da";
        notification.style.color = "#721c24";
    }

    setTimeout(function() {
        notification.style.display = "none";
    }, 5000);
}
