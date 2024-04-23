function login() {
    document.getElementById('loader').style.display = 'block';
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
    setTimeout(() => {
        window.location.href = 'page.html';
    }, 2000);
}

