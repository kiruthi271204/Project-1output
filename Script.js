function checkPassword() {

    let password = document.getElementById("password").value;

    let score = 0;

    // Length
    if (password.length >= 8) {
        score++;
        document.getElementById("length").innerHTML =
            "✅ At least 8 characters";
        document.getElementById("length").className = "valid";
    } else {
        document.getElementById("length").innerHTML =
            "❌ At least 8 characters";
        document.getElementById("length").className = "invalid";
    }

    // Uppercase
    if (/[A-Z]/.test(password)) {
        score++;
        document.getElementById("upper").innerHTML =
            "✅ Uppercase letter";
        document.getElementById("upper").className = "valid";
    } else {
        document.getElementById("upper").innerHTML =
            "❌ Uppercase letter";
        document.getElementById("upper").className = "invalid";
    }

    // Number
    if (/[0-9]/.test(password)) {
        score++;
        document.getElementById("number").innerHTML =
            "✅ Number";
        document.getElementById("number").className = "valid";
    } else {
        document.getElementById("number").innerHTML =
            "❌ Number";
        document.getElementById("number").className = "invalid";
    }

    // Special symbol
    if (/[^A-Za-z0-9]/.test(password)) {
        score++;
        document.getElementById("symbol").innerHTML =
            "✅ Special symbol";
        document.getElementById("symbol").className = "valid";
    } else {
        document.getElementById("symbol").innerHTML =
            "❌ Special symbol";
        document.getElementById("symbol").className = "invalid";
    }

    let result = document.getElementById("result");
    let progress = document.getElementById("progress");

    // Result
    if (password.length === 0) {

        result.innerHTML = "Password Strength";
        progress.style.width = "0%";

    } else if (score <= 1) {

        result.innerHTML = "🔴 Weak Password";
        progress.style.width = "25%";

    } else if (score <= 3) {

        result.innerHTML = "🟠 Medium Password";
        progress.style.width = "65%";

    } else {

        result.innerHTML = "🟢 Strong Password";
        progress.style.width = "100%";
    }
}


// Show / Hide Password
function showPassword(button) {

    let password = document.getElementById("password");

    if (password.type === "password") {

        password.type = "text";
        button.innerHTML = "Hide";

    } else {

        password.type = "password";
        button.innerHTML = "Show";
    }
}


// Clear Button
function clearPassword() {

    document.getElementById("password").value = "";

    document.getElementById("result").innerHTML =
        "Password Strength";

    document.getElementById("progress").style.width = "0%";

    document.getElementById("length").innerHTML =
        "❌ At least 8 characters";

    document.getElementById("upper").innerHTML =
        "❌ Uppercase letter";

    document.getElementById("number").innerHTML =
        "❌ Number";

    document.getElementById("symbol").innerHTML =
        "❌ Special symbol";

    document.getElementById("length").className = "invalid";
    document.getElementById("upper").className = "invalid";
    document.getElementById("number").className = "invalid";
    document.getElementById("symbol").className = "invalid";
}
// Show / Hide Password
function showPassword(button) {
    let password = document.getElementById("password");

    if (password.type === "password") {
        password.type = "text";
        button.innerText = "Hide";
    } else {
        password.type = "password";
        button.innerText = "Show";
    }
}


// Clear Password
function clearPassword() {
    document.getElementById("password").value = "";

    document.getElementById("result").innerText =
        "Password Strength";

    document.getElementById("progress").style.width = "0%";

    document.getElementById("length").innerText =
        "❌ At least 8 characters";

    document.getElementById("upper").innerText =
        "❌ Uppercase letter";

    document.getElementById("number").innerText =
        "❌ Number";

    document.getElementById("symbol").innerText =
        "❌ Special symbol";

    document.getElementById("length").className = "invalid";
    document.getElementById("upper").className = "invalid";
    document.getElementById("number").className = "invalid";
    document.getElementById("symbol").className = "invalid";
}
