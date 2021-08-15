const firstName = document.getElementById("fname").value;
const lastName = document.getElementById("lname").value;
const address = document.getElementById("address").value;
const email = document.getElementById("email").value;
const password = document.getElementById("password").value;

const form = {
    firstName,
    lastName,
    address,
    email,
    password
}

const submitForm = document.getElementById('signupForm').addEventListener('submit', signup)

async function signup(e) {
    e.preventDefault(e)
    console.log(form)
    const url = 'http://localhost:3000/auth/signup'
    const request = await fetch(url, {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(form)
    })

    const ressult = await request.json();

}